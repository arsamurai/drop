import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  server: { host: false, port: 3000 },
  build: {
    assetsDir: "landing/assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "404.html"),
        article: resolve(__dirname, "article.html"),
        blog: resolve(__dirname, "blog.html"),
        contacts: resolve(__dirname, "contacts.html"),
        cpa: resolve(__dirname, "cpa.html"),
        dropshiping: resolve(__dirname, "dropshiping.html"),
        faq: resolve(__dirname, "faq.html"),
        instructions: resolve(__dirname, "instructions.html"),
        offers: resolve(__dirname, "offers.html"),
        services: resolve(__dirname, "services.html"),
      },
    },
  },
})
