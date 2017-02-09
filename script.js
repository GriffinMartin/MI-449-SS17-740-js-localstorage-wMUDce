var fluxButton = document.getElementById('flux')

function init () {
  // Counter initiate and render
  var visitCount = window.localStorage.getItem('counter')
  if (visitCount === null) {
    visitCount = 0
  }
  visitCount++
  window.localStorage.setItem('counter', visitCount)
  document.getElementById('visits').innerHTML = 'Total Visits: ' + visitCount
  // Retrieve and set localStorage class
  window.localStorage.getItem('flux')
  if (window.localStorage.getItem('flux') === 'off') {
    toggleOff()
  } else if (window.localStorage.getItem('flux') === 'on') {
    toggleOn()
  }
}

// Toggles flux on and modifies localStorage
function toggleOn () {
  window.localStorage.removeItem('flux', 'off')
  document.body.setAttribute('class', 'flux-on')
  window.localStorage.setItem('flux', 'on')
}

// Toggles flux off an modifies localStorage
function toggleOff () {
  window.localStorage.removeItem('flux', 'on')
  document.body.setAttribute('class', 'flux-off')
  window.localStorage.setItem('flux', 'off')
}

// Retrieves localStorage state and changes class each click
fluxButton.addEventListener('click', function () {
  if (window.localStorage.getItem('flux') === null) {
    toggleOn()
  } else if (window.localStorage.getItem('flux') === 'off') {
    toggleOn()
  } else if (window.localStorage.getItem('flux') === 'on') {
    toggleOff()
  }
})

// Begin initialization
init()
