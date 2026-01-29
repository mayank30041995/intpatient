$(document).ready(function () {
  $('.therapy-slider').owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 800,

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

$(window).on('load', function () {
  $('.therapy-slider').trigger('refresh.owl.carousel')
})
