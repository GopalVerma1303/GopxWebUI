import path from "path";
import { Config } from "@/src/utils/get-config";
import {
  registryIndexSchema,
  registryItemWithContentSchema,
  registryWithContentSchema,
} from "@/src/utils/registry/schema";
import { HttpsProxyAgent } from "https-proxy-agent";
import fetch from "node-fetch";
import { z } from "zod";

const baseUrl = process.env.COMPONENTS_REGISTRY_URL ?? "https://webui.gopx.dev";

type theTree = z.infer<typeof registryIndexSchema>;

const agent = process.env.https_proxy
  ? new HttpsProxyAgent(process.env.https_proxy)
  : undefined;

export async function getRegistryIndex() {
  try {
    const [result] = await fetchRegistry(["index.json"]);
    return registryIndexSchema.parse(result);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch components from registry.");
  }
}

export async function resolveTree(index: theTree, names: string[]) {
  const tree: theTree = [];

  for (const name of names) {
    const entry = index.find((entry) => entry.name === name);

    if (!entry) {
      continue;
    }

    tree.push(entry);

    if (entry.registryDependencies) {
      const dependencies = await resolveTree(index, entry.registryDependencies);
      tree.push(...dependencies);
    }
  }

  return tree.filter(
    (component, index, self) =>
      self.findIndex((c) => c.name === component.name) === index,
  );
}

export async function fetchTree(tree: theTree) {
  try {
    const paths = tree.map((item) => {
      const [parent, subfolder] = item.type.split(":");
      return `${parent}/${subfolder}/${item.name}.json`;
    });
    const result = await fetchRegistry(paths);

    return registryWithContentSchema.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch tree from registry.`);
  }
}

export async function getItemTargetPath(
  config: Config,
  item: Pick<z.infer<typeof registryItemWithContentSchema>, "type">,
  override?: string,
) {
  if (override) {
    return override;
  }

  const [parent, type] = item.type.split(":");
  if (!(parent in config.resolvedPaths)) {
    return null;
  }

  return path.join(
    config.resolvedPaths[parent as keyof typeof config.resolvedPaths],
    type,
  );
}

async function fetchRegistry(paths: string[]) {
  try {
    const results = await Promise.all(
      paths.map(async (path) => {
        const response = await fetch(`${baseUrl}/registry/${path}`, {
          agent,
        });
        return await response.json();
      }),
    );
    return results;
  } catch (error) {
    throw new Error(`Failed to fetch registry from ${baseUrl}.`);
  }
}
