function toggleMenu(e) {
  if (e.type == 'touchstart') e.preventDefault()
  const nav = document.getElementById('nav')
  $('#nav').toggleClass('active')
}

$('#btn-mobile').click(toggleMenu)
$('#btn-mobile').on('touchstart', toggleMenu)

function clickL(el) {
  $('nav a').each((indice, link) => {
    $(link).removeClass('linkAtivado')
    $('#nav').removeClass('active')
  })
  $(el).addClass('linkAtivado')
}

$('nav a').each((indice, link) => {
  $(link).on('click', e => {
    e.preventDefault()
    clickL(e.target)
  })
})
