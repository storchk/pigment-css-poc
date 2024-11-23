import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pigment } from "@pigment-css/vite-plugin";
import { mainTheme } from "./src";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pigment({ theme: mainTheme, displayName: true })],
  server: {
    hmr: {
      host: "localhost",
    },
  },
});
