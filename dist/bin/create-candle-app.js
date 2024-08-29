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
const TEMPLATE_PATH = path_1.default.join(__dirname, "../../src/templates/default");
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
    const answers = await inquirer_1.default.prompt([...prompts]);
    const targetPath = path_1.default.join(process.cwd(), answers.projectName || PROJECT_NAME);
    console.log("---> Creating project at:", targetPath);
    try {
        await fs_extra_1.default.copy(TEMPLATE_PATH, targetPath);
        console.log("Template files copied successfully!");
        console.log("Installing dependencies...");
        (0, child_process_1.execSync)("npm install", { cwd: targetPath, stdio: "inherit" });
        console.log("Dependencies installed successfully!");
        console.log(`Your project is ready at ${targetPath}`);
    }
    catch (error) {
        console.error("Error copying template files:", error);
    }
}
main();
