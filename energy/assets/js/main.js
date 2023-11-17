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




let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 124

const add_class_on_scroll = () => header.classList.add("header__active")
const remove_class_on_scroll = () => header.classList.remove("header__active")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})

$(".question__content").hide();
$(".question__header").click(function () {
	
	$(this).next().slideToggle();
	$(this).parent().toggleClass('opened');
});




const swiper = new Swiper('.swiper', {
    // Optional parameters
	slidesPerView: 2.4,
    loop: true,
    

  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

	breakpoints: {
		320: {
			slidesPerView: 1,
			
			
		},
		1024: { 
			slidesPerView: 2.4,
		},
		1200: {
			slidesPerView: 2.4,
		}
	}
  
});


const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
	slidesPerView: 2.4,
    loop: true,
	spaceBetween: 27,
    

  
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },

	breakpoints: {
		320: {
			slidesPerView: 1,
			
			
		},
		1024: { 
			slidesPerView: 2.4,
		},
		1200: {
			slidesPerView: 2.4,
		}
	}
  
});


const swiper3 = new Swiper('.cap__slider', {
    // Optional parameters
	slidesPerView: 3,
    loop: true,
	
	centeredSlides: true,
	spaceBetween: 51,
    

  
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			
		},
		1024: { 
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 51,
		}
	}
  
});


const swiper4 = new Swiper('.years__row', {
    // Optional parameters
	slidesPerView: 3.8,
    loop: false,
	spaceBetween: 72,
	

	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 30,
			
		},
		1024: { 
			slidesPerView: 2.2,
		},
		1200: {
			slidesPerView: 3.8,
			spaceBetween: 72,
		}
	}

});



function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }


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




  $(document).ready(function () {
    $(".content2").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".content2").is(':visible') ? 'Read More' : 'Read Less';
        $(".show_hide").text(txt);
        $(this).prev('.content2').slideToggle(200);
    });
});



