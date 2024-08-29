#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const inquirer_1 = __importDefault(require("inquirer"));
const child_process_1 = require("child_process");
const PROJECT_NAME = process.argv[2] || "my-candle-app";
const API_KEY = process.argv[3] || process.env.CANDLE_API_KEY || "";
console.log("STARTING::", PROJECT_NAME, API_KEY);
const TEMPLATE_PATH = path_1.default.join(__dirname, "../../src/templates/default");
const createEnvFile = (projectLocation) => {
    // Create .env file
    const envPath = path_1.default.join(projectLocation, ".env.local");
    let NEXT_PUBLIC_API_URL;
    if (API_KEY.includes("_test_"))
        NEXT_PUBLIC_API_URL = "https://api.candle.dev";
    if (API_KEY.includes("_live_"))
        NEXT_PUBLIC_API_URL = "https://api.candle.so";
    if (!fs_extra_1.default.existsSync(envPath)) {
        fs_extra_1.default.writeFileSync(envPath, "NEXT_PUBLIC_URL=http://localhost:3001\n");
        fs_extra_1.default.appendFileSync(envPath, `NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}\n`);
        fs_extra_1.default.appendFileSync(envPath, `NEXT_PUBLIC_CANDLE_API_KEY=${API_KEY}\n`);
        fs_extra_1.default.appendFileSync(envPath, "NEXT_PUBLIC_LOCAL_DEVELOPMENT=\n");
    }
};
async function main() {
    const prompts = [
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
    const answers = await inquirer_1.default.prompt([...prompts]);
    const projectLocation = path_1.default.join(process.cwd(), answers.projectName || PROJECT_NAME);
    console.log("---> Creating project at:", projectLocation);
    try {
        await fs_extra_1.default.copy(TEMPLATE_PATH, projectLocation);
        console.log("Template files copied successfully!");
        console.log("Creating .env file...");
        createEnvFile(projectLocation);
        console.log(".env file created successfully!");
        console.log("Installing dependencies...");
        (0, child_process_1.execSync)("npm install", { cwd: projectLocation, stdio: "inherit" });
        console.log("Dependencies installed successfully!");
        console.log(`Your project is ready at ${projectLocation}`);
    }
    catch (error) {
        console.error("Error copying template files:", error);
    }
}
main();
