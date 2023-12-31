import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  base: "/vue3-multi-stepper/",
  plugins: [vue(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url).href),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.js"),
      name: "vue3-multi-stepper",
      fileName: "vue3-multi-stepper",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
