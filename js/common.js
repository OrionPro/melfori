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
	mobileMenuBg(){
		var menu = $('div[off-canvas]');
		
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

// TABS
$(".tabs-items-wrap .tabs-item").on('click', function (event) {
	//ссылки которые будут переключать табы
	event.preventDefault();

	$(".tabs-items-wrap .tabs-item").removeClass('active'); //убираем активные состояния у ссылок

	$(this).addClass('active'); //Добавляем активное состояние у той что нажали

	var data = $(this).data('tab'); //создаём переменную с датой
	$('.tabs-wrap').removeClass("active"); //убираем активные состояния у табов
	$('.tabs-wrap[data-tab=' + data + ']').addClass('active'); //если таб соответствует тому, какой data
});

function chechBoxes() {
	var container = $('.checkbox-container .item'),
		checkbox = container.find('input[type=checkbox]');
	checkbox.change(function(){
		var parent = $(this).parent('.check'),
			text = parent.siblings('.text');
		$(this).toggleClass('active');
		text.find('b').toggleClass('active');

		var	arrVal = [];
		checkbox.each(function () {
			if($(this).hasClass('active')){
				arrVal.push(' ' + $(this).parent('.check').siblings('.text').find('b').text() )
					$('.setting-check-hidden').val(arrVal)
			}
		})
	})

}




$(window).resize(function () {
	burgerEff.description();
	burgerEff.mobileMenuBg();


});


class CheckboxesInoputs{

	setValues(value){
		var hidden = $('[data-sync=setting-check-hidden]'),
			arrVal = [];

		$('[data-sync='+ value +']').click(function () {
			var nowVal = hidden.val();
			
			if($(this).attr('type') === 'checkbox'){
				var checkbox = $('[data-sync='+ value +'][type=checkbox]');

				checkbox.each(function () {
					if($(this).hasClass('active')){
					
						console.log(valueText)

					}
				})
			}else{
				return false;
			}
		});
	}
}



var burgerEff = new BurgerEff;


$(document).ready(function () {
// подключение нового хедера vadjs
  if(document.querySelector(".hoverDivMenu") !== null) {
	  var service = document.querySelectorAll('.header_nav ul li'),
		  hoverDiv = document.querySelector('.hoverDivMenu'),
		  hoverTop = document.querySelector('.header_top'),
		  caret = document.querySelector('.caretup'),
		  section = document.querySelector(".section-1");

	  function hideHeaderService() {
		  hoverDiv.style.opacity = '0';
		  hoverTop.style.borderRadius = "";
		  hoverTop.style.boxShadow = "";
		  caret.style.transform = 'rotate(0deg)';
		  hoverTop.style.background = 'transparent';

	  }

	  service[1].onmouseover = function () {
		  hoverDiv.style.opacity = '1';
		  hoverTop.style.borderRadius = "0px 0px 10px 10px";
		  hoverTop.style.boxShadow = "0 0 10px 2px rgba(51, 55, 57, 0.08)";
		  hoverTop.style.background = '#fff';
		  caret.style.transform = 'rotate(180deg)';


	  }
	  for (var i = service.length; i--;) {
		  if (i === 1) continue;
		  service[i].onmouseover = hideHeaderService;
	  }

	  section.onmouseover = function (e) {
		  if (e.clientY > 325)hideHeaderService()
	  }
  }
	//подклбчение LIGHTGALLERY
	function lightgallery(main, child){
		$(main).lightGallery({
				selector: child,
				zoom: true
			}
		)

	}
	lightgallery('#lightGallery', '.iconPlus');
	lightgallery(".lightGallery", '.openLetter');
	// lightgallery('.about-us-office',".iconPlus");
	// $('.about-us-office').lightGallery({
	// 		selector: '.iconPlus',
	// 		zoom: true
	// 	}
	// );
	//
	// $('.img-container').lightGallery({
	// 	selector: '.imgHover'
	// 	zoom: true
	// });

	//  Инициальзация маски в форме
	burgerEff.description();
	burgerEff.mobileMenuBg();

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
	$(".header_nav a[href*='#']").on("click", function(e) {
	    e.preventDefault();
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 500);
	    return false;
	});

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
	$('.owl-carousel').lightGallery({
		selector: '.carousel_main_img',
		zoom: true
	});
	// отслеживаем изменение инпута file
	$('#file').change(function(){
		// Если файл прикрепили то заносим значение value в переменную
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

