// MENU
var FX = function(a, b) {

  b(".mobile_primary .menu-item-has-children").append('<span class="sub-menu--button"></span>'), 

  b(".sub-menu--button").each(function() {

      b(this).click(function() {

          b(this).toggleClass("open"), b(this).prev().slideToggle();

      });

  });



}(FX || {}, jQuery);


$('.menu-button').click(function(){

  $('.mobileOverlay').toggleClass('toggle');

  $('.mobile_primary').toggleClass('active');

  $('.menu-button').toggleClass('toggle');

  $('body').toggleClass('hiddenClass');

});



$('#menu-main-navigation-1').find('.anchorMenu').click(function(e){
	e.preventDefault();
	if($(window).width() > 1024){
	 $(this).parent().toggleClass('show_sub_menu').siblings().removeClass('show_sub_menu');
	}

		

		return false;

});
$(document).mouseup(function(e) 
{
    var container = $(".sub-menu");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0 && $(window).width() > 1024) 
    {
      $('.menu-item-has-children').removeClass('show_sub_menu');
    }

});








$('.mobileOverlay').click(function(){

   $('.mobileOverlay').toggleClass('toggle');

   $('.mobile_primary').toggleClass('active');

   $('.menu-button').toggleClass('toggle');

   // $('body').removeClass('hiddenClass');

 });

$('.menuClose').click(function(){

   $('.mobileOverlay').toggleClass('toggle');

   $('.mobile_primary').toggleClass('active');

   $('.menuClose').toggleClass('toggle');

   $('.menu-button').toggleClass('toggle');

   // $('body').removeClass('hiddenClass');

 });




// FIXED HEADER



$(window).scroll(function(){

  var window_top = $(window).scrollTop() + 1; 
  var navHeight = $('header').height();
  var appointHeight = $('.search_row').height() + navHeight - 55;
  
  if (window_top > navHeight) {

    $('.header-menu').addClass('sticky-header');

  } else {

    $('.header-menu').removeClass('sticky-header');

  }
var headerHeight = $('.header-menu').height();	
 if (window_top > appointHeight) {
	$('.doctors_listing_date').addClass('date_appoint_sticky').css('top', headerHeight);
	

  }
	
	else {
	$('.doctors_listing_date').removeClass('date_appoint_sticky').css('top', '');
	

  }

});



// ===== Scroll to Top

$(window).scroll(function() {

  if ($(this).scrollTop() >= 100) {       

    $('#return-to-top').fadeIn(200);   

  } else {

    $('#return-to-top').fadeOut(200);  

  }

});

$('#return-to-top').on("click", function() {    

  $('body,html').animate({

    scrollTop : 0                

  }, 500);

});

$(window).scroll(function(event) {

  var scroll = $(window).scrollTop(); 

  if(scroll > 50)

  { 

      $(".fixed-social").addClass("fixed-socialshow");

  }

  else

  {

      $(".fixed-social").removeClass("fixed-socialshow");

  }

});

// ===== Search

$('#search_button').on("click", function(e) {

    $('#search_open').slideToggle();

    e.stopPropagation(); 

  });



$(document).on("click", function(e){

  if(!(e.target.closest('#search_open'))){  

    $("#search_open").slideUp();      

  }

});



 $('.banner-slider').slick({

      autoplay: true,

      autoplaySpeed: 5000,

      fade: true,

      arrows: false,

      dots: true

  });

 $('.testimonials-slider').slick({

      fade: true,

      autoplay: false,

      autoplaySpeed: 2500,

      slidesToShow: 1,

      slidesToScroll:1,

      arrows: true,

      dots: false,

      responsive: [    

      {

        breakpoint: 768,

        settings: {

          arrows: true,

          dots: false,

          slidesToShow: 1,

        }

      }

    ]      

  });

 $('.exp-speak').slick({

      fade: true,

      autoplay: false,

      autoplaySpeed: 2500,

      slidesToShow: 1,

      slidesToScroll:1,

      arrows: true,

      dots: false,

      responsive: [    

      {

        breakpoint: 768,

        settings: {

          arrows: true,

          dots: false,

          slidesToShow: 1,

        }

      }

    ]

  });



  //Home Slider
$('.home-treatments-slider-one ,.home-treatments-slider-two, .home-treatments-slider-three').slick({

    autoplay: false,

    autoplaySpeed: 2500,

    slidesToShow: 6,
    slidesToScroll:1,
    centerPadding: '0',
    arrows: true,
    dots: false,

    responsive: [    
  {
      breakpoint: 1024,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,

          dots: false,
      }
  },
  {
      breakpoint: 768,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,

          dots: false,
        
      }
  },
  {
      breakpoint: 576,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,

          dots: false,
    
      },
  },
  ]

});





  
 $('.hospital_network_slider').slick({

      autoplay: true,

      autoplaySpeed: 5000,

      slidesToShow: 3,

      slidesToScroll:1,

      arrows: true,

      dots: false,

      responsive: [    

        {
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
  
              dots: false,
            
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
  
              dots: false,
        
          },
      },

    ]

  });
  var numItemDoc = $('.meets-doctors').children('.slide').length
