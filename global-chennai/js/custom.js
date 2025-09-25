document.getElementById('Liver').style.display = 'block'
document.getElementById('cvb').classList.add('active')

function openTab(evt, cityName) {
  var i, tabcontent, tablinks

  // Hide all tab contents
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }

  // Remove 'active' class from all tabs
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }

  // Show selected tab
  document.getElementById(cityName).style.display = 'block'

  // Add 'active' class and update URL only if triggered by a click
  if (evt) {
    evt.currentTarget.className += ' active'
    console.log('evt.currentTarget', evt.currentTarget.className)
    history.pushState(null, null, '#' + cityName)
  } else {
    // If not triggered by event, set 'active' class via data attribute
    for (i = 0; i < tablinks.length; i++) {
      if (tablinks[i].getAttribute('data-city') === cityName) {
        tablinks[i].className += ' active'
        break
      }
    }
  }
}

// On page load
window.onload = function () {
  // Get hash from URL or use "Liver" as default
  const actives = JSON.parse(JSON.stringify(window.location.hash))
  console.log('evt.currentTarget', actives)
  if (actives.length > 0) {
    openTab(null, window.location.hash.substring(1))
  } else {
    document.getElementById('cvb')
  }
}

function openNav() {
  document.getElementById('.drawer').style.width = '100%'
}

function closeNav() {
  document.getElementById('.drawer').style.width = '0'
}

function openDrawer() {
  setInterval(function () {
    // Get the element by its ID
    const element = document.getElementById('drawer')

    // Check if the element exists
    if (element) {
      // Change to 'block' or any other desired display type
      document.getElementById('drawer').style.bottom = '0'
    }
  }, 35000)
}
function callevent() {
  setTimeout(openNav, 35000)
}

callevent()
openDrawer()

let clickCount = 0

// Function to be executed on the first click
function onFirstClick() {
  setTimeout(openNav, 15000) // Execute openNav after 10 seconds
}

// Function to be executed on the second click
function onSecondClick() {
  setTimeout(openNav, 30000) // Execute openNav after 150 seconds (2.5 minutes)
}

// Function to be executed on the third click
function onThirdClick() {
  setTimeout(openNav, 60000) // Execute openNav after 150 seconds (2.5 minutes)
}

const drawer = document.getElementById('drawer')

const openButton = document.getElementById('openBtn')

document.getElementById('openBtn').addEventListener('click', function () {
  event.stopPropagation()
  document.getElementById('drawer').style.bottom = '0'
})

document.getElementById('closeBtn').addEventListener('click', function () {
  event.stopPropagation()
  document.getElementById('drawer').style.bottom = '-100%'
})

document.body.addEventListener('click', (event) => {
  const mobileBreakpoint = 768

  if (window.innerWidth >= mobileBreakpoint) {
    // Close drawer if the click is outside the drawer or open button
    if (!drawer.contains(event.target) && !openBtn.contains(event.target)) {
      document.getElementById('drawer').style.bottom = '-100%'
    }
  }
})

// Prevent clicks inside the drawer or open button from triggering body click listener
drawer.addEventListener('click', (event) => {
  event.stopPropagation() // Prevent click inside drawer from closing it
})

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader')
  preloader.style.display = 'none'
})
