import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  server: { host: false, port: 3000 },
  build: {
    assetsDir: "landing/assets",
    rollupOptions: {
      input: {
        404: resolve(__dirname, "/404.html"),
        // UA
        UA_main: resolve(__dirname, "ua/index.html"),
        UA_services: resolve(__dirname, "ua/services.html"),
        UA_dropshiping: resolve(__dirname, "ua/dropshiping.html"),
        UA_cpa: resolve(__dirname, "ua/cpa.html"),
        UA_blog: resolve(__dirname, "ua/blog.html"),
        UA_article: resolve(__dirname, "ua/article.html"),
        UA_instructions: resolve(__dirname, "ua/instructions.html"),
        UA_contacts: resolve(__dirname, "ua/contacts.html"),
        UA_faq: resolve(__dirname, "ua/faq.html"),
        UA_offers: resolve(__dirname, "ua/offers.html"),
        // RU
        RU_main: resolve(__dirname, "ru/index.html"),
        RU_services: resolve(__dirname, "ru/services.html"),
        RU_dropshiping: resolve(__dirname, "ru/dropshiping.html"),
        RU_cpa: resolve(__dirname, "ru/cpa.html"),
        RU_blog: resolve(__dirname, "ru/blog.html"),
        RU_article: resolve(__dirname, "ru/article.html"),
        RU_instructions: resolve(__dirname, "ru/instructions.html"),
        RU_contacts: resolve(__dirname, "ru/contacts.html"),
        RU_faq: resolve(__dirname, "ru/faq.html"),
        RU_offers: resolve(__dirname, "ru/offers.html"),
      },
    },
  },
})
