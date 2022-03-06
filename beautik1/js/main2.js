// Mobile menu
$(document).ready(function() {
	  
	    $('.burger').click(function(event) {
      $('.burger__menu').toggleClass('open'); 
	    $('.burger').toggleClass('active');  
	    });

      $('.close').click(function(event) {
        $('.burger__menu').removeClass('open'); 
       
        });

        $('.m1').click(function(event) {
          $('.left__menu').removeClass('open'); 
          $('.burger').removeClass('active');
         
          });
});


// ____________



$('.slider1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  dots: true,
  arrows: true,
  infinite: true,
  lazyLoad: true,
  autoplay: false,
  appendArrows: $('.appendArrows1'),
  appendDots: $('.appendDots1'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.slider2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  lazyLoad: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows2'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.slider3').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  lazyLoad: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows3'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});




$('.slider4').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  lazyLoad: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows4'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.slider5').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  lazyLoad: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows5'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.slider6').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  lazyLoad: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows6'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.slider7').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  lazyLoad: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows7'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

// $(document).ready(function(){
// 	$(".menu").on("click","a", function (event) {
// 		//отменяем стандартную обработку нажатия по ссылке
// 		event.preventDefault();

// 		//забираем идентификатор бока с атрибута href
// 		var id  = $(this).attr('href'),

// 		//узнаем высоту от начала страницы до блока на который ссылается якорь
// 			top = $(id).offset().top;
		
// 		//анимируем переход на расстояние - top за 1500 мс
// 		$('body,html').animate({scrollTop: top}, 1500);
// 	});
// });




/* jQuery('img.svg').each(function(){
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

  }, 'xml');

}); */




$(window).scroll(function(){
    $('header').toggleClass('new', $(this).scrollTop() > 210);
  });



 document.addEventListener('mousewheel', event => {

}, { passive: true });

document.addEventListener('wheel', event => {

}, { passive: true });

document.addEventListener('scroll', event => {

}, { passive: true });


document.addEventListener('touchstart', event => {

}, { passive: true });

document.addEventListener('touchend', event => {

}, { passive: true });

document.addEventListener('touchmove', event => {

}, { passive: true }); 





/* Открыть закрыть частые ворпросы */
$('.filter__content').hide();
$('.filter__top').click(function () {
    $(this).siblings('.filter__content').slideToggle(300);
    $(this).find('.filter__arrow').toggleClass('minus');
});


$('.slidern1').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  lazyLoad: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows3'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});
   
	

