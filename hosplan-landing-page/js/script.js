document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('#slider .slide')
  let currentIndex = 0

  if (!slides || slides.length <= 1) return

  setInterval(function () {
    slides[currentIndex].classList.remove('opacity-100')
    slides[currentIndex].classList.add('opacity-0')

    currentIndex = (currentIndex + 1) % slides.length

    slides[currentIndex].classList.remove('opacity-0')
    slides[currentIndex].classList.add('opacity-100')
  }, 4000)
})

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carousel-track')
  const items = document.querySelectorAll('.carousel-item')

  const itemWidth = items[0].offsetWidth
  const visibleItems = 2
  const maxIndex = items.length - visibleItems

  let index = 0

  setInterval(() => {
    index++

    if (index > maxIndex) {
      index = 0
    }

    track.style.transform = `translateX(-${index * itemWidth}px)`
  }, 2500)
})
