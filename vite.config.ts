import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lab-internet-test',
  resolve: {
    alias: {
      components: "/src/components",
      data: "/src/data",
      store: "/src/store",
      types: "/src/types",
      assets: "/src/assets",
      UI: "/src/UI",
      utils: "/src/utils",
    },
  },
});
