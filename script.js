var fluxButton = document.getElementById('flux')

// Retrieves localStorage state and changes class each click
fluxButton.addEventListener('click', toggleFlux)

function init () {
  // Set theme on initial load
  updateTheme()
  // Counter initiate and render
  var visitCount = parseInt(window.localStorage.getItem('counter')) || 0
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
  // console.log(window.localStorage.getItem('flux'))
}

// Other ways to setItem
/*
Ternary:
var newFlux = flux === 'on' ? 'off' : 'on'
window.localStorage.setItem('flux', newFlux)
Or:
window.localStorage.setItem('flux', flux === 'on' ? 'off' : 'on')
*/

// Changes CSS class to match localStorage
function updateTheme () {
  var newFlux = window.localStorage.getItem('flux')
  if (newFlux != null) {
    document.body.setAttribute('class', newFlux)
  }
}

// Begin initialization
init()
