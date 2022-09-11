let count = 4
let load = setInterval(animate, 40)


function animate() {
  if (count == 100) {
    $('.main-content').hide(0).show(900)
    $('div').remove('.loading')
    clearInterval(load)
  } else {
    count = count + 1
    $('.porcent').html(count + '%')
  }
}
