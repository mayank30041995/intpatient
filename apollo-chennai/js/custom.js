document.getElementById('Cardiology').style.display = 'block'
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
  // Get hash from URL or use "Cardiology" as default
  const actives = JSON.parse(JSON.stringify(window.location.hash))
  console.log('evt.currentTarget', actives)
  if (actives.length > 0) {
    openTab(null, window.location.hash.substring(1))
  } else {
    document.getElementById('cvb')
  }
}

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader')
  preloader.style.display = 'none'
})
