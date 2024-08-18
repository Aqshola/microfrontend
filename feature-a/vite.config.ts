import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "a-ui",
      remotes: {
        baseUi: "http://localhost:5001/assets/remoteEntry.js",
        authUi: "http://localhost:8083/login/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
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
    port: 8082,
    strictPort: true,
    hmr: {
      protocol: "ws",
      port: 8082,
    },
  },
  preview: {
    port: 8082,
    strictPort: true,
  },
});
