const teclas = document.querySelector(".teclas")
const input = document.querySelector("#input-teclas")
const form = document.querySelector(".form")

form.addEventListener("submit", e => {
  e.preventDefault()
})


function mostrarTeclasNaTela(e) {
  let teclaPressionada = e.code === "Space" ? e.code : e.key

  const li = document.createElement("li")
  
  li.innerHTML = teclaPressionada
  teclas.appendChild(li)
}


input.addEventListener("keyup", e => {
  mostrarTeclasNaTela(e)
})
