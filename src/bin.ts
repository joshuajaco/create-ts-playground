#!/usr/bin/env node
import chalk from "chalk";
import { createPlayground, installDependencies } from "./index.js";

console.info(chalk.bgMagenta.bold("TS Playground"));

console.info("Cloning template ...");
const dir = await createPlayground();

console.info("Installing dependencies ...");
await installDependencies(dir);

console.info(chalk.green("\nDone!\n"));
console.info(`Created playground at ${dir}`);
console.info("Use your favorite tool to open it:");
console.info("VSCode:\t\t", chalk.bgCyanBright.black(` code ${dir} `));
console.info("WebStorm:\t", chalk.bgCyanBright.black(` ws ${dir} `));
console.info("Vim:\t\t", chalk.bgCyanBright.black(` vim ${dir} `));
