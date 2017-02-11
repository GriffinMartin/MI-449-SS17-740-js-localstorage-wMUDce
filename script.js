var fluxButton = document.getElementById('flux')

function init () {
  // Counter initiate and render
  var visitCount = window.localStorage.getItem('counter')
  if (visitCount === null) {
    visitCount = 0
  }
  parseInt(visitCount++)
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

function updateTheme () {
  var flux = window.localStorage.getItem('flux')
  document.body.setAttribute('class', flux)
}

// Retrieves localStorage state and changes class each click
fluxButton.addEventListener('click', toggleFlux)

// Begin initialization
init()
