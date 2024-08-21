const toggleTheme = () => {
  const htmlElement = document.documentElement
  const isDarkMode = htmlElement.classList.contains("dark")

  if (isDarkMode) {
    htmlElement.classList.remove("dark")
    htmlElement.classList.add("light")
    localStorage.setItem("theme", "light")
  } else {
    htmlElement.classList.remove("light")
    htmlElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }
}

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme")
  const htmlElement = document.documentElement

  if (savedTheme === "dark") {
    htmlElement.classList.add("dark")
    htmlElement.classList.remove("light")
  } else {
    htmlElement.classList.add("light")
    htmlElement.classList.remove("dark")
  }
}

const themeToggleButtonArray = document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]")
if (themeToggleButtonArray.length) {
  themeToggleButtonArray.forEach(item => {
    item.addEventListener("click", toggleTheme)
  })
}

window.addEventListener("load", applySavedTheme)
