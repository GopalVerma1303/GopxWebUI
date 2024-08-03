#! /usr/bin/env node

import figlet from "figlet";
import { Command } from "commander";
import fs from "fs";
import path from "path";

async function listDirContents(filepath: string) {
  try {
    const files = await fs.promises.readdir(filepath);
    const detailedFilesPromises = files.map(async (file: string) => {
      let fileDetails = await fs.promises.lstat(path.resolve(filepath, file));
      const { size, birthtime } = fileDetails;
      return { filename: file, "size(KB)": size, created_at: birthtime };
    });
    const detailedFiles = await Promise.all(detailedFilesPromises);
    console.table(detailedFiles);
  } catch (error) {
    console.error("Error occurred while reading the directory!", error);
  }
}

function createDir(filepath: string) {
  try {
    if (!fs.existsSync(filepath)) {
      fs.mkdirSync(filepath, { recursive: true });
      console.log(`The directory '${filepath}' has been created successfully`);
    } else {
      console.log(`The directory '${filepath}' already exists`);
    }
  } catch (error) {
    console.error(`Error creating directory '${filepath}':`, error);
  }
}

function createFile(filepath: string) {
  try {
    fs.writeFileSync(filepath, "", { flag: "wx" });
    console.log(`An empty file '${filepath}' has been created`);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "EEXIST") {
      console.log(`The file '${filepath}' already exists`);
    } else {
      console.error(`Error creating file '${filepath}':`, error);
    }
  }
}

async function main() {
  const figletText = await new Promise<string>((resolve, reject) => {
    figlet.text("GOPX WEBUI", (err, data) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        reject(err);
      } else {
        resolve(data || "");
      }
    });
  });

  console.log(figletText);

  const program = new Command();
  program
    .name("gopx")
    .description("CLI tool for installing GOPX WEBUI Components.")
    .version("1.0.0")
    .option("-l, --ls [value]", "List directory contents")
    .option("-m, --mkdir <value>", "Create a directory")
    .option("-t, --touch <value>", "Create a file")
    .parse(process.argv);

  const options = program.opts();

  if (options.ls) {
    const targetDir = typeof options.ls === "string" ? options.ls : ".";
    await listDirContents(targetDir);
  }

  if (options.mkdir) {
    createDir(options.mkdir);
  }

  if (options.touch) {
    createFile(options.touch);
  }
}

main().catch(console.error);
