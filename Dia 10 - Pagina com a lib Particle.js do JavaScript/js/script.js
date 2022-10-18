window.onload = function () {
  Particles.init({
    selector: '.background',
    maxParticles: 190,
    sizeVariations: 3,
    color: ['#000020', '#010135', '#014b7c'],
    speed: 0.8,
    minDistance: 100,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200,
          connectParticles: false
        }
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 150,
          connectParticles: true
        }
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0

          // disables particles.js
        }
      }
    ]
  })
}
const pause = state => {
  const btn = document.querySelector('.button')
  if (state === false) {
    btn.innerHTML = 'Resume'
    btn.classList.add('active')
    Particles.pauseAnimation()
    state = true
    return state
  } else {
    btn.innerHTML = 'Pause'
    btn.classList.remove('active')
    Particles.resumeAnimation()
    state = false
    return state
  }
}
