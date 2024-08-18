import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "auth-ui",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthStore": "./src/store/authStore",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    host: true,
    port: 8083,
    strictPort: true,
    hmr: {
      protocol: "ws",
      port: 8083,
    },
  },

  preview: {
    host: true,
    port: 8083,
    strictPort: true,
  },
  base: "/login",
});
