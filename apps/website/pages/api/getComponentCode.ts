import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path: filePath } = req.query;

  if (typeof filePath !== "string") {
    return res.status(400).json({ error: "Invalid file path" });
  }

  const fullPath = path.join(process.cwd(), filePath);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    res.status(200).send(fileContents);
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Error reading file" });
  }
}
