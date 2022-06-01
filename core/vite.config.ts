// import {} from "./"
import { defineConfig } from "vite";
import config from "../vite.config";

export default defineConfig({
  ...config,
  build: {
    target: "es2019",
    lib: {
      entry: "mod.ts",
      formats: ["es"],
    },
    sourcemap: process.env.DEBUG == "1" ? "inline" : "hidden",
  }
});