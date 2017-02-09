var fluxButton = document.getElementById('flux')

function init () {
  window.localStorage.getItem('flux')
  if (window.localStorage.getItem('flux') === 'off') {
    toggleOff()
  } else if (window.localStorage.getItem('flux') === 'on') {
    toggleOn()
  }
}

function toggleOn () {
  window.localStorage.removeItem('flux', 'off')
  document.body.setAttribute('class', 'flux-on')
  window.localStorage.setItem('flux', 'on')
}

function toggleOff () {
  document.body.setAttribute('class', 'flux-off')
  window.localStorage.removeItem('flux', 'on')
  window.localStorage.setItem('flux', 'off')
}

fluxButton.addEventListener('click', function () {
  if (window.localStorage.getItem('flux') === 'off') {
    toggleOn()
  } else if (window.localStorage.getItem('flux') === 'on') {
    toggleOff()
  }
})

init()
