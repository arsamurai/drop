import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const swipers = {
  topSwiper: () =>
    new Swiper(".top-swiper", {
      slidesPerView: 1.25,
      spaceBetween: 28,
      modules: [Pagination, Navigation],
      pagination: {
        el: ".top-swiper-pagination.swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".top-swiper-button-next.swiper-button-next",
        prevEl: ".top-swiper-button-prev.swiper-button-prev",
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    }),
  articlesSwiper: () =>
    new Swiper(".articles-swiper", {
      slidesPerView: 1,
      spaceBetween: 28,
      modules: [Pagination, Navigation],
      pagination: {
        el: ".articles-swiper-pagination.swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".articles-swiper-button-next.swiper-button-next",
        prevEl: ".articles-swiper-button-prev.swiper-button-prev",
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      },
    }),
}
window.addEventListener("load", () => {
  swipers.topSwiper()
  swipers.articlesSwiper()
})
