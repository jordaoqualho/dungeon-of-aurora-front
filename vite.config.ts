import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifestForPlugin: Partial<ManifestOptions> = {
  name: "Dungeon of Aurora",
  short_name: "Aurora",
  start_url: ".",
  display: "standalone",
  background_color: "#232428",
  theme_color: "#232428",
  description: "Web application to explore the magical world of Aurora.",
  icons: [
    {
      src: "/images/white_icon_512.png",
      type: "image/png",
      sizes: "512x512",
    },
    {
      src: "/images/white_icon_256.png",
      type: "image/png",
      sizes: "256x256",
    },
    {
      src: "/images/white_icon_128.png",
      type: "image/png",
      sizes: "128x128",
    },
    {
      src: "/images/white_icon_48.png",
      type: "image/png",
      sizes: "48x48",
    },
  ],
  screenshots: [
    {
      src: "/images/screen.png",
      sizes: "640x320",
      type: "image/png",
    },
  ],
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: manifestForPlugin,
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    APP_NAME: JSON.stringify(process.env.npm_package_name),
  },
});
