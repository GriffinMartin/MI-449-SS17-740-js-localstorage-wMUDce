var fluxButton = document.getElementById('flux')
var newflux = window.localStorage.getItem('flux')

// Retrieves localStorage state and changes class each click
fluxButton.addEventListener('click', toggleFlux)

function init () {
  // Counter initiate and render
  var visitCount = window.localStorage.getItem('counter' || 0)
  visitCount++
  window.localStorage.setItem('counter', visitCount)
  document.getElementById('visits').innerHTML = 'Total Visits: ' + visitCount
}

function toggleFlux () {
  var flux = window.localStorage.getItem('flux')
  if (flux === 'on') {
    window.localStorage.setItem('flux', 'off')
  } else {
    window.localStorage.setItem('flux', 'on')
  }
  updateTheme()
}

// Other ways to setItem
/*
Ternary:
var newFlux = flux === 'on' ? 'off' : 'on'
window.localStorage.setItem('flux', newFlux)
Or:
window.localStorage.setItem('flux', flux === 'on' ? 'off' : 'on')
*/

function updateTheme () {
  var newflux = window.localStorage.getItem('flux')
  document.body.setAttribute('class', newflux)
}

// Begin initialization
init()
