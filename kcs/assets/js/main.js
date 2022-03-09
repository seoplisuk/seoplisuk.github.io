/* dynamic adaptive */
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
/* end */


/* ***************************************************
---------------------------------------------------
*************************************************** */

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

    const button = document.querySelector('.burger') // находим кнопку для открытия/закрытия окна навигации
    const nav = document.querySelector('.mobile__menu') // находим окно навигации
  
    button.addEventListener('click', () => { // при клике на кнопку
      nav.classList.toggle('opened') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
      button.classList.toggle("close")
    })
  
    window.addEventListener('click', e => { // при клике в любом месте окна браузера
      const target = e.target // находим элемент, на котором был клик
      if (!target.closest('.mobile__menu') && !target.closest('.burger')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        nav.classList.remove('opened') // то закрываем окно навигации, удаляя активный класс
		button.classList.remove('close')
      }
    })
  
  })



/* ***************************************************
---------------------------------------------------
*************************************************** */


 var element = document.getElementById('header');
window.addEventListener('scroll', function () {

  if (window.scrollY > 100) {
        element.classList.add("scrolled");
    } else {
        element.classList.remove("scrolled");
    }
});



/* ***************************************************
---------------------------------------------------
*************************************************** */



const observer = lozad('.lozad', {
    rootMargin: '10px 0px', // syntax similar to that of CSS Margin
    threshold: 0.1, // ratio of element convergence
    enableAutoReload: true // it will reload the new image when validating attributes changes
});
observer.observe();

/* ***************************************************
---------------------------------------------------
*************************************************** */


document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

	const triger = document.querySelector('.triger')
    const form = document.querySelector('.modal__form') 
    const success = document.querySelector('.succes__block')
  
    triger.addEventListener('click', () => {
      form.classList.add('v1') 
      success.classList.add("v2")
    })
  
  
  
  })


  /* ***************************************************
---------------------------------------------------
*************************************************** */



const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 1,
	spaceBetween: 0,
	freeMode: false,
	direction: 'horizontal',
	loop: true,

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 1,
			spaceBetween: 0
		}

	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},



});

/* ***************************************************
---------------------------------------------------
*************************************************** */


/* ***************************************************
---------------------------------------------------
*************************************************** */


const sertificate = new Swiper('.sertificate', {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 0,
	freeMode: false,
	direction: 'horizontal',
	loop: true,

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		// when window width is >= 480px
		767: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 4,
			spaceBetween: 30
		}

	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.sert-button-next',
		prevEl: '.sert-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},



});

/* ***************************************************
---------------------------------------------------
*************************************************** */


$(document).ready(function (){


	var rws_menu = false; // true если виджет открыт
	var rws_message = false; // true если сообщение открыто
	

	// ========== Открыть сообщение через 5 сек ========== //
	setTimeout(function (){
		showMessage();
	}, 5000)


	// ========== Открыть виджет ========== //
   $(".rsw-button__icon").click(function (){
     rwsOpen();
   });

   // ========== Закрыть виджет ========== //
   $(".rsw-button__close, .rsw-overlay").click(function (){
     rwsClose();
   });

   // ========== Открыть виджет при клике на сообщение ========== //
	$(".rsw-message").click(function (){
		if(event.target.classList.contains("rsw-message__close")){
			hideMessage()
		}else{
			hideMessage();
			rwsOpen();
		}
	});


	// ========== Функция закрытия виджета ========== //
	function rwsOpen(){
		rws_menu = true;
		$(".rsw").addClass("rsw-open");

		if (rws_message == true){
			hideMessage();
		}
	}

	// ========== Функция открытия виджета ========== //
	function rwsClose(){
		rws_menu = false;
		$(".rsw").removeClass("rsw-open");

		if (rws_message == true){
			hideMessage();
		}else if(rws_message == 0){
			setTimeout(function (){
				showMessage();
			}, 2000);
		}
	}

	// ========== Функция открытия сообщения ========== //
	function showMessage(){
		if(rws_menu == false){
			
			rws_message = true;
		
			$(".rsw-message").addClass("rsw-message--show");
			$(".rsw-notify").addClass("rsw-notify--show rsw-bounce");

			setTimeout(function (){
				$(".rsw-notify").removeClass("rsw-bounce");
			}, 1000);

			setInterval(function (){
				$(".rsw-notify--show").addClass("rsw-bounce");
				setTimeout(function (){
					$(".rsw-notify").removeClass("rsw-bounce");
				}, 1000);
			}, 4000);

		}else{
			rws_message = 0;
		}
	}
	
	// ========== Функция закрытия сообщения ========== //
	function hideMessage(){
		$(".rsw-message").removeClass("rsw-message--show");
		$(".rsw-notify").removeClass("rsw-notify--show rsw-bounce");
	}

	// ========== Анимация смены иконок в кнопке ========== //
   var currentIndex = 0,
       icons = $('.rsw-button__icon i'),
       iconsTotal = icons.length;

  	icons.eq(0).addClass("show");

   function changeIcons() {
     var icon = icons.eq(currentIndex);
     
     icons.removeClass("show");
     icon.addClass("show");
   }

   if(iconsTotal > 1){
      setTimeout(function (){
         setInterval(function () {
            currentIndex += 1;
               if (currentIndex > iconsTotal - 1) {
               	currentIndex = 0;
               }
               changeIcons()
         }, 4000);      
      }, 1000);
   }

});

/* ***************************************************
---------------------------------------------------
*************************************************** */