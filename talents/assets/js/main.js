



/* document.addEventListener('DOMContentLoaded', () => {
	const mobile__filter = document.querySelector('.mobile__filter')
    const mobile__block = document.querySelector('.mobile__block')
    const close = document.querySelector('.close')
	const body = document.querySelector('body')
    
	

   
	mobile__filter.addEventListener('click', () => {
		mobile__block.classList.toggle('mobile__block__opened')
		body.classList.toggle('body__opened')
		
		
	})

	close.addEventListener('click', () => {
		mobile__block.classList.remove('mobile__block__opened')
        body.classList.remove('body__opened')
		
		
		
	})

   

}) */


document.addEventListener('DOMContentLoaded', () => {
	
	const body = document.querySelector('body')
    const burger = document.querySelector('.burger')
    const mobilemenu = document.querySelector('.mobile__menu')
	

    burger.addEventListener('click', () => {
		mobilemenu.classList.toggle('mobile__menu__opened')
		burger.classList.toggle('burger__opened')
		body.classList.toggle('body__opened')
		
	})

})

function myFunction(){
	var x = document.getElementById("myfile");
	var txt = "";
	if ('files' in x) {
	  if (x.files.length == 0) {
		txt = "Select one or more files.";
	  } else {
		for (var i = 0; i < x.files.length; i++) {
		  
		  var file = x.files[i];
		  if ('name' in file) {
			txt += "<div>" + file.name + "</div>";
		  }
		  
		}
	  }
	} 
	else {
	  if (x.value == "") {
		txt += "Select one or more files.";
	  } else {
		txt += "The files property is not supported by your browser!";
		txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
	  }
	}
	document.getElementById("demo").innerHTML = txt;
  }


$('.my, .my2').change(function() {
    if ($(this).val() != '') $(this).prev().text('');
    else $(this).prev().text('');
});


$(".button__edit").click(function(e){
	e.preventDefault();
	$("body").toggleClass("body__popup");
});

$(".popup__close").click(function(){
	$("body").removeClass("body__popup");
});



 



/* const swiper = new Swiper('.swiper', {
	

	slidesPerView: 2,
  	spaceBetween: 20,
	loop: true,
	
  
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		320: {
		  slidesPerView: 1,
		  spaceBetween: 0
		},
		
		1024: {
		  slidesPerView: 2,
		  spaceBetween: 20
		}
	  }
  
	
	
  }); */


 /*  $(function() {
	// Initializes and creates emoji set from sprite sheet
	window.emojiPicker = new EmojiPicker({
	  emojiable_selector: '[data-emojiable=true]',
	  assetsPath: 'assets/lib/img/',
	  
	});
	// Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
	// You may want to delay this step if you have dynamically created input fields that appear later in the loading process
	// It can be called as many times as necessary; previously converted input fields will not be converted again
	window.emojiPicker.discover();
  }); */




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












