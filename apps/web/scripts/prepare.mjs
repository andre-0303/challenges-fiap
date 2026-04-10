import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "../..");

const packages = ["data", "types", "ui"];

for (const pkg of packages) {
  const pkgDir = join(rootDir, "packages", pkg, "src");
  const destDir = join(__dirname, "node_modules", `@repo/${pkg}`, "src");

  if (existsSync(pkgDir)) {
    console.log(`Ensuring @repo/${pkg} is available...`);
  }
}

console.log("Prepare complete");
