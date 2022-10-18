function toggleMenu(e) {
  if (e.type == 'touchstart') e.preventDefault()
  $('#nav').toggleClass('active')
}

$('#btn-mobile').click(toggleMenu)
$('#btn-mobile').on('touchstart', toggleMenu)