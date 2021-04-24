// Mobile menu
$(document).ready(function() {
      $('.mobile__menu').hide();
      $('.burger').click(function(event) {
      $('.mobile__menu').slideToggle();
      
      });


      $('.close').click(function(event) {
      $('.mobile__menu').slideToggle();
      
      });
});


// ____________

$('.main__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: true,
  autoplay: true,
  appendDots: $('.appendDots'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
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


$('.clients__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: false,
  appendArrows: $('.appendArrows'),
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
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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


$('.sert__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows1'),
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

$('.partners__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows2'),
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







var wow = new WOW(
  {
    boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    callback:     function(box) {
      // функция срабатывает каждый раз при старте анимации
      // аргумент box — элемент, для которого была запущена анимация
    },
    scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  }
);
wow.init();


$('.new__search').hide();
	$('.search__ico').click(function () {
		$('.new__search').slideToggle(300);
		$('.search__ico').toggleClass('close');
	});



jQuery('img.svg').each(function(){
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

        });




$(window).scroll(function(){
    $('.header').toggleClass('new', $(this).scrollTop() > 90);
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

$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("+7(999) 999-9999");
});



$('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #cf5249), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
});