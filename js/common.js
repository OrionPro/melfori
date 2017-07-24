// подключение common.js
// import {rotationGear} from './helper/helper.js';
function rotationGear(elements, direction = 1) {
	var gearSmall = new TimelineMax();
	gearSmall
		.from(elements, 2, {
			rotation: 360 * direction,
			force3D: false,
			ease: Power0.easeNone
		});
	gearSmall.repeat(Infinity);
}
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

	mobileMenuBg() {
		var menu = $('div[off-canvas]');

	}

	description() {

		setTimeout(() => {
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
function tabsItems(event) {
	event.preventDefault();
	$(".tabs-items-wrap .tabs-item").removeClass('active'); //убираем активные состояния у ссылок

	$(this).addClass('active'); //Добавляем активное состояние у той что нажали

	var data = $(this).data('tab'); //создаём переменную с датой
	$('.tabs-wrap').removeClass("active"); //убираем активные состояния у табов
	$('.tabs-wrap[data-tab=' + data + ']').addClass('active'); //если таб соответствует тому, какой data
}

if($('div').hasClass('tabs-items-wrap')){
	const tabsItemsElem = $(".tabs-items-wrap .tabs-item");

	let changeActive = (function(ev,p,c){
		let i = 0;
		return function(ev,p,c){
			let x = p[i];
			if( ++i === p.length){ i = 0}
			for(let i = p.length;i--;){
				p[i].classList.remove('active')
			}
			if(c){
				clearInterval(c);
				ev.preventDefault();
				x = ev.target;
			}
			x.classList.add('active');
			let data = $(x).data('tab'); //создаём переменную с датой
			$('.tabs-wrap').removeClass("active"); //убираем активные состояния у табов
			$('.tabs-wrap[data-tab=' + data + ']').addClass('active');

		}
	}());

	let timerId = setInterval(changeActive,4000,null,tabsItemsElem);

	for(let i = tabsItemsElem.length;i--;){
		tabsItemsElem[i].addEventListener('click', ev => changeActive(ev,tabsItemsElem,timerId))
	}

}

$(".tabs-items-wrap .tabs-item").on('click', tabsItems);

//анимированная кнопка вниз на хедере
const buttonGoDown = document.querySelector('.header_bot_txt > a > i');
	function getRandomColor(to){
		"use strict";
		let red = Math.random() * to | 0;
		let green = Math.random() * to | 0;
		let blue = Math.random() * to | 0;

		return `rgb(${red},${green},${blue})`;
	}

	setInterval(function(){
		buttonGoDown.style.color = getRandomColor(255);
	},1500);
function chechBoxes() {
	var container = $('.checkbox-container .item'),
		checkbox = container.find('input[type=checkbox]');
	checkbox.change(function () {
		var parent = $(this).parent('.check'),
			text = parent.siblings('.text');
		$(this).toggleClass('active');
		text.find('b').toggleClass('active');

		var arrVal = [];
		checkbox.each(function () {
			if ($(this).hasClass('active')) {
				arrVal.push(' ' + $(this).parent('.check').siblings('.text').find('b').text())
				$('.setting-check-hidden').val(arrVal)
			}
		})
	})

}


$(window).resize(function () {
	burgerEff.description();
	burgerEff.mobileMenuBg();


});

class CheckboxesInoputs {

	setValues(value) {
		var hidden = $('[data-sync=setting-check-hidden]'),
			arrVal = [];

		$('[data-sync=' + value + ']').click(function () {
			var nowVal = hidden.val();

			if ($(this).attr('type') === 'checkbox') {
				var checkbox = $('[data-sync=' + value + '][type=checkbox]');

				checkbox.each(function () {
					if ($(this).hasClass('active')) {

						console.log(valueText)

					}
				})
			} else {
				return false;
			}
		});
	}
}

var burgerEff = new BurgerEff;
//для back end


// let ajaxString;
// let country = $("input[name='country_name']").val();
//  switch(country){
//  case 'UA':
//  ajaxString = '../json/direct-text-ua.json';
//  break;
//  case'RU':
//  ajaxString = '../json/direct-text-ru.json';
//  break;
//  default:
//  ajaxString = '../json/direct-text-en.json'
//  }
//  let directText;
//  $.ajax({
//  type: "GET",
//  url: ajaxString,
//  success: function(data){
//  directText = data;
//  }
//  });


let directText;
$.ajax({
	type: "GET",
	url: "/direct-text.json",
	success: function(data){
		directText = data;
	}
});

$(document).ready(function () {
	//contextual-rates tabs
	if(document.querySelector('.contextual-rates')){

		const ratesMenuItems = document.querySelectorAll('.rates-menu-item'),
			backMainColor = document.querySelector('.back-main-color'),
			changePrices = document.querySelectorAll('.description-prices'),
			changeDirect = document.querySelectorAll('.change-direct');

		let curState = function(i,arr,obj,prices){
			"use strict";
			let item = arr[i];
			let counter = 0;
			for(let key in item ) {
				if(Array.isArray(item[key])){
					for(let i = prices.length;i--;){
						prices[i].textContent = `${item[key][i]} грн`;
					}
					return;
				}
				obj[counter++].textContent = item[key];
			}
		};

		setTimeout(()=>{curState(0,directText,changeDirect,changePrices)},200);
		let goBackFromTo = function () {
			"use strict";
			backMainColor.firstElementChild.innerHTML = this.firstElementChild.innerHTML;
			backMainColor.style.left = this.getAttribute('data-go') + '%';
			backMainColor.lastElementChild.textContent = this.lastElementChild.textContent;
			curState(this.getAttribute('data-num'),directText,changeDirect,changePrices);

		};

		for(let i = ratesMenuItems.length; i--; ){
			ratesMenuItems[i].addEventListener('click',goBackFromTo);
			ratesMenuItems[i].setAttribute('data-num', i);
		}
	}

	// Анимация якорей
	TweenMax.set('.anchors__text-block', {
		x: 10,
		autoAlpha: 0
	});
	function resetTween() {
		TweenMax.set($(this).find('.anchors__text-block'), {
			x: 10,
			autoAlpha: 0
		});
	}

//	делаем ширину у текстового блока в якорях
	$(document).find(".anchors .anchors__text-block span").each(function () {
		let widthSpan = $(this).width();
		$(this).parent().css({
			"width": widthSpan + 60
		});
		$(this).parent().addClass("not-active");
	});
	$(".anchors .anchors__text-block").css("position", "absolute");
	$(".anchors").css('width', '40px');
	if(window.matchMedia("(max-width: 992px)").matches) {
		$(".anchors").css("display", "none");
	}

	$(".anchors .anchors__text-block").css("position", "absolute");
	$(".anchors .anchors__item").hover(function () {
			$(this).parents('.anchors').css('width', '300px');
			$(this).find('.anchors__text-block').removeClass("not-active");
			TweenMax.to($(this).find('.anchors__text-block'), 0.3, {
				x: 0,
				autoAlpha: 1,
				ease: Power0.easeNone,
				onStart: resetTween
			});
		},
		(function () {
			TweenMax.to($(this).find('.anchors__text-block'), 0.3, {
				x: 10,
				autoAlpha: 0,
				ease: Power0.easeNone
			});
		})
	);
	let timeout;
	$(".anchors").hover(function () {
			clearTimeout(timeout);
		},
		(function () {
			timeout = setTimeout(function () {
				$('.anchors').css('width', '40px');
			}, 1500)
		})
	);

//	страница SMM hovers на больших иконках
	$(".contextual-not-pay-section.smm-pages .social-item").hover(function () {
			$(this).find('.social-item__img').addClass('active');
		},
		(function () {
			$(this).find('.social-item__img').removeClass('active');
		})
	);

// подключение нового хедера vadjs
	if (document.querySelector(".hoverDivMenu") !== null) {
		var service = document.querySelectorAll('.header_nav ul li'),
			hoverDiv = document.querySelector('.hoverDivMenu'),
			hoverTop = document.querySelector('.header_top'),
			caret = document.querySelector('.caretup'),
			section = document.querySelector(".header");

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
			if (e.clientY > 325) hideHeaderService();
		}
	}
//секция who we are item замена фото при ховере
	if (document.querySelectorAll('.item-faces')) {
		const allFaces = document.querySelectorAll('.item-faces');

		for (let i = allFaces.length;i--;) {
			allFaces[i].lastElementChild.style.display = 'none';
			allFaces[i].addEventListener('mouseenter', function () {
				this.firstElementChild.classList.remove('active-image');
				setTimeout(() => {
					this.firstElementChild.style.display = 'none';
					this.lastElementChild.style.display = 'block';
				}, 200);
				setTimeout(() => {
					this.lastElementChild.classList.add('active-image');
				}, 250);
			}, false);

			allFaces[i].addEventListener('mouseleave', function () {
				this.lastElementChild.classList.remove('active-image');
				// setTimeout(()=>{
				this.lastElementChild.style.display = 'none';
				this.firstElementChild.style.display = 'block';
				// },200);
				// setTimeout(()=>{
				this.firstElementChild.classList.add('active-image');
				// },250);
			}, false)
		}
	}
	//подклбчение LIGHTGALLERY отсюда vadjs
	function lightgallery(main, child) {
		$(main).lightGallery({
				selector: child,
				zoom: true,
				thumbnail:true
			}
		)

	}

	var timeline = new TimelineMax;

	timeline.from('.gear-1', 1, {
		ease: Bounce.easeOut,
		rotation: -50,
		onComplete: () => {
			rotationGear('.gear-1')

		}
	}, '-=1.5')
		.from('.gear-2', 1, {
			ease: Bounce.easeOut,
			rotation: 50,
			onComplete: () => {
				rotationGear('.gear-2', -1)
			}
		}, '-=1.5');

	timeline.play();


	var arr = ['sdsdsd', 2, null];


	//final-coutdown
	function finalCountdown(date, count) {
		var _DAYinMS = 86400000,
			dateNow = Date.now(),
			cur = count;
		date = typeof date === 'number' ? date : Date.parse(date);
		count -= Math.floor((dateNow - date) / _DAYinMS);
		if (count < 1) {

			return finalCountdown(date + (_DAYinMS * cur), cur);
		}
		return count;
	}

	var d = new Date(2017, 5, 9);
	var final = finalCountdown(d, 10);

	if (document.querySelector('.final-coutdown-point')) {
		document.querySelector('.final-coutdown-point').innerHTML = final;
	}

	// //до сюда vadj

	//  Инициальзация маски в форме
	burgerEff.description();
	burgerEff.mobileMenuBg();

	chechBoxes();

	// Стилизация скролла
	$(".couple_of_words_txt").mCustomScrollbar({
		theme: "my-theme"
	});

	$(".modal_form_phone").each(function () {
		var className = $(this).attr('class').split(' ');

		// className.map(el => {
		// 	if (el == "ua") {
		// 		$(".modal_form_phone").mask("+38(999) 999-99-99");
		// 		$(".modal_form_phone").attr('placeholder', '+38(___) ___-__-__');
		// 	} else {
		// 		$(".modal_form_phone").mask("+7(999) 999-99-99");
		// 		$(".modal_form_phone").attr('placeholder', '+7(___) ___-__-__');
		// 	}
		// })
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
	$(".header_nav a[href*='#']").on("click", function (e) {
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

	// Кастомные кнопки управления слайдером

	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		margin: 10
	});
	// Go to the next item
	$('.customNextBtn').click(function () {
		$('.owl-carousel').trigger('next.owl.carousel', [700]);
	});
	// Go to the previous item
	$('.customPrevBtn').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		$('.owl-carousel').trigger('prev.owl.carousel', [700]);
	});

	var currBody = document.getElementsByTagName('body')[0];

	setTimeout( function () {
		switch (currBody.className) {

			case 'design-pages':
				lightgallery('.lightGallery', '.clickGal');
				break;
			case "review":
				lightgallery(".lightGallery", '.openLetter');
				break;
			case 'about-us-pages':
				lightgallery("#lightGallery", '.iconPlus');
				break;
			case 'VkAdvacment':
				lightgallery('.lightGallery', '.open_gallery');
				break;
			case 'instagram_advacement':
				lightgallery('.lightGallery', '.open_gallery');
				break;
			case 'facebook_advacement':
				lightgallery('.lightGallery', '.open_gallery');
				break;
			case 'main-seo-pages':
				lightgallery('.lightGallery', '.open_gallery');
				break;
			case 'contextual-pages':
				lightgallery('.lightGallery', '.open_gallery');
				break;
			case 'smm':
				lightgallery('.lightGallery', '.open_gallery');
				break;
			case 'seo_audit':
				lightgallery('.lightGallery', '.open_gallery');
				break;
			default:
				console.log("unanimated page");

		}
	}, 1000);

	// var owlSeo = $('.owl-carousel.seo-page-carousel');
	// owlSeo.owlCarousel({
	// 	loop: true,
	// 	items: 1,
	// 	margin: 10
	// });
	// // Go to the next item
	// $('.customNextBtn').click(function () {
	// 	owlSeo.trigger('next.owl.carousel', [700]);
	// });
	// // Go to the previous item
	// $('.customPrevBtn').click(function () {
	// 	// With optional speed parameter
	// 	// Parameters has to be in square bracket '[]'
	// 	owlSeo.trigger('prev.owl.carousel', [700]);
	// });
	// отслеживаем изменение инпута file
	$('#file').change(function () {
		// Если файл прикрепили то заносим значение value в переменную
		// Если файл прикрепили то заосим значение value в переменную
		var fileResult = $(this).val();
		// И дальше передаем значение в инпут который под загрузчиком
		$(this).parent().find('.fileLoad').find('input').val(fileResult);
	});
	// var teamCarousel = $('.our-team-carousel .owl-carousel');
	// teamCarousel.owlCarousel({
	// 	loop: true,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1,
	// 			margin: 0
	// 		},
	// 		475: {
	// 			items: 2,
	// 			margin: 10
	// 		},
	// 		600: {
	// 			items: 3,
	// 			margin: 10
	// 		},
	// 		1000: {
	// 			items: 4,
	// 			margin: 10
	// 		},
	// 		1250: {
	// 			items: 5,
	// 			margin: 20
	// 		}
	// 	}
	// });
	// $('.custom-btn-team-left').click(function () {
	// 	teamCarousel.trigger('prev.owl.carousel', [700]);
	// });
	// $('.custom-btn-team-right').click(function () {
	// 	teamCarousel.trigger('next.owl.carousel', [700]);
	// });
	// /* Добавляем новый класс кнопке если инпут файл получил фокус */
	$('#file').hover(function () {
		$(this).parent().find('span').addClass('button-hover');
	}, function () {
		$(this).parent().find('span').removeClass('button-hover');
	});

	// Chec
});

$(window).resize(function () {
	if(window.matchMedia("(max-width: 992px)").matches) {
		$(".anchors").css("display", "none");
	}
	if(window.matchMedia("(min-width: 992px)").matches) {
		$(".anchors").css("display", "block");
	}
});

$(window).scroll(function () {

});

