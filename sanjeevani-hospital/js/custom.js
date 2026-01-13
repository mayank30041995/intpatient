$(document).ready(function () {
  $('.therapy-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true, // arrows
    dots: true, // bottom dots
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      "<span class='text-white text-3xl'>&#10094;</span>",
      "<span class='text-white text-3xl'>&#10095;</span>",
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 1.3 },
      1024: { items: 2.3 },
    },
  })
})
