/* dynamic adaptive */

"use strict";

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	
	this.Рѕbjects = [];
	this.daClassname = "_dynamic_adapt_";
	
	this.nodes = document.querySelectorAll("[data-da]");

	
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const Рѕbject = {};
		Рѕbject.element = node;
		Рѕbject.parent = node.parentNode;
		Рѕbject.destination = document.querySelector(dataArray[0].trim());
		Рѕbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		Рѕbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		Рѕbject.index = this.indexInParent(Рѕbject.parent, Рѕbject.element);
		this.Рѕbjects.push(Рѕbject);
	}

	this.arraySort(this.Рѕbjects);


	this.mediaQueries = Array.prototype.map.call(this.Рѕbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});


	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

	
		const РѕbjectsFilter = Array.prototype.filter.call(this.Рѕbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, РѕbjectsFilter);
		});
		this.mediaHandler(matchMedia, РѕbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, Рѕbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < Рѕbjects.length; i++) {
			const Рѕbject = Рѕbjects[i];
			Рѕbject.index = this.indexInParent(Рѕbject.parent, Рѕbject.element);
			this.moveTo(Рѕbject.place, Рѕbject.element, Рѕbject.destination);
		}
	} else {
		for (let i = 0; i < Рѕbjects.length; i++) {
			const Рѕbject = Рѕbjects[i];
			if (Рѕbject.element.classList.contains(this.daClassname)) {
				this.moveBack(Рѕbject.parent, Рѕbject.element, Рѕbject.index);
			}
		}
	}
};


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


DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}


DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};


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
	const burger = document.querySelector('.burger')
	const mobile__menu = document.querySelector('.mobile__menu')
	
	

	burger.addEventListener('click', () => {
		mobile__menu.classList.toggle('opened')
		burger.classList.toggle("close")
		
	})

	
})


var action="click";
var speed="500";

$(document).ready(function() {
// Question handler
$('.a').hide();
$('.q').on(action, function() {
	$(this).toggleClass('plus')
	// Get next element
	$(this).next()
		.slideToggle(speed)
	// Select all other answers
			.siblings('.a')
				.slideUp();
});
});