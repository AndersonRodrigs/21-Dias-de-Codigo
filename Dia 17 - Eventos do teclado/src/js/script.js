const teclas = document.querySelector(".teclas")
const input = document.querySelector("#input-teclas")
const form = document.querySelector(".form")

form.addEventListener("submit", e => {
  e.preventDefault()
})


function mostrarTeclasNaTela(e) {
  // let teclaPressionada = e.code === "Space" ? e.code : e.key
  e = e || window.event;
  var key = e.keyCode || e.which;
  let tecla = String.fromCharCode(key); 
  console.log(tecla)
  const li = document.createElement("li")
  li.innerHTML = tecla
  teclas.appendChild(li)
}


input.addEventListener("keydown", e => {
  mostrarTeclasNaTela(e)
})