$('.meets-doctors').slick({

      autoplay: false,

      autoplaySpeed: 2500,

      slidesToShow: 4,

      slidesToScroll:1,

      arrows: true,

      dots: false,

      responsive: [    
        {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: true,
              dots: false,
            
          }
      },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true,
              dots: false,
            
          }
      },
      {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
          
        }
    },
     

    ]

  });

  var numItemsTech = $('.advance_tech').children('.slide').length

$('.advance_tech').slick({
 

       autoplay: false,
 
       autoplaySpeed: 2500,
 
       slidesToShow: 4,
 
       slidesToScroll:4,
       
       centerPadding: '0',
       arrows: true,
 
       dots: false,
 
       responsive: [    
     {
         breakpoint: 1024,
         settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             arrows: true,
             autoplay: true,
 
             autoplaySpeed: 3000,
             dots: false,
         }
     },
     {
         breakpoint: 768,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             arrows: false,
             autoplay: true,
 
             autoplaySpeed: 3000,
             dots: false,
           
         }
     },
     {
         breakpoint: 576,
         settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
             autoplay: true,
             autoplaySpeed: 3000,
             dots: false,
       
         },
     },
     ]
 
  });


 
  var numItems = $('.treatments-slider').children('.slide').length

  $('.treatments-slider').slick({
 
       autoplay: false,
 
       autoplaySpeed: 2500,
 
       slidesToShow: 4,
 
       slidesToScroll:1,
       
       centerPadding: '0',
       arrows: true,
 
       dots: false,
 
       responsive: [    
     {
         breakpoint: 1024,
         settings: {
             slidesToShow: 4,
             slidesToScroll: 4,
             arrows: true,
 
             dots: false,
         }
     },
     {
         breakpoint: 768,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             arrows: true,
 
             dots: false,
           
         }
     },
     {
         breakpoint: 576,
         settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: true,
 
             dots: false,
       
         },
     },
     ]
 
  });

