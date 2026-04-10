import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "../..");
const packages = ["data", "types", "ui"];

function copyDir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src);

  for (const entry of entries) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

for (const pkg of packages) {
  const src = join(rootDir, "packages", pkg, "src");
  const dest = join(__dirname, "node_modules", `@repo/${pkg}`, "src");

  if (existsSync(src)) {
    console.log(`Copying ${pkg}...`);
    copyDir(src, dest);
  }
}

console.log("Packages copied successfully!");
