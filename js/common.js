// подключение common.js

class BurgerEff {
	constructor() {
		this.line = $('#nav-lines').find('.nav-line');
		this.state = 993;
		this.color = [
			'f97b02',
			'e90320',
			'920182',
			'00be92'

		];
		this.description = this.description.bind(this);
	}
	description() {

		setTimeout(()=> {
			this.description();
		}, 1500)

		if (document.documentElement.clientWidth <= this.state) {
			var color = this.color;
			this.line.each(function () {
				let random = parseInt((Math.random(5) * 5) + 1);

				for (var i = 0; i < color.length; i++) {
					if (random == i) {
						$(this).css('background', "#" + color[i]);
					}
				}
			})
		}
	}
}


function chechBoxes() {
	var container = $('.checkbox-container .item'),
		checkbox = container.find('input[type=checkbox]');
	checkbox.change(function(){
		var parent = $(this).parent('.check'),
			text = parent.siblings('.text');
		text.find('b').toggleClass('active');
	})

}


var burgerEff = new BurgerEff;
$(window).resize(function () {
	burgerEff.description();

	// Убираем br
	if(window.matchMedia("(max-width: 450px)").matches) {
		$(".SEO-audit_will_be_useful .SEO-audit_will_be_useful_item_txt p br").remove();
	}
});

$(document).ready(function () {
	// Убираем br
	if(window.matchMedia("(max-width: 450px)").matches) {
		$(".SEO-audit_will_be_useful .SEO-audit_will_be_useful_item_txt p br").remove();
	}

	//  Инициальзация маски в форме
	burgerEff.description();

	chechBoxes();
	
	
	
	
	//  Стилизация скролла
	$(".couple_of_words_txt").mCustomScrollbar({
		theme: "my-theme"
	});

	$(".modal_form_phone").each(function () {
		var className = $(this).attr('class').split(' ');

		className.map(el => {
			if (el == "ua") {
				$(".modal_form_phone").mask("+38(999) 999-99-99");
				$(".modal_form_phone").attr('placeholder','+38(___) ___-__-__' );
			} else {
				$(".modal_form_phone").mask("+7(999) 999-99-99");
				$(".modal_form_phone").attr('placeholder','+7(___) ___-__-__' );
			}
		})
	});
	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });


	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	// скролл по ссылке с атрибутом href
	// $(".header_nav a[href*='#']").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(anchor.attr('href')).offset().top
	//     }, 500);
	//     return false;
	// });

	// Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
	$(".scroll_to").on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $("#" + anchor.data('scroll')).offset().top
		}, 500);
		return false;
	});

	//  Активация слайдера
	$(".owl-carousel").owlCarousel({
	    loop: true,
	    items: 1,
		margin: 10
	});

	// Кастомные кнопки управления слайдером
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn').click(function() {
	    owl.trigger('next.owl.carousel', [700]);
	});
	// Go to the previous item
	$('.customPrevBtn').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [700]);
	});

	// отслеживаем изменение инпута file
	$('#file').change(function(){
		// Если файл прикрепили то заносим значение value в переменную
		var fileResult = $(this).val();
		// И дальше передаем значение в инпут который под загрузчиком
		$(this).parent().find('.fileLoad').find('input').val(fileResult);
	});

	/* Добавляем новый класс кнопке если инпут файл получил фокус */
	$('#file').hover(function(){
		$(this).parent().find('span').addClass('button-hover');
	}, function(){
		$(this).parent().find('span').removeClass('button-hover');
	});

	// Chec
});

$(window).resize(function () {

});

$(window).scroll(function () {

});

