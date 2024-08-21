import { Modal } from "tw-elements"

const form = document.getElementById("offers-form") as HTMLFormElement
const successAlert = new Modal(document.getElementById("success-alert"))

form?.addEventListener("submit", function (event: Event) {
  event.preventDefault()

  const emailInput = document.getElementById("email") as HTMLInputElement
  const descriptionInput = document.getElementById("description") as HTMLTextAreaElement
  const fileInput = document.getElementById("file") as HTMLInputElement

  const formData = new FormData()
  formData.append("email", emailInput.value)
  formData.append("description", descriptionInput.value)

  if (fileInput.files?.[0]) {
    formData.append("file", fileInput.files?.[0])
  }

  fetch("/api/support", {
    method: "POST",
    body: formData,
  }).then(() => {
    successAlert.show()
    emailInput.value = ""
    descriptionInput.value = ""
    fileInput.value = ""
    fileInput.setAttribute("placeholder", "Tap to select file")
  })
})
