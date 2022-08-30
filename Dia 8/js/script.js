const lampada = document.querySelector('img')

let lampadas = ['acesa', 'quebrada', 'apagada']


function ligaDesl() {

  if (document.body.classList.contains('liga')) {
    document.body.classList.remove('liga')
    container.innerHTML = `<img id="lampada" src="./assets/${lampadas[2]}.png" alt="" />`
  } else {
    acesa = lampadas[1]
    document.body.classList.add('liga')
    container.innerHTML = `<img id="lampada" src="./assets/${lampadas[0]}.png" alt="" />`
  }
  console.log('clicou')
}


const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('click', e => {
  if (checkbox.classList.contains('on')) {
    checkbox.setAttribute('aria-checked', 'false')
  } else {
    checkbox.setAttribute('aria-checked', 'true')
  }

  checkbox.classList.toggle('on')
})