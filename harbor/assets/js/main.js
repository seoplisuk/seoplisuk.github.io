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


document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
    const burger = document.querySelector('.burger')
	const mobilemenu = document.querySelector('.mobile__menu')
    const close = document.querySelector('.close')

    burger.addEventListener('click', () => {
		mobilemenu.classList.toggle('mobile__menu__opened')
		burger.classList.toggle('burger__opened')
		body.classList.toggle('body__opened')
    })

	mobilemenu.addEventListener('click', () => {
		mobilemenu.classList.remove('mobile__menu__opened')
		burger.classList.remove('burger__opened')
		body.classList.remove('body__opened')
    })

	

	
})


const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	});

	

	Fancybox.bind("[data-fancybox]", {

	});




function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UltimateBlocksCounter = /*#__PURE__*/function () {
  function UltimateBlocksCounter(wrapper) {
    _classCallCheck(this, UltimateBlocksCounter);
    this.container = wrapper;
    this.counterNumber = this.container.querySelector(".ub_counter-number");
    this.startCount = parseInt(this.container.dataset.start_num, 10);
    this.stopCounter = parseInt(this.container.dataset.end_num, 10);
    this.animationDuration = parseInt(this.container.dataset.animation_duration, 10);
    this.frameDuration = 1000 / 60;
    this.totalFrames = Math.round(this.animationDuration * 1000 / this.frameDuration);
    this.easeOutQuad = function (t) {
      return t * (2 - t);
    };
    this.initialize();
  }
  return _createClass(UltimateBlocksCounter, [{
    key: "initialize",
    value: function initialize() {
      this.updateCounter();
    }
  }, {
    key: "updateCounter",
    value: function updateCounter() {
      var _this = this;
      var frame = 0;
      var countTo = this.stopCounter - this.startCount;
      var interval = setInterval(function () {
        frame++;
        var progress = _this.easeOutQuad(frame / _this.totalFrames);
        var currentCount = Math.round(countTo * progress) + _this.startCount;
        if (parseInt(_this.counterNumber.innerHTML, 10) !== currentCount) {
          _this.counterNumber.innerHTML = currentCount;
        }
        if (frame === _this.totalFrames) {
          clearInterval(interval);
        }
      }, this.frameDuration);
    }
  }]);
}();
window.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelectorAll(".ub_counter");
  container.forEach(function (wrapper) {
    return new UltimateBlocksCounter(wrapper);
  });
});


	









	
 $('.play').click(function() {
	let video = $(this).closest('.video').find('.video-player');
	var player = new Vimeo.Player(video);
	player.play();
	$(this).addClass('playing');
}); 


	
  
/* 	$('.play').click(function () {
		let video = $(this).closest('.video').find('.video-player');
		var player = new Vimeo.Player(video);
	  if (video.paused) {
		player.play();
		$(this).addClass('playing');
	  } else {
		player.pause();
		$(this).removeClass('playing');
		
	  }
	}); */
 


