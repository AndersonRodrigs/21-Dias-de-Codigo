let imagens = document.querySelectorAll('.img')
let srcVal = ''

imagens.forEach(imgs => {
  $(imgs).click(() => {
    srcVal = $(imgs).attr('src')
    $('#modal-img').attr('src', srcVal)
    $('.modal').toggleClass('modal_active')
  })
})

$('#btn_close').click( () => {
  $('.modal').toggleClass('modal_active')
})
