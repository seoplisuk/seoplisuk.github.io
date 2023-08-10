/* Слайдер сертификтов */
$('.slider__sertificate').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    dots: true,
    arrows: true,
    infinite: true,
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
//--//
/* Слайдер сертификтов */
$('.licenze__slider').slick({
  slidesToShow: 2,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
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
//--//
/* Слайдер дипломов */
$('.diploms__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows3'),
  
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
//--//
/* Слайдер зубов */
$('.photo__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows4'),
  
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
//--//

/* Слайдер главный */
$('.main__slider1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  appendArrows: $('.appendArrows5'),
  appendDots: $('.appendDots5'),
  
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
//--//

/* Ленивая загрузка */
const observer = lozad();
observer.observe();
//--//
/* Модальное окно */
const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    closeOnOverlay: false,
    
});
//--//
/* Меню при скроле */
/* $(window).scroll(function(){
  $('header').toggleClass('new', $(this).scrollTop() > 160);
}); */
//--//
$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("+7(999) 999-9999");
});
$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone1").mask("+7(999) 999-9999");
});
$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone3").mask("+7(999) 999-9999");
});



function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video__button');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();



$('.select__hidden').hide();
	$('.select__price').click(function () {
		$('.select__hidden').slideToggle(300);
		
	});


 

  Cocoen.parse(document.body);



  $(document).ready(function(){
    // = Вешаем событие прокрутки к нужному месту
    	//	 на все ссылки якорь которых начинается на #
    	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    		e.preventDefault();
    
    		var target = this.hash,
    		$target = $(target);
    
    		$('html, body').stop().animate({
          'scrollTop': $target.offset().top - 200
       }, 500, 'swing', function () {
          window.location.hash = target;
       });
    	});
    
    });

    

    
    $('.burger').click(function () {
      $('.mobile__menu').toggleClass('opened');
      
    });
    $('.closed').click(function () {
      $('.mobile__menu').removeClass('opened');
      
    });