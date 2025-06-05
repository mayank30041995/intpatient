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
