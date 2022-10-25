let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")
let alert = document.querySelector("#alert")

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"

let novaSenha = ""

sizePassword.innerHTML = sliderElement.value
slider.oninput = function() {
  sizePassword.innerHTML = this.value
}

function generationPasword() {
  let pass = ""

  for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }

  password.innerHTML = pass
  containerPassword.classList.remove("hide")
  novaSenha = pass
}

function coppyPassword() {
  navigator.clipboard.writeText(novaSenha)
  alert.classList.remove("hide")
}

function closeAlert() {
  alert.classList.add("hide")
}
