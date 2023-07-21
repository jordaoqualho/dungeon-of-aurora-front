import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifestForPlugin: Partial<ManifestOptions> = {
  name: "Dungeon of Aurora",
  short_name: "Aurora",
  start_url: ".",
  display: "standalone",
  background_color: "#22252E",
  theme_color: "#22252E",
  description: "Web application to explore the magical world of Aurora.",
  icons: [
    {
      src: "/images/icon_512.png",
      type: "image/png",
      sizes: "512x512",
    },
    {
      src: "/images/icon_256.png",
      type: "image/png",
      sizes: "256x256",
      purpose: "any maskable",
    },
    {
      src: "/images/icon_128.png",
      type: "image/png",
      sizes: "128x128",
    },
    {
      src: "/images/icon_48.png",
      type: "image/png",
      sizes: "48x48",
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
});
