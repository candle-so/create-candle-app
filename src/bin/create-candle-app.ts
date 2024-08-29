#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import { execSync } from "child_process";

const PROJECT_NAME = process.argv[2] || "my-candle-app";
const API_KEY = process.argv[3] || process.env.CANDLE_API_KEY || "";

console.log("STARTING::", PROJECT_NAME, API_KEY);

const TEMPLATE_PATH = path.join(__dirname, "../../src/templates/default");

const createEnvFile = (projectLocation: string) => {
  // Create .env file
  const envPath = path.join(projectLocation, ".env.local");
  let NEXT_PUBLIC_API_URL;
  if (API_KEY.includes("_test_")) NEXT_PUBLIC_API_URL = "https://api.candle.dev";
  if (API_KEY.includes("_live_")) NEXT_PUBLIC_API_URL = "https://api.candle.so";
  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, "NEXT_PUBLIC_URL=http://localhost:3001\n");
    fs.appendFileSync(envPath, `NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}\n`);
    fs.appendFileSync(envPath, `NEXT_PUBLIC_CANDLE_API_KEY=${API_KEY}\n`);
    fs.appendFileSync(envPath, "NEXT_PUBLIC_LOCAL_DEVELOPMENT=\n");
  }
};

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

  console.log("prompts", prompts);

  const answers = await inquirer.prompt([...prompts]);

  const projectLocation = path.join(process.cwd(), answers.projectName || PROJECT_NAME);

  console.log("---> Creating project at:", projectLocation);

  try {
    await fs.copy(TEMPLATE_PATH, projectLocation);
    console.log("Template files copied successfully!");
    console.log("Creating .env file...");
    createEnvFile(projectLocation);
    console.log(".env file created successfully!");
    console.log("Installing dependencies...");
    execSync("npm install", { cwd: projectLocation, stdio: "inherit" });
    console.log("Dependencies installed successfully!");
    console.log(`Your project is ready at ${projectLocation}`);
  } catch (error) {
    console.error("Error copying template files:", error);
  }
}

main();
