import { defineConfig } from "vite"

export default defineConfig({
  server: { host: false, port: 3000 },
  build: {
    assetsDir: "landing/assets",
  },
})
