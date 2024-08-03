#!/usr/bin/env node

import figlet from "figlet";
import { Command } from "commander";
import fs from "fs";
import path from "path";

async function listDirContents(filepath: string) {
  try {
    const files = await fs.promises.readdir(filepath);
    const detailedFilesPromises = files.map(async (file: string) => {
      let fileDetails = await fs.promises.lstat(path.resolve(filepath, file));
      const { size, birthtime, mtime } = fileDetails;
      return {
        filename: file,
        "size(KB)": (size / 1024).toFixed(2),
        created_at: birthtime,
        modified_at: mtime,
        isDirectory: fileDetails.isDirectory(),
      };
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

function createFile(filepath: string, content: string = "") {
  try {
    fs.writeFileSync(filepath, content, { flag: "wx" });
    console.log(`File '${filepath}' has been created`);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "EEXIST") {
      console.log(`The file '${filepath}' already exists`);
    } else {
      console.error(`Error creating file '${filepath}':`, error);
    }
  }
}

function deleteItem(filepath: string) {
  try {
    if (fs.existsSync(filepath)) {
      const stats = fs.statSync(filepath);
      if (stats.isDirectory()) {
        fs.rmdirSync(filepath, { recursive: true });
        console.log(`Directory '${filepath}' has been deleted`);
      } else {
        fs.unlinkSync(filepath);
        console.log(`File '${filepath}' has been deleted`);
      }
    } else {
      console.log(`'${filepath}' does not exist`);
    }
  } catch (error) {
    console.error(`Error deleting '${filepath}':`, error);
  }
}

function renameItem(oldPath: string, newPath: string) {
  try {
    fs.renameSync(oldPath, newPath);
    console.log(`'${oldPath}' has been renamed to '${newPath}'`);
  } catch (error) {
    console.error(`Error renaming '${oldPath}' to '${newPath}':`, error);
  }
}

function copyItem(sourcePath: string, destPath: string) {
  try {
    if (fs.existsSync(sourcePath)) {
      const stats = fs.statSync(sourcePath);
      if (stats.isDirectory()) {
        fs.cpSync(sourcePath, destPath, { recursive: true });
        console.log(
          `Directory '${sourcePath}' has been copied to '${destPath}'`,
        );
      } else {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`File '${sourcePath}' has been copied to '${destPath}'`);
      }
    } else {
      console.log(`'${sourcePath}' does not exist`);
    }
  } catch (error) {
    console.error(`Error copying '${sourcePath}' to '${destPath}':`, error);
  }
}

function appendToFile(filepath: string, content: string) {
  try {
    fs.appendFileSync(filepath, content);
    console.log(`Content appended to '${filepath}'`);
  } catch (error) {
    console.error(`Error appending to file '${filepath}':`, error);
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
    .description("CLI tool for managing GOPX WEBUI Components.")
    .version("1.0.0")
    .option("-l, --ls [value]", "List directory contents")
    .option("-m, --mkdir <value>", "Create a directory")
    .option("-t, --touch <value>", "Create a file")
    .option("-d, --delete <value>", "Delete a file or directory")
    .option("-r, --rename <oldPath> <newPath>", "Rename a file or directory")
    .option("-c, --copy <sourcePath> <destPath>", "Copy a file or directory")
    .option("-a, --append <filepath> <content>", "Append content to a file")
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

  if (options.delete) {
    deleteItem(options.delete);
  }

  if (options.rename) {
    renameItem(options.rename[0], options.rename[1]);
  }

  if (options.copy) {
    copyItem(options.copy[0], options.copy[1]);
  }

  if (options.append) {
    appendToFile(options.append[0], options.append[1]);
  }
}

main().catch(console.error);
