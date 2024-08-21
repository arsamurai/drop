function articlesTags(): void {
  const containers = document.querySelectorAll("[data-tags-container]") as NodeListOf<HTMLElement>

  containers.forEach(container => {
    const tags = Array.from(container.querySelectorAll("[data-tag]")) as HTMLElement[]
    const extraTag = container.querySelector("[data-extra-tags]") as HTMLElement

    tags.forEach(tag => tag.classList.remove("hidden"))
    if (extraTag) extraTag.classList.add("hidden")

    let totalWidth = 0
    let containerWidth = container.clientWidth
    let hiddenCount = 0

    tags.forEach(tag => {
      const tagWidth = tag.offsetWidth + parseInt(getComputedStyle(tag).marginRight)

      if (totalWidth + tagWidth + 75 <= containerWidth) {
        totalWidth += tagWidth
      } else {
        tag.classList.add("hidden")
        hiddenCount++
      }
    })

    if (hiddenCount > 0 && extraTag) {
      extraTag.textContent = `+${hiddenCount}`
      extraTag.classList.remove("hidden")
    }
  })
}

window.addEventListener("resize", articlesTags)
window.addEventListener("load", articlesTags)
