jQuery(document).ready(function($) {
	$('.header__btn').click(function(){
		$('.header__mobile').addClass('active');
		$('body').css('overflow', 'hidden');
	});

	$('.header__exit').click(function(){
		$('.header__mobile').removeClass('active');
		$('body').css('overflow', 'visible');
	});

	$(".slider .owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		smartSpeed: 500,
		items: 1,
	});

	$(".programms__carousel .owl-carousel").owlCarousel({
		loop: true,
		margin: 32,
		nav: true,
		smartSpeed: 500,
		responsive: {
			0:{
				items: 1,
			},
			480:{
				items: 1,
			},
			576:{
				items: 1,
			},
			768:{
				items: 2,
			},
			992:{
				items: 3,
			},
			1200: {
				items: 3,
			},
		},
	});

	var teamSlider = $(".team__slider .owl-carousel").owlCarousel({
		loop: true,
		margin: 32,
		nav: true,
		smartSpeed: 500,
		mouseDrag: false,
		responsive: {
			0:{
				items: 1,
			},
			480:{
				items: 1,
			},
			576:{
				items: 1,
			},
			768:{
				items: 2,
			},
			992:{
				items: 1,
			},
			1200: {
				items: 1,
			},
		},
	});

	var previewsCarousel = $(".team__previews .owl-carousel").owlCarousel({
		loop: true,
		items: 4,
		vertical: true,
		nav: true,
		margin: 0,
	});

	$('.employee').click(function(){
		$('.employee').removeClass('active');
		$(this).addClass('active');
		$('.employee[data-eq="' + $(this).data('eq') + '"]').addClass('active');
		teamSlider.trigger('to.owl.carousel', [$(this).data('eq')]);
	});

	$('.accordion__caption').click(function(){
		$(this).toggleClass('active').next().slideToggle(200);
		$('.accordion__caption').not($(this)).removeClass('active');
		$('.accordion__block').not($(this).next()).slideUp(200);
	});

	$('.week__item.active').click(function(){
		$(this).addClass('selected');
		$('.week__item.active').not(this).removeClass('selected');
		var value = $(this).find('.week__day span').text().trim()
			+ ' ' + $(this).find('.week__time').text().trim()
		$(this).parents('.week').find('input').val(value);
	});

	$('input[name="phone"]').mask("+7 (999) 999 99 99");

	$('.anchor').click(function(){
		if(document.getElementById($(this).attr('href').substr(1)) != null) {
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 0}, 500);
		}
		return false;
	});

	$('.directions__all a').click(function(){
		if ($(this).hasClass('active')) {
			$(this).text('Показать все');
		} else {
			$(this).text('Скрыть');
		}

		$(this).parents('.directions__item').find('.directions__list_hidden')
			.slideToggle(200);
		$(this).toggleClass('active');

		return false;
	});

	$(".specialists_carousel .owl-carousel").owlCarousel({
		loop: true,
		margin: 32,
		nav: true,
		smartSpeed: 500,
		responsive: {
			0:{
				items: 1,
			},
			480:{
				items: 2,
			},
			576:{
				items: 1,
			},
			768:{
				items: 2,
			},
			992:{
				items: 3,
			},
			1200: {
				items: 3,
			},
		},
	});

	$('.button-huddle').click(function(){
		$(this).addClass('active');

		return false;
	});

	$('.shedule__name a').click(function(){
		if (window.innerWidth < 992) {
			$(this).parent().toggleClass('active');
			$(this).parent().next().slideToggle(200);

			return false;
		}
	});

	$('.shedule__name').click(function(){
		if (window.innerWidth < 992) {
			$(this).toggleClass('active');
			$(this).next().slideToggle(200);

			return false;
		}
	});

	$('.shedule__item.active').click(function(){
		$(this).addClass('selected').parents('.shedule')
			.find('.shedule__item.active').not($(this)).removeClass('selected');

		$(this).parents('.shedule').find('.record').find('input[name="time"]').val(
			$(this).parents('.shedule__line').find('.shedule__name').text().replace(/\s+/g, ' ').trim() + ' ' + $(this).text().replace(/\s+/g, ' ').trim()
		);
	});

	$('.useful__more').click(function(){
		$(this).hide();
		$(this).next().slideDown(200);
		return false;
	});

	$('.revivews__more a').click(function(){
		$(this).parent().prev().toggleClass('active');

		if ($(this).hasClass('active')) {
			$(this).removeClass('active').text('Полностью');
		} else {
			$(this).addClass('active').text('Скрыть');
		}

		return false;
	});

	$('.radio__item').click(function(){
		$(this).parent().parent().find('input').val($(this).text().trim());
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.popup__exit').click(function(){
		$(this).parents('.modal').fadeOut(200);
	});

	$('.modal').click(function(event){
		if(
			$(event.target).hasClass('modal') ||
			$(event.target).hasClass('modal__container')
		) {
			$(this).fadeOut(200);
		}
	});

	$('.open-modal').click(function(){
		$($(this).attr('href')).fadeIn(200);

		return false;
	});

	var controls = {
		video: $("#video"),
		play: $("#play"),
		prev: $("#prev"),
		next: $("#next"),
		currentTime: $("#currentTime"),
		duration: $("#duration"),
		hasHours: false,
	};

	var video = controls.video[0];

	var isStarting = false;

	$("#rangeSlider").ionRangeSlider({
		hide_min_max: true,
		hide_from_to: true,
		from: 0,
		min: 0,
		max: 100,
		onChange: function() {
			isStarting = true;
		},
		onFinish: function(obj) {
			video.currentTime = (video.duration * obj.from) / 100;
			isStarting = false;
		},
	});

	var rangeSlider = $("#rangeSlider").data("ionRangeSlider");

	$("#roundSlider").roundSlider({
		radius: 44,
		sliderType: "min-range",
		value: 0,
		min: 0,
		max: 100,
		width: 2,
		handleSize: 8,
		svgMode: true,
		pathColor: '#e9ebef',
		borderColor: 'transparent',
		rangeColor: '#00B7BD',
		startAngle: 90,
		endAngle: 90,
		showTooltip: false,
		start:  function(obj) {
			isStarting = true;
		},
		change:  function(obj) {
			video.currentTime = (video.duration * obj.value) / 100;
		},
		stop:  function(obj) {
			video.currentTime = (video.duration * obj.value) / 100;
			isStarting = false;
		},
	});

	var roundSlider = $("#roundSlider").data("roundSlider");

	controls.play.click(function(){
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});

	video.addEventListener("ended", function() {
		controls.next.click();
	});

	video.addEventListener("play", function() {
		$('.video__img').hide();
		controls.play.addClass('active');
	});

	video.addEventListener("pause", function() {
		controls.play.removeClass('active');
	});

	controls.prev.click(function(){
		video.pause();

		var index = $('.video__list div.active').index();
		var src = '';
		var duration = 0;

		if (index == 0) {
			src = $('.video__list div:last-child').data('src');
			duration = $('.video__list div:last-child').data('duration');
			$('.video__list div:last-child').addClass('active')
				.siblings('div').removeClass('active');
		} else {
			src = $('.video__list div').eq(index - 1).data('src');
			duration = $('.video__list div').eq(index - 1).data('duration');
			$('.video__list div').eq(index - 1).addClass('active')
				.siblings('div').removeClass('active');
		}

		video.src = src;
		video.play();

		setDuration(duration);
	});

	controls.next.click(function(){
		video.pause();

		var index = $('.video__list div.active').index();
		var src = '';
		var duration = 0;

		if (index == $('.video__list div').length - 1) {
			src = $('.video__list div').eq(0).data('src');
			duration = $('.video__list div').eq(0).data('duration');
			$('.video__list div').eq(0).addClass('active')
				.siblings('div').removeClass('active');
		} else {
			src = $('.video__list div').eq(index + 1).data('src');
			duration = $('.video__list div').eq(index + 1).data('duration');
			$('.video__list div').eq(index + 1).addClass('active')
				.siblings('div').removeClass('active');
		}

		video.src = src;
		video.play();

		setDuration(duration);
	});

	var sliderProgress = 0;
	video.addEventListener("timeupdate", function() {
		controls.currentTime.text(formatTime(video.currentTime, controls.hasHours));

		if (!isStarting) {
			var progress = Math.floor(Math.floor(video.currentTime) / Math.floor(video.duration) * 100);
			
			if (sliderProgress !== progress) {
				rangeSlider.update({from: progress});
				roundSlider.setValue(progress);
				sliderProgress = progress
			}
		}
	}, false);

	function setDuration(duration) {
		controls.hasHours = (duration / 3600) >= 1.0;
		controls.duration.text(formatTime(duration, controls.hasHours));
		controls.currentTime.text(formatTime(0), controls.hasHours);
	}

	function formatTime(time, hours) {
		if (hours) {
			var h = Math.floor(time / 3600);
			time = time - h * 3600;

			var m = Math.floor(time / 60);
			var s = Math.floor(time % 60);

			return h.lead0(2)  + ":" + m.lead0(2) + ":" + s.lead0(2);

		} else {
			var m = Math.floor(time / 60);
			var s = Math.floor(time % 60);

			return m.lead0(2) + ":" + s.lead0(2);
		}
	}

	Number.prototype.lead0 = function(n) {
		var nz = "" + this;

		while (nz.length < n) {
			nz = "0" + nz;
		}

		return nz;
	};
});