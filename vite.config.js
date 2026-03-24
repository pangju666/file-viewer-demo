import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

export default defineConfig({
    assetsInclude: [
        "**/*.DXF",
        "**/*.ttf",
        "**/*.md"
    ],
    resolve: {
      alias: {
        "~": resolve(__dirname, "./"),
        "@": resolve(__dirname, "src"),
      },
    },
    base: '/file-viewer-demo',
    plugins: [
      vue(),
    ],
    build: {
        outDir: "docs",
        emptyOutDir: true,
        sourcemap: false,
    }
});
