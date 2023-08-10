// Mobile menu
$(document).ready(function() {
	  
	    $('.burger').click(function(event) {
      $('.left__menu').toggleClass('open'); 
	    $('.burger').toggleClass('active');  
	    });

      $('.close').click(function(event) {
        $('.left__menu').removeClass('open'); 
       
        });

        $('.m1').click(function(event) {
          $('.left__menu').removeClass('open'); 
          $('.burger').removeClass('active');
         
          });
});


// ____________



$('.reviews__slider').slick({
  slidesToShow: 2,
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

$(document).ready(function(){
	$(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
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
    $('.top__line').toggleClass('new', $(this).scrollTop() > 72);
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

$(".js-range-slider").ionRangeSlider();

$(document).ready(function(){
  $(".js-range-slider").on("input", function(){
    $(".inp1").val(this.value);
  });
});

$(".js-range-slider2").ionRangeSlider();

$(document).ready(function(){
  $(".js-range-slider2").on("input", function(){
    $(".inp2").val(this.value);
  });
});

$(".js-range-slider3").ionRangeSlider();

$(document).ready(function(){
  $(".js-range-slider3").on("input", function(){
    $(".inp3").val(this.value);
  });
});

/* Открыть закрыть частые ворпросы */
$('.question__hidden').hide();
$('.question__row').click(function () {
    $(this).siblings('.question__hidden').slideToggle(300);
    $(this).find('.question__arrow').toggleClass('minus');
});
   
	

