import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [preact(), visualizer()],
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