/* ==== location slider ==== */

  var numItems99 = $('.locations-slider').children('.slide').length

  $('.locations-slider').slick({
 
       autoplay: false,
 
       autoplaySpeed: 2500,
 
       slidesToShow: 4,
 
       slidesToScroll:1,
       
       centerPadding: '0',
       arrows: true,
 
       dots: false,
 
       responsive: [    
     {
         breakpoint: 1024,
         settings: {
             slidesToShow: 4,
             slidesToScroll: 4,
             arrows: true,
 
             dots: false,
         }
     },
     {
         breakpoint: 768,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             arrows: true,
 
             dots: false,
           
         }
     },
     {
         breakpoint: 576,
         settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: true,
 
             dots: false,
       
         },
     },
     ]
 
  });


  var numItems2 = $('.treatments-slider-two').children('.slide').length

  $('.treatments-slider-two').slick({

    autoplay: false,

    autoplaySpeed: 2500,

    slidesToShow: 4,

    slidesToScroll:1,
    
    centerPadding: '0',
    arrows: true,

    dots: false,

    responsive: [    
  {
      breakpoint: 1024,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,

          dots: false,
      }
  },
  {
      breakpoint: 768,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,

          dots: false,
        
      }
  },
  {
    breakpoint: 576,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

        dots: false,
  
    },
  },
  ]

  });
  var numItems3 = $('.treatments-slider-three').children('.slide').length

  $('.treatments-slider-three').slick({

        autoplay: false,

        autoplaySpeed: 2500,

        slidesToShow: 4,

        slidesToScroll:1,
        
        centerPadding: '0',
        arrows: true,

        dots: false,

        responsive: [    
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              arrows: true,

              dots: false,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true,

              dots: false,
            
          }
      },
      {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
    
            dots: false,
      
        },
      },
    ]

  });



  var numItems4 = $('.customer-logos').children('.slide').length

  $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,

    responsive: [
      {
      breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false,
        }
    },
      
      
      {

        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,

            dots: false,
        }
    },
     ]
  });

  $('img[data-enlargable]').addClass('img-enlargable');
  $(document).on('click', '.img-enlargable', function() { 
   
   
    var src = $(this).attr('src');
    $('<div class="overlay">').html('<img src=' + src + '>').css({
        background: 'RGBA(0,0,0,.9) no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
  });
 $(function () {

  $(".accordion-content:not(:first-of-type)").css("display", "none");

  $(".js-accordion-title:first-of-type").addClass("open"); 

  $(".js-accordion-title").click(function () {

    $(".open").not(this).removeClass("open").next().slideUp(300);

    $(this).toggleClass("open").next().slideToggle(300);

  });

});

//Custom Select

(function($) {
  $(document).ready(function() {
	var calcHeight =  $('header').height() + 100 ;

  if ($(window).width() > 991) {
    $('.min-height-bg').css('height', 'calc(100vh - 0px - ' + calcHeight + 'px)').css('display','flex').css('align-items', 'center')

  }
  else{
    $('.min-height-bg').css('height', '60vh').css('display','flex').css('align-items', 'center')
  }
 
	
    var  docWidth = $('.doctor-img').width();
    
    $('.doctor-img').css('height', docWidth);

    var  profWidth = $('.doctor-prof').children('img').outerWidth();
  
    
    $('.doctor-prof img').css('height', profWidth);

    
	  
    var customSelect = $(".custom-select");
	
  
    customSelect.each(function() {
      var thisCustomSelect = $(this),
        options = thisCustomSelect.find("option"),
        
        firstOptionText = options.first().text();
  
      var selectedItem = $("<div></div>", {
        class: "selected-item"
      })
        .appendTo(thisCustomSelect)
        .text(firstOptionText);
  
      var allItems = $("<div></div>", {
        class: "all-items all-items-hide"
      }).appendTo(thisCustomSelect);
   
      options.each(function() {
        var that = $(this),
          optionText = that.text();
  
        var item = $("<div></div>", {
          class: "item",
          on: {
            click: function() {
              var selectedOptionText = that.text();
              selectedItem.text(selectedOptionText).removeClass("arrowanim");
              allItems.addClass("all-items-hide");
            }
          }
        })
          .appendTo(allItems)
          .text(optionText);
      });
    });
  
    var selectedItem = $(".selected-item"),
      allItems = $(".all-items");
  
    selectedItem.on("click", function(e) {
      var currentSelectedItem = $(this),
        currentAllItems = currentSelectedItem.next(".all-items");
  
      allItems.not(currentAllItems).addClass("all-items-hide");
      selectedItem.not(currentSelectedItem).removeClass("arrowanim");
  
      currentAllItems.toggleClass("all-items-hide");
      currentSelectedItem.toggleClass("arrowanim");
  
      e.stopPropagation();
    });
    $(document).mouseup(function(e) 
    {
        var container = $(".all-items");
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.addClass("all-items-hide");
          
        }
        if (!$(container).hasClass("all-items-hide")) {
               // if the target of the click isn't the container nor a descendant of the container
          
        }
       
    });
  
    $(document).on("click", function() {
      var opened = $(".all-items:not(.all-items-hide)"),
        index = opened.parent().index();
  
      customSelect
        .eq(index)
        .find(".all-items")
        .addClass("all-items-hide");
      customSelect
        .eq(index)
        .find(".selected-item")
        .removeClass("arrowanim");
    });

	  $("input").prop('required',true);
	  $(".not_rquired").prop('required',false);
	  $("select").prop('required',true);
	  $("textarea").prop('required',true);
	  
	  
	  
  });
  })(jQuery);









//iframe fix about institute

$('.about-institute iframe').attr("width", "100%").attr("height", "275");

//header dynamic height
var header_height = $('header').height();

if ($(window).width() < 1024) {

	
  $('#primary-nav').css('top',header_height)
}




//  $('.search_test').SumoSelect({search: true, searchText: 'Select Doctor/ Speciality'});


  $(document).ready(function() {
    // ====Dynamic height width
    $('img').each(function() {
      var $img = $(this);
    
      //var width = $img.width();
      //var height = $img.height();
      //var image_width = $img.attr('width');
      //var image_height = $img.attr('height');
      var image_alt = $img.attr('alt');

      /*if (typeof image_width === 'undefined' || image_width === false && typeof image_height === 'undefined' || image_height === false) {
          $img.attr('width', width).attr('height', height);
      }*/

      if (typeof image_alt === 'undefined' || image_alt === false || image_alt == "") {
          $img.attr('alt', 'Meitra Hospitals');
      }
    
      // ..the rest of your logic here..
    });

    // ===== Tabs
    $('ul.nav-tabs li').click(function(){
      var tab_id = $(this).attr('data-target');
    

      $('ul.nav-tabs li').removeClass('is-active');
      $('.tab-panel').removeClass('is-active');

      $(this).addClass('is-active');
      $(tab_id).addClass('is-active');
    });
    $(".set > a").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".content")
          .slideUp(200);
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
          return false;
      } else {
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $(this)
          .find("i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
          .siblings(".content")
          .slideDown(200);
          return false;
      }
  });
	  
$(".set").eq(0).find('a').click();

