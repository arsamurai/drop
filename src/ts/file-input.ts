const fileInput = document.getElementById("file") as HTMLInputElement

fileInput?.addEventListener("change", function () {
  if (fileInput.files && fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name
    fileInput.setAttribute("placeholder", fileName)
    fileInput.classList.remove("text-secondary-text-2");
  } else {
    fileInput.setAttribute("placeholder", "Tap to select file")
    fileInput.classList.add("text-secondary-text-2");
  }
})
