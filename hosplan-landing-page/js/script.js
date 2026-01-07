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
