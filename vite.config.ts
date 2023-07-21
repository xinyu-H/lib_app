import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federationPlugin from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federationPlugin({
      name: "lib_app",
      filename: "remoteProvider.js",
      exposes: {
        "./utils": "./src/utils.ts",
        "./ListPage": "./src/components/ListPage.vue",
      },
      shared: ["vue"]
    })
  ],
  server: {
    port: 6001
  },
  // 打包配置
  build: {
    target: "esnext"
  }
})
