document.getElementById('Cardiology').style.display = 'block'

function changeTab(evt, tabLink) {
  var i, tabcontent, tablinks

  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }

  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(tabLink).style.display = 'block'

  const selectedTab = document.getElementById(tabLink)
  selectedTab.style.display = 'block'
  evt.currentTarget.className += ' active'

  // ⏳ Scroll after render using requestAnimationFrame
  requestAnimationFrame(() => {
    const yOffset = -80 // adjust this value as needed
    const y =
      selectedTab.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  })
}

function myFunction() {
  document.getElementById('cvb').click()
}
// pre load area
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader')
  preloader.style.display = 'none'
})

// slides
function scrollCarousel(direction) {
  const carousel = document.querySelector('.card-carousel')
  const cardWidth = carousel.querySelector('.card').offsetWidth + 16 // 16 = margin-right
  carousel.scrollBy({ left: cardWidth * direction, behavior: 'smooth' })
}

function appRun() {
  document.addEventListener('click', function () {
    // Get all button elements on the page
    const buttons = document.querySelectorAll('button,a,p')

    // Loop through each button
    buttons.forEach(function (button) {
      // Attach a click event listener to each button
      button.addEventListener('click', function () {
        // Get the URL from the button's data-url attribute
        const url = button.getAttribute('data-url')

        // Check if a URL is defined for the button
        if (url) {
          // Open the URL in a new tab
          window.open(url, '_blank')
        }
      })
    })
  })

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
}

appRun()

// window.onload = myFunction

// Process 1

// function changeTab(evt, tabLink) {
//   var i, tabcontent, tablinks
//   tabcontent = document.getElementsByClassName('tabcontent')
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = 'none'
//   }
//   tablinks = document.getElementsByClassName('tablinks')
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(' active', '')
//   }
//   document.getElementById(tabLink).style.display = 'block'
//   evt.currentTarget.className += ' active'
// }
// function myFunction() {
//   document.getElementById('cvb').click()
// }
// myFunction()

// Process 2

// function changeTab(evt, tabLink) {
//   var i, tabcontent, tablinks

//   tabcontent = document.getElementsByClassName('tabcontent')
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = 'none'
//   }

//   tablinks = document.getElementsByClassName('tablinks')
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(' active', '')
//   }

//   const selectedTab = document.getElementById(tabLink)
//   selectedTab.style.display = 'block'
//   evt.currentTarget.className += ' active'

//   // Scroll to selected tab with offset
//   const yOffset = -80 // adjust offset here
//   const y =
//     selectedTab.getBoundingClientRect().top + window.pageYOffset + yOffset
//   window.scrollTo({ top: y, behavior: 'smooth' })
// }

// function myFunction() {
//   document.getElementById('cvb').click()
// }

// // Call the default tab on page load
// window.onload = myFunction
