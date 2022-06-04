import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  base: "/vite-project/src/",
  plugins: [preact()],
});
