import os from "node:os";
import path from "node:path";
import fs from "node:fs/promises";
import { downloadTemplate } from "giget";
import { spawnSync } from "node:child_process";

export async function createPlayground() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ts-playground-"));
  await downloadTemplate("github:joshuajaco/ts-playground/template", { dir });
  return dir;
}

export async function installDependencies(dir: string) {
  const packageManager = detectPackageManager();

  const install = spawnSync(packageManager, ["install"], {
    cwd: dir,
    stdio: "inherit",
  });

  if (install.error) throw install.error;
}

function detectPackageManager() {
  const userAgent = process.env.npm_config_user_agent;
  if (!userAgent) return "npm";
  if (userAgent.startsWith("yarn")) return "yarn";
  if (userAgent.startsWith("pnpm")) return "pnpm";
  return "npm";
}
