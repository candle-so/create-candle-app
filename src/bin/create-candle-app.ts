#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import { execSync } from "child_process";

const PROJECT_NAME = process.argv[2] || "my-candle-app";
const API_KEY = process.argv[3] || process.env.CANDLE_API_KEY || "";

const TEMPLATE_PATH = path.join(__dirname, "../../src/templates/default");

async function main() {
  const prompts: any = [
    {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
      default: PROJECT_NAME,
    },
  ];

  if (!API_KEY) {
    prompts.push({
      type: "input",
      name: "apiKey",
      message: "What is your Candle API key?",
      default: API_KEY,
    });
  }

  const answers = await inquirer.prompt([...prompts]);

  const targetPath = path.join(process.cwd(), answers.projectName || PROJECT_NAME);

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
