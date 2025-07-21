import { defineConfig } from "tsdown/config";

export default defineConfig({
    entry: ["./src/cli.ts"],
    clean: true,
    publint: true,
    format: "cjs",
});