$(".treatments-tabs").find('.tab').eq(0).click();
var numItemsTestimonial = $('#main-slider').children('.slide').length
  $('#main-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      infinite: true,
      adaptiveHeight: true,
      arrows: true,
    
      
      responsive: [    
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                autoplay: true,
 
                autoplaySpeed: 5000,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
 
                autoplaySpeed: 5000,
                dots: false,
              
            }
        },
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
 
              autoplaySpeed: 5000,
              dots: false,
        
          },
        },
      ]
  });



  if ($(window).width() > 1023) {
	  if(numItemsTech <= 4 ){
     
      $('.advance_tech').slick('unslick').css('display', 'flex').css('margin-right','0px').css('margin-left','0px').css('justify-content', 'space-evenly').css('padding', '0px').children('.slide').addClass('no-caroursel');
      
    }
    if(numItemDoc <= 4){

      
      $('.meets-doctors').slick('unslick').css('display', 'flex').css('margin-right','0px').css('margin-left','0px').css('justify-content', 'space-evenly').children('.slide').addClass('no-caroursel');

    }
    if(numItems < 6){
     
      $('.treatments-slider').slick('unslick').css('display', 'flex').css('margin-right','0px').css('margin-left','0px').css('justify-content', 'flex-start').children('.slide').addClass('no-caroursel');
      
    }
    if(numItems99 < 6){
     
      $('.locations-slider').slick('unslick').css('display', 'flex').css('margin-right','0px').css('margin-left','0px').css('padding','0px').css('justify-content', 'flex-start').children('.slide').addClass('no-caroursel');
      
    }
    if(numItems2 < 6){
     
      $('.treatments-slider-two').slick('unslick').css('display', 'flex').css('margin-right','0px').css('margin-left','0px').css('justify-content', 'flex-start').children('.slide').addClass('no-caroursel');
      
    }
    if(numItems3 < 6){
       
     
      $('.treatments-slider-three').slick('unslick').css('display', 'flex').css('margin-right','0px').css('margin-left','0px').css('justify-content', 'flex-start').children('.slide').addClass('no-caroursel');
      
    }
    if(numItems4 < 6){
     
      $('.customer-logos').slick('unslick').css('display', 'flex').css('margin-right','0px').css('margin-left','0px').css('justify-content', 'flex-start').css('padding', '0').children('.slide').addClass('no-caroursel');
      
    }
    // if(numItemsTestimonial < 4){
     
    //   $('#main-slider').slick('unslick').css('display', 'flex').css('margin-right','0px').css('margin-left','0px').css('justify-content', 'center').css('padding', '0').children('.slide').addClass('no-caroursel');
      
    // }
    
    
    
  }
  /*if ($(window).width() < 991 ){
    $('.meets-doctors').slick('unslick').addClass(('noslider'));
  }*/
});


function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if  (ElementBottom <= WindowBottom && ElementTop >= WindowTop) {
	
    animate(element);
	  
  } 
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate(
      {
        countNum: maxval
      },
      {
        //duration 5 seconds
        duration: 5000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        }
      }
    );
  }
}

//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are
    //visible in the viewport
    $("h4[data-max]").each(function () {
      inVisible($(this));
    });
  });
	
});


function setLink(str)
{
	$('.viewalltreatment').attr("href", str);
}


function onKeyboardOnOff(isOpen) {
    // Write down your handling code
    if (isOpen) {
        // keyboard is open
		$('.cta-footer').hide();
    } else {
        // keyboard is closed
		$('.cta-footer').show();
    }
}

var originalPotion = false;
$(document).ready(function(){
    if (originalPotion === false) originalPotion = $(window).width() + $(window).height();
});

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "winphone";
    }

    if (/android/i.test(userAgent)) {
        return "android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }

    return "";
}

function applyAfterResize() {

    if (getMobileOperatingSystem() != 'ios') {
        if (originalPotion !== false) {
            var wasWithKeyboard = $('body').hasClass('view-withKeyboard');
            var nowWithKeyboard = false;

                var diff = Math.abs(originalPotion - ($(window).width() + $(window).height()));
                if (diff > 100) nowWithKeyboard = true;

            $('body').toggleClass('view-withKeyboard', nowWithKeyboard);
            if (wasWithKeyboard != nowWithKeyboard) {
                onKeyboardOnOff(nowWithKeyboard);
            }
        }
    }
}

$(document).on('focus blur', 'select, textarea, input[type=text], input[type=date], input[type=password], input[type=email], input[type=number]', function(e){
    var $obj = $(this);
    var nowWithKeyboard = (e.type == 'focusin');
    $('body').toggleClass('view-withKeyboard', nowWithKeyboard);
    onKeyboardOnOff(nowWithKeyboard);
});
