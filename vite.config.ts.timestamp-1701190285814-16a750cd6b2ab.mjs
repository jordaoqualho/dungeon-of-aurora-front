// vite.config.ts
import react from "file:///E:/dungeon-of-aurora-front/node_modules/.pnpm/@vitejs+plugin-react-swc@3.5.0_vite@4.5.0/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///E:/dungeon-of-aurora-front/node_modules/.pnpm/vite@4.5.0/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///E:/dungeon-of-aurora-front/node_modules/.pnpm/vite-plugin-pwa@0.16.7_vite@4.5.0_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
var manifestForPlugin = {
  name: "Dungeons of Aurora",
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
      sizes: "512x512"
    },
    {
      src: "/images/white_icon_256.png",
      type: "image/png",
      sizes: "256x256"
    },
    {
      src: "/images/white_icon_128.png",
      type: "image/png",
      sizes: "128x128"
    },
    {
      src: "/images/white_icon_48.png",
      type: "image/png",
      sizes: "48x48"
    }
  ],
  screenshots: [
    {
      src: "/images/screen.png",
      sizes: "640x320",
      type: "image/png"
    }
  ]
};
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: manifestForPlugin,
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }]
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    APP_NAME: JSON.stringify(process.env.npm_package_name)
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxkdW5nZW9uLW9mLWF1cm9yYS1mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcZHVuZ2Vvbi1vZi1hdXJvcmEtZnJvbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2R1bmdlb24tb2YtYXVyb3JhLWZyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgTWFuaWZlc3RPcHRpb25zLCBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5cclxuY29uc3QgbWFuaWZlc3RGb3JQbHVnaW46IFBhcnRpYWw8TWFuaWZlc3RPcHRpb25zPiA9IHtcclxuICBuYW1lOiBcIkR1bmdlb25zIG9mIEF1cm9yYVwiLFxyXG4gIHNob3J0X25hbWU6IFwiQXVyb3JhXCIsXHJcbiAgc3RhcnRfdXJsOiBcIi5cIixcclxuICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcclxuICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiMyMzI0MjhcIixcclxuICB0aGVtZV9jb2xvcjogXCIjMjMyNDI4XCIsXHJcbiAgZGVzY3JpcHRpb246IFwiV2ViIGFwcGxpY2F0aW9uIHRvIGV4cGxvcmUgdGhlIG1hZ2ljYWwgd29ybGQgb2YgQXVyb3JhLlwiLFxyXG4gIGljb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3doaXRlX2ljb25fNTEyLnBuZ1wiLFxyXG4gICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy93aGl0ZV9pY29uXzI1Ni5wbmdcIixcclxuICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgc2l6ZXM6IFwiMjU2eDI1NlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvd2hpdGVfaWNvbl8xMjgucG5nXCIsXHJcbiAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgIHNpemVzOiBcIjEyOHgxMjhcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3doaXRlX2ljb25fNDgucG5nXCIsXHJcbiAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgIHNpemVzOiBcIjQ4eDQ4XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgc2NyZWVuc2hvdHM6IFtcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvc2NyZWVuLnBuZ1wiLFxyXG4gICAgICBzaXplczogXCI2NDB4MzIwXCIsXHJcbiAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcclxuICAgICAgbWFuaWZlc3Q6IG1hbmlmZXN0Rm9yUGx1Z2luLFxyXG4gICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgY2xpZW50c0NsYWltOiB0cnVlLFxyXG4gICAgICAgIHNraXBXYWl0aW5nOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkZXZPcHRpb25zOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IFt7IGZpbmQ6IFwiQFwiLCByZXBsYWNlbWVudDogXCIvc3JjXCIgfV0sXHJcbiAgfSxcclxuICBkZWZpbmU6IHtcclxuICAgIEFQUF9WRVJTSU9OOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uKSxcclxuICAgIEFQUF9OQU1FOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ucG1fcGFja2FnZV9uYW1lKSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUSxPQUFPLFdBQVc7QUFDdFIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBMEIsZUFBZTtBQUV6QyxJQUFNLG9CQUE4QztBQUFBLEVBQ2xELE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLE9BQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLGNBQWM7QUFBQSxRQUNkLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQSxZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU8sQ0FBQyxFQUFFLE1BQU0sS0FBSyxhQUFhLE9BQU8sQ0FBQztBQUFBLEVBQzVDO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixhQUFhLEtBQUssVUFBVSxRQUFRLElBQUksbUJBQW1CO0FBQUEsSUFDM0QsVUFBVSxLQUFLLFVBQVUsUUFBUSxJQUFJLGdCQUFnQjtBQUFBLEVBQ3ZEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
