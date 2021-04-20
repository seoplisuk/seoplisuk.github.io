// Mobile menu
$(document).ready(function() {
	    $('.mobile__menu').hide();
	    $('.burger').click(function(event) {
	    $('.mobile__menu').slideToggle();
	    $('.burger').toggleClass('active');  
	    });
});


// ____________



// Slider main
$(document).ready(function() {
		  var $slider = $('.slider');
		  var $progressBar = $('.progress');
		  var $progressBarLabel = $( '.slider__label' );
		  
		  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
		    var calc = ( (nextSlide) / (slick.slideCount -1) ) * 100;
		    
		    $progressBar
		      .css('background-size', calc + '% 100%')
		      .attr('aria-valuenow', calc );
		    
		    $progressBarLabel.text( calc + '% completed' );
		  });
		  
		  $slider.slick({
		    slidesToShow: 1,
	    	slidesToScroll: 1,
	    	fade: true,
	    	autoplay: true,
	    	appendArrows: $('.appendArrows'),
	    	appendDots: $('.appendDots'),
	    	infinite: true,
	        dots: true,
	        customPaging : function(slider, i) {
	            var thumb = jQuery(slider.$slides[i]).data();
	            // return '<a>'+(i+1)+'</a>'; // <-- old
	            return '<a>'+('0'+(i+1)).slice(-2)+'</a>'; // <-- new
	        }

    	});
		  });

// ____________


// Footer menu

if(window.innerWidth < 768) {
	$('.footer__sub__menu').hide();
	$('.mob__footer').click(function () {
		$(this).siblings('.footer__sub__menu').slideToggle(300);
		$(this).find('.mob__footer').toggleClass('minus');
	});
}

// ____________




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
