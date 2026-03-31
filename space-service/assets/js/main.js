"use strict";

class DynamicAdapt {
  constructor(type) {
    this.type = type;
    this.daClassname = "_dynamic_adapt_";
    this.objects = [];
    this.nodes = document.querySelectorAll("[data-da]");
  }

  init() {
    this.nodes.forEach((node) => {
      const dataArray = node.dataset.da.trim().split(",");
      const obj = {
        element: node,
        parent: node.parentNode,
        destination: document.querySelector(dataArray[0].trim()),
        breakpoint: dataArray[1] ? dataArray[1].trim() : "767",
        place: dataArray[2] ? dataArray[2].trim() : "last",
        index: this.indexInParent(node.parentNode, node),
      };
      this.objects.push(obj);
    });

    this.arraySort(this.objects);
    this.mediaQueries = [...new Set(this.objects.map(({ breakpoint }) => `(max-width: ${breakpoint}px),${breakpoint}`))];
    
    this.mediaQueries.forEach((media) => {
      const [mediaQuery, mediaBreakpoint] = media.split(",");
      const matchMedia = window.matchMedia(mediaQuery);
      const objectsFilter = this.objects.filter(({ breakpoint }) => breakpoint === mediaBreakpoint);
      
      matchMedia.addEventListener("change", () => this.mediaHandler(matchMedia, objectsFilter));
      this.mediaHandler(matchMedia, objectsFilter);
    });
  }

  mediaHandler(matchMedia, objects) {
    objects.forEach((obj) => {
      if (matchMedia.matches) {
        obj.index = this.indexInParent(obj.parent, obj.element);
        this.moveTo(obj.place, obj.element, obj.destination);
      } else if (obj.element.classList.contains(this.daClassname)) {
        this.moveBack(obj.parent, obj.element, obj.index);
      }
    });
  }

  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === "last" || place >= destination.children.length) {
      destination.append(element);
    } else if (place === "first") {
      destination.prepend(element);
    } else {
      destination.children[place].before(element);
    }
  }

  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);
    parent.children[index] ? parent.children[index].before(element) : parent.append(element);
  }

  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }

  arraySort(arr) {
    arr.sort((a, b) => {
      if (a.breakpoint !== b.breakpoint) {
        return this.type === "min" ? a.breakpoint - b.breakpoint : b.breakpoint - a.breakpoint;
      }
      if (a.place === b.place) return 0;
      if (a.place === "first" || b.place === "last") return -1;
      if (a.place === "last" || b.place === "first") return 1;
      return a.place - b.place;
    });
  }
}

const da = new DynamicAdapt("max");
da.init();




document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile');
  const burgerButton = document.querySelector('.burger__button');
  const back = document.querySelector('.back');
  const close = document.querySelector('.close');
  const scrollLinks = document.querySelectorAll('.scroll'); // краще перейменувати для зрозумілості

  if (!burgerButton || !close || !mobileMenu || !burger || !back) return;

  const toggleMenu = () => {
      mobileMenu.classList.toggle('mobile__opened');
      burger.classList.toggle('burger__opened');
      body.classList.toggle('body__opened');
      back.classList.toggle('back__opened');
  };

  const closeMenu = () => {
      mobileMenu.classList.remove('mobile__opened');
      burger.classList.remove('burger__opened');
      body.classList.remove('body__opened');
      back.classList.remove('back__opened');
  };

  burgerButton.addEventListener('click', toggleMenu);
  back.addEventListener('click', closeMenu);
  close.addEventListener('click', closeMenu);

  // Додаємо обробник для кожного елемента з класом .scroll
  scrollLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
  });
});



document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll > a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();

        const target = document.querySelector(this.hash);
        if (target) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const extraOffset = window.innerWidth < 1024 ? 0 : 80; // ✅ адаптивний відступ
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;

          smoothScrollTo(targetPosition, 800); // 800 мс — тривалість анімації

          history.pushState(null, null, this.hash);
        }
      }
    });
  });
});

// Оновлена версія smoothScroll, яка приймає готову позицію
function smoothScrollTo(targetY, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetY - startPosition;
  const startTime = performance.now();

  function animation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    // easeInOutQuad
    const ease = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}






	  

 

Fancybox.bind("[data-fancybox]", {

  

});


   


	 



  

  


 





window.addEventListener('scroll', function() {
	var height = window.scrollY;
  
	// Якщо скролл більше 100px, додаємо клас
	if (height > 0) {
	  document.querySelector('header').classList.add('header-fixed');
	} else {
	  // Якщо менше 100px, видаляємо клас
	  document.querySelector('header').classList.remove('header-fixed');
	}
  });



  jQuery('.question__hidden').hide();
  jQuery(".question__item").click(function() {
	  jQuery(this).find('.question__hidden').slideToggle();
	  jQuery(this).toggleClass('active2');
	  
		  
	 
	  });





  const swiper1 = new Swiper('.swiper1', {
	  loop: true,
	  spaceBetween: 0,
	  slidesPerView: 1,
    centeredSlides: false,
	  pagination: {
	  el: '.swiper-pagination1',
    clickable: true,
	},
  	navigation: {
	  nextEl: '.swiper-button-next1',
	  prevEl: '.swiper-button-prev1',
	},
	breakpoints: {
		320: {
      slidesPerView: 1,
    },
		
		1024: {
      slidesPerView: 1,
    },
	  },
  }); 


$('.lang').on('click', function() {
    $(this).toggleClass('lang__active');
});


$('.show').on('click', function() {
    $(this).hide(); // прибирає .show
    $(this).siblings('.number').addClass('number__opened');
});

const swiper2 = new Swiper('.swiper2', {
  
	  loop: false,
	  spaceBetween: 16,
	  slidesPerView: 4,
    centeredSlides: false,
	  pagination: {
	  el: '.swiper-pagination2',
    clickable: true,
	},
  	navigation: {
	  nextEl: '.swiper-button-next2',
	  prevEl: '.swiper-button-prev2',
	},
	
  }); 


const swiper3 = new Swiper('.swiper3', {
  
	  loop: false,
	  spaceBetween: 8,
	  slidesPerView: 1,
    centeredSlides: true,
	  pagination: {
	  el: '.swiper-pagination3',
    clickable: true,
	},
  	navigation: {
	  nextEl: '.swiper-button-next3',
	  prevEl: '.swiper-button-prev3',
	},
	
  }); 


  const swiper5 = new Swiper('.swiper5', {
  
	  loop: true,
	  spaceBetween: 24,
	  slidesPerView: 4.5,
    centeredSlides: false,
	  pagination: {
	  el: '.swiper-pagination5',
    clickable: true,
	},
  	navigation: {
	  nextEl: '.swiper-button-next5',
	  prevEl: '.swiper-button-prev5',
	},

  breakpoints: {
		320: {
      slidesPerView: 1.5,
    },
		
		1024: {
      slidesPerView: 4.5,
    },
	  },
	
  }); 


    const swiper6 = new Swiper('.swiper6', {
  
	  loop: true,
	  spaceBetween: 16,
	  slidesPerView: 4,
    centeredSlides: false,
	  pagination: {
	  el: '.swiper-pagination6',
    clickable: true,
	},
  	navigation: {
	  nextEl: '.swiper-button-next6',
	  prevEl: '.swiper-button-prev6',
	},

  breakpoints: {
		320: {
      slidesPerView: 1,
    },
		
		1024: {
      slidesPerView: 4,
    },
	  },
	
  }); 






  


  





