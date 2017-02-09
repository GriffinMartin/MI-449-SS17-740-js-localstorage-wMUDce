var fluxButton = document.getElementById('flux')
var on = window.localStorage.setItem('flux', on)
var off = window.localStorage.removeItem('flux', off)

fluxButton.addEventListener('click', function (on, off) {
  if (on) {
    document.body.setAttribute('class', 'flux-on')
  } else if (off) {
    document.body.setAttribute('class', 'flux-off')
  }
})

