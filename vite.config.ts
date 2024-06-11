import { defineConfig } from "vite"

export default defineConfig({
  envDir: "./env",
  server: { host: false, port: 3000 },
})
