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
    const mobileMenu = document.querySelector('.mobile__menu');
    const burgerButton = document.querySelector('.burger__button');
    const back = document.querySelector('.back');
   

    if (!burgerButton || !mobileMenu || !burger || !back) return;

    const toggleMenu = () => {
        mobileMenu.classList.toggle('mobile__menu__opened');
        burger.classList.toggle('burger__opened');
        body.classList.toggle('body__opened');
        back.classList.toggle('back__opened');
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('mobile__menu__opened');
        burger.classList.remove('burger__opened');
        body.classList.remove('body__opened');
        back.classList.remove('back__opened');
    };

    burgerButton.addEventListener('click', toggleMenu);
    
    back.addEventListener('click', closeMenu);
});


function updateSliderGradient(value) {
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const percent = ((value - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to left, #00c08b ${percent}%, #111 ${percent}%)`;
  }


    const amountInput = document.getElementById('amountInput');
  const daysInput = document.querySelector('.days');
  const price1 = document.querySelector('.calc__price1');
  const price2 = document.querySelector('.calc__price2');

  function updatePrices() {
    const amount = parseFloat(amountInput.value) || 0;
    const days = parseInt(daysInput.value) || 0;

    const result1 = amount * 1; // 100%
    const result2 = amount * days;

    price1.textContent = result1.toFixed(2);
    price2.textContent = result2.toFixed(2);

    updateSliderGradient(amount);
  }

  // Підписуємося на події
  amountInput.addEventListener('input', updatePrices);
  daysInput.addEventListener('input', updatePrices);

  // Якщо використовуєш повзунок — синхронізуй його
  const slider = document.getElementById('rangeSlider');
  slider.addEventListener('input', () => {
    amountInput.value = slider.value;
    updatePrices();
  });

  // Запускаємо при завантаженні
  updatePrices();


  const swiper = new Swiper('.review1__swiper', {
	loop: false,
	spaceBetween: 30,
	slidesPerView: 3,
    
	pagination: {
	  el: '.swiper-pagination1',
    clickable: true,
	},
  	
	breakpoints: {
		320: {
            spaceBetween: 0,
            slidesPerView: 1, 
        },
		
		1024: {
            spaceBetween: 30,
	          slidesPerView: 3,
        },
	  },
  }); 


  document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('video');
  
    document.addEventListener('click', function () {
      videos.forEach(video => {
        video.load();
      });
    }, { once: true });
  });