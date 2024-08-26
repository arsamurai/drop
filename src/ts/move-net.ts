const banner = document.getElementById("profitsale-baner") as HTMLElement
const net = document.getElementById("animated-net") as HTMLElement

banner?.addEventListener("mousemove", e => {
	const rect = banner.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const centerX = rect.width / 2
  const deltaX = (mouseX - centerX) / centerX
  const translateX = -5 * deltaX

  net.style.transform = `translateX(${translateX}%)`
})
