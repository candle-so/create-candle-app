#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import { execSync } from "child_process";

let projectName = process.argv[2] || "my-candle-app";

const TEMPLATE_PATH = path.join(__dirname, "../../src/templates/default");

async function main() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
      default: projectName,
    },
  ]);

  const targetPath = path.join(
    process.cwd(),
    answers.projectName || projectName
  );

  console.log("---> Creating project at:", targetPath);

  try {
    await fs.copy(TEMPLATE_PATH, targetPath);
    console.log("Template files copied successfully!");
    console.log("Installing dependencies...");
    execSync("npm install", { cwd: targetPath, stdio: "inherit" });
    console.log("Dependencies installed successfully!");
    console.log(`Your project is ready at ${targetPath}`);
  } catch (error) {
    console.error("Error copying template files:", error);
  }
}

main();
