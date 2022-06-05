import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  base: "/vite-project/src/",
  plugins: [preact(), visualizer()],
});
