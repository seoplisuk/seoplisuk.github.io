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
	// РјР°СЃСЃРёРІ РѕР±СЉРµРєС‚РѕРІ
	this.Рѕbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// РјР°СЃСЃРёРІ DOM-СЌР»РµРјРµРЅС‚РѕРІ
	this.nodes = document.querySelectorAll("[data-da]");

	// РЅР°РїРѕР»РЅРµРЅРёРµ Рѕbjects РѕР±СЉРєС‚Р°РјРё
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

	// РјР°СЃСЃРёРІ СѓРЅРёРєР°Р»СЊРЅС‹С… РјРµРґРёР°-Р·Р°РїСЂРѕСЃРѕРІ
	this.mediaQueries = Array.prototype.map.call(this.Рѕbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// РЅР°РІРµС€РёРІР°РЅРёРµ СЃР»СѓС€Р°С‚РµР»СЏ РЅР° РјРµРґРёР°-Р·Р°РїСЂРѕСЃ
	// Рё РІС‹Р·РѕРІ РѕР±СЂР°Р±РѕС‚С‡РёРєР° РїСЂРё РїРµСЂРІРѕРј Р·Р°РїСѓСЃРєРµ
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// РјР°СЃСЃРёРІ РѕР±СЉРµРєС‚РѕРІ СЃ РїРѕРґС…РѕРґСЏС‰РёРј Р±СЂРµР№РєРїРѕРёРЅС‚РѕРј
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

// Р¤СѓРЅРєС†РёСЏ РїРµСЂРµРјРµС‰РµРЅРёСЏ
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

// Р¤СѓРЅРєС†РёСЏ РІРѕР·РІСЂР°С‚Р°
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Р¤СѓРЅРєС†РёСЏ РїРѕР»СѓС‡РµРЅРёСЏ РёРЅРґРµРєСЃР° РІРЅСѓС‚СЂРё СЂРѕРґРёС‚РµР»СЏ
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Р¤СѓРЅРєС†РёСЏ СЃРѕСЂС‚РёСЂРѕРІРєРё РјР°СЃСЃРёРІР° РїРѕ breakpoint Рё place 
// РїРѕ РІРѕР·СЂР°СЃС‚Р°РЅРёСЋ РґР»СЏ this.type = min
// РїРѕ СѓР±С‹РІР°РЅРёСЋ РґР»СЏ this.type = max
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



    

