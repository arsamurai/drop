import { Modal } from "tw-elements"

const videoItems = document.querySelectorAll("[data-video-item]") as NodeListOf<HTMLLIElement>
const youtubePlayer = document.getElementById("youtube-player")
const youtubePlayerModal = new Modal(youtubePlayer)
const iframe = document.getElementById("ytplayer") as HTMLIFrameElement

if (videoItems.length) {
  videoItems.forEach(item => {
    item.addEventListener("click", () => {
      const videoId = item.getAttribute("data-video-id")

      if (videoId) {
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
      }

      youtubePlayerModal.show()
    })
  })
}

youtubePlayer?.addEventListener("hidden.twe.modal", () => {
  iframe.src = ""
})
