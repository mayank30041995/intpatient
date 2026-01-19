// ================= MOBILE MENU =================
const menuBtn = document.getElementById('menuBtn')
const mobileMenu = document.getElementById('mobileMenu')
document.getElementById('year').textContent = new Date().getFullYear()

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})

// ================= HERO SLIDER =================
const slides = document.querySelectorAll('.hero-slide')
let currentSlide = 0

setInterval(() => {
  slides[currentSlide].classList.remove('active')
  currentSlide = (currentSlide + 1) % slides.length
  slides[currentSlide].classList.add('active')
}, 5000)

// ================= THERAPY TEXT ROTATION =================
const therapyTexts = document.querySelectorAll('.therapy-text')
let therapyIndex = 0

setInterval(() => {
  therapyTexts[therapyIndex].classList.remove('active')
  therapyIndex = (therapyIndex + 1) % therapyTexts.length
  therapyTexts[therapyIndex].classList.add('active')
}, 1500)

// ================= ROTATING TEXT =================

const texts = document.querySelectorAll('.therapy-text')
let index = 0

setInterval(() => {
  texts[index].classList.remove('active')
  index = (index + 1) % texts.length
  texts[index].classList.add('active')
}, 1500)

// ================= SCROLL ANIMATION =================

const animatedElements = document.querySelectorAll('[data-animate]')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10')
        entry.target.classList.add('opacity-100', 'translate-y-0')
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.3,
  }
)

animatedElements.forEach((el) => observer.observe(el))
