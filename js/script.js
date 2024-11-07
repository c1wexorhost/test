function megaMenu(){
	$('.megamenu .dropdown').click('show.bs.dropdown', function (e) {
		var $dropdown = $(this).find('.dropdown-menu');
		var orig_margin_top = parseInt($dropdown.css('margin-top'));
		$dropdown.css({
			'margin-top': (orig_margin_top + 65) + 'px',
			opacity: 0
		}).animate({
			'margin-top': orig_margin_top + 'px',
			opacity: 1
		}, 420, function () {
			$(this).css({
				'margin-top': ''
			});
		});
	});
}

$(function(){
	"use strict";
	
	// Navigation
	megaMenu();
	
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
	 
	
});

(function ($) {
    "use strict";
	 var header = $("#header");
    $(window).scroll(function () {
			
	if ($(this).scrollTop() > 50) {
		header.addClass("sticky");
            $(".navbar").addClass("fixed");
	}
			else {
				 header.removeClass("sticky");
            $(".navbar").removeClass("fixed");
			}
    });
	

})(jQuery);






// Init slick slider + animation
$('.slider').slick({
  autoplay: true,
  speed: 1000,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
	prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
	nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
}).slickAnimation();



$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});




/*testimonial*/



$(document).ready(function(){
$("#testimonial-slider").owlCarousel({
items:1,
itemsDesktop:[1000,1],
itemsDesktopSmall:[979,1],
itemsTablet:[768,1],
pagination:true,
navigation:false,
navigationText:["",""],
slideSpeed:1000,
singleItem:true,
autoPlay:true
});
});




/*our latest project*/
// $(document).ready(function() {
 
//   var $swiper = $(".swiper-container");
//   var $bottomSlide = null; 

//   var $bottomSlideContent = null; 


//   var mySwiper = new Swiper(".swiper-container", {
//     autoplay:true,
//     spaceBetween: 1,
//     slidesPerView: 3,
//     centeredSlides: true,
//     roundLengths: true,
//     loop: true,
//     loopAdditionalSlides: 30,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     }
//   });
// });


// jQuery(document).ready(function () {
 
//   var mySwiper = new Swiper ('.swiper-container', {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   breakpoints: {  
//     '480': {
//       slidesPerView: 1,
//       spaceBetween: 0,},
//     '@768': {
//       slidesPerView: 1,
//       spaceBetween: 0, },
//   },
      
//      freeMode: true,
//     loop: true,
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         hide: true,},
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev', },

// })

// });


/*projects*/









$(document).ready(function(){
  $('.nav-item').click(function(){
    // reset active class
    $('.nav-item').removeClass("active");
    // add active class to selected
    $(this).addClass("active");
    // return needed to make function work
    return false;
  });
  
  
  $(function() {
    // create an empty variable
    var selectedClass = "";
    // call function when item is clicked
    $(".nav-item").click(function(){
      // assigns class to selected item
      selectedClass = $(this).attr("data-rel");
      // fades out all portfolio items
      $(".portfolio li").fadeOut(40);
      // fades in selected category
      $(".portfolio li." + selectedClass).delay(40).fadeIn(40);
    });
  });
  
}); // document ready

//Enquiry Form
    $('.enquiry-form-link').click(function(){
        $('.enquiry-form').toggleClass('open');
    });
    $('.enquiry-form .close').click(function(){
        $(this).parents('.enquiry-form').removeClass('open');
    });

    //Chat
    $('.chat-popup-link').click(function(){
        $(this).toggleClass('active');
        $('.chat-popup-block').toggleClass('open');
    });

