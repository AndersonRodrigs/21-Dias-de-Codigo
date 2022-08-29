// Contador inicial

let count = 0

// Seleciona o valo e valor do botão

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
  btn.addEventListener('click', e => {
    const styles = e.currentTarget.classList
    if (styles.contains('subtrai')) {
      count--
    } else if (styles.contains('soma')) {
      count++
    } else {
      count = 0
    }

      if (count> 0) {
        value.style.color = "#009900"
      } else if (count < 0){
        value.style.color = "#b61515"
      } else {
        value.style.color = "#333"
      }

    value.innerHTML = count
  })
})
