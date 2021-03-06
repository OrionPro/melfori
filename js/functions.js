
// подключение functions.js

$(function() {
	//SVG Fallback
	// if(!Modernizr.svg) {
	//  $("img[src*='svg']").attr("src", function() {
	//      return $(this).attr("src").replace(".svg", ".png");
	//  });
	// };
});
//изменяется - для плавной обратной анимации animate.css*/
$(window).scroll(function() {
	// для правильной рабоы надо прописать в блок которому присваивается анимация атрибут data-anim="fadeInLeft" с названием анимации
	$('.animated').each(function() {
		var imagePos = $(this).offset().top;
		var imageHght = $(this).outerHeight();
		var topOfWindow = $(window).scrollTop() + 40;
		var heightOfWindow = $(window).height();
		var animName = $(this).data('anim');
		if (!$(this).data('atop')) {
			var animTop = 0.9;
		} else {
			var animTop = $(this).data('atop');
		}
		if (imagePos < topOfWindow + heightOfWindow * animTop && imagePos + imageHght > topOfWindow) {
			$(this).css('visibility', 'visible').addClass(animName);

		} else if (imagePos + imageHght < topOfWindow || imagePos > topOfWindow + heightOfWindow) {
			$(this).css('visibility', 'hidden').removeClass(animName);
		}
	});
});
/**
 * FastClick
 */

if ( 'addEventListener' in document ) {
	document.addEventListener('DOMContentLoaded', function () {
		FastClick.attach( document.body );
	}, false );
}
// Initialize Slidebars
(function($) {
	// Initialize Slidebars
	var controller = new slidebars();
	controller.init();

	// Toggle Slidebars
	$('#nav-button-label').on('click', function(event) {
		// Stop default action and bubbling
		event.stopPropagation();
		event.preventDefault();
		// Toggle the Slidebar with id 'id-1'
		controller.toggle('id-1');
		$("html,body").toggleClass("slidebars");
	});

	// Close Slidebar links
	$('[off-canvas] a:not("[off-canvas] a.slct")').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();

		var url = $(this).attr('href'),
			target = $(this).attr('target') ? $(this).attr('target') : '_self';

		$("#nav-button-label").removeClass("nav-on");
		$("#nav-button-label .nav-line").removeClass("active");
		$("html,body").removeClass("slidebars");
		controller.close(function() {
			window.open(url, target);
		});
	});

	// Add close class to canvas container when Slidebar is opened
	$(controller.events).on('opening', function(event) {
		$('[canvas]').addClass('js-close-any');
	});
	// Add close class to canvas container when Slidebar is opened
		$( controller.events ).on( 'closing', function ( event ) {
			$( '[canvas]' ).removeClass( 'js-close-any' );
		} );
	// Close any
	$(document).on('click', '.js-close-any', function(event) {
		if (controller.getActiveSlidebar()) {
			event.preventDefault();
			event.stopPropagation();
			$("#nav-button-label").removeClass("nav-on");
			$("#nav-button-label .nav-line").removeClass("active");
			$("html,body").removeClass("slidebars");
			controller.close();

		}
	});
})($);


$(document).ready(function() {
	function get_name_browser() {
		// получаем данные userAgent
		const ua = navigator.userAgent;
		// с помощью регулярок проверяем наличие текста,
		// соответствующие тому или иному браузеру
		if (ua.search(/Chrome/) > 0) return 'Google Chrome';
		if (ua.search(/Firefox/) > 0) return 'Firefox';
		if (ua.search(/Opera/) > 0) return 'Opera';
		if (ua.search(/Safari/) > 0) return 'Safari';
		if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
		if (ua.search(/Trident/) > 0) return 'Trident';
		// условий может быть и больше.
		// сейчас сделаны проверки только
		// для популярных браузеров
		return 'Не определен';
	}
   var currbrowser = get_name_browser();
	var whiteMenu = document.querySelector('.popup.pop5');
	var openModal = document.querySelector('.internet-explorer');
	var closeModal = document.querySelector('.modal-text > .fa-close');
	if(currbrowser ===  'Internet Explorer' || currbrowser === 'Trident' ){
		whiteMenu.classList.remove('md-content');
		whiteMenu.style.display = 'none';
		openModal.addEventListener('click',function () {
			whiteMenu.style.display = 'flex'
		});
		closeModal.addEventListener('click',function () {
			whiteMenu.style.display = 'none'
		});
	}

	var md = new MobileDetect(window.navigator.userAgent);

	if (md.userAgent() == "Safari" && md.mobile() == "iPhone" || md.mobile() == "iPad" ) {
		$("html,body").css("overflow", "hidden !important");
	}
   

	// Select в модальном окне
	$(document).click(function() {
		$('.slct').removeClass('active');
		$('.slct_arrow').removeClass('active');
		$('.slct').parent().find('.drop').slideUp("fast");
	});
	$('.slct').click(function() {
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('.drop');
		//  закрываем все открытые
		$('.slct').removeClass('active').parent().find('.drop').slideUp("fast");

		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if (dropBlock.is(':hidden')) {
			dropBlock.slideDown();

			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');
			$(this).siblings(".slct_arrow").addClass('active');


			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop').find('li').click(function() {

				/* Заносим в переменную HTML код элемента
				списка по которому кликнули */
				var selectResult = $(this).html();

				/* Находим наш скрытый инпут и передаем в него
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult);

				/* Передаем значение переменной selectResult в ссылку которая
				открывает наш выпадающий список и удаляем активность */
				$(this).parent().parent().find(".slct").removeClass('active').html(selectResult);
				$(".slct_arrow").removeClass('active');

				/* Скрываем выпадающий блок */
				dropBlock.slideUp();
			});

			/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			$(".slct_arrow").removeClass('active');
			dropBlock.slideUp();
		}

		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});

	// Открываем модальное окно
	$(".modal").click(function(e) {
		e.preventDefault();
		var id = $(this).data('modal');
		var txt = $(this).data('info');
		var title =  $(this).data('title'); // для изменения title в модалке
		var file_name = $(this).data("file_name");
		var trigger = $(this).data("trigger");
		var mail_title = $(this).data("mail_title");
		if(id === "modal-white" ){
			$(".popup[data-modal=" + id + "]").addClass('md-show');
		}
		else {
			$(".popup[data-modal=" + id + "]").toggle("fade", 200).find("form").css('display', 'block');
			$(".popup[data-modal=" + id + "] input[name=form_name]").val(txt);
			// $(".popup[data-modal="+id+"] h2").html(title); // прописать в ссылку data-title="нужный title"}
			$(".popup[data-modal=" + id + "] .title").html(title);
			$(".popup[data-modal=" + id + "] input[name=file]").val(file_name);
			$(".popup[data-modal=" + id + "] input[name=trigger]").val(trigger); $(".popup[data-modal=" + id + "] input[name=mail_title]").val(mail_title);
		}
		if (window.matchMedia("(min-width: 992px)").matches) {
			$("body").css({ "overflow": "hidden", "padding-right": "17px" });
		}
		if (window.matchMedia("(max-width: 992px)").matches){

		   $("body").css({ "overflow": "hidden", "padding-right": "0px" });
		}
	});
	// overlay для закрытия
	$(".overlay").click(function() {
		if(this.parentElement.classList.contains('md-show')){
			this.parentElement.classList.remove('md-show');
		}else {
			$(this).parent().toggle("drop", {direction: "up"}, 200);
		}
		$("body").css({ "overflow": "inherit", "padding-right": "0" });

	});
	// закрываем модальное окно на крестик
	$(".popup .close").click(function(e) {
		e.preventDefault();
		$(this).parents(".popup").hide("drop", { direction: "up" }, 200);
		$("body").css({ "overflow": "inherit", "padding-right": "0" });
	});
	$(".popup .modal-text .fa-close").click(function(){
		$('.pop5.md-content').removeClass('md-show');
		$("body").css({ "overflow": "inherit", "padding-right": "0" });
	});
	//обработчик кнопки на нажатие btn_mnu
	$("#nav-button-label").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('nav-on'); // добавляет класс для анимации самой кнопки
		$(this).next().slideToggle(); // открывает меню main_nav_block, которое было скрыто
		$(this).find('.nav-line').toggleClass('active');
		$(".mnu_dropdown").toggleClass("active");
	});
	// Скрыть элемент при клике за его пределами бутерброд и его выпадающее меню
	$(document).click(function(event) {
		if ($(event.target).closest("#nav-button-label").length)
			return;
		if ($(event.target).closest("[off-canvas]").length)
			return;
		$("#nav-button-label").removeClass("nav-on");
		$("#nav-button-label .nav-line").removeClass("active");

		event.stopPropagation();

	});

	//  Отправка форм
	$('.dm-modal form .drop li').on('click', function() {
		var slcVal = $(this).text();
		var slcInput = $('#select'); // этот самый input с атрибутом name="services"
		slcInput.val(slcVal); // заносим в переменную значение скрытого inputa, которое потом передастся в письмо (по атрибуту name="services")
	});

	$("form:not('#form3')").submit(function() { // перехватываем все при событии отправки
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var error = [];
		form.find('.modal_form_input').each(function() { // пробежим по каждому полю в форме

			if ($(this).val() == '') { // если находим пустое
				$(this).siblings('.modal_input_error').show("fade", 500);
				$('.modal_form_input').animated('swing');
				setTimeout(function () {
					$('.modal_form_input').removeClass('swing');
					$('.modal_form_input').removeClass('animated');
				},500);
				error.push(true); // ошибка
			} else if ($(this).val() !== '') { // если находим не пустое
				$(this).siblings('.modal_input_error').hide("fade", 500);
				error.push(false); // нет ошибки
			}
			$(this).focus(function() {
				$(this).siblings('.modal_input_error').hide("fade", 500)
			});

		});
		form.find('.modal_form_phone').each(function() { // пробежим по каждому полю в форме
			if ($(this).val() == '') { // если пустое
				$('.modal_form_phone').animated('swing');
				setTimeout(function () {
					$('.modal_form_phone').removeClass('swing');
					$('.modal_form_phone').removeClass('animated');
				},500);
				$(this).siblings().show("fade", 500);
				error.push(true); // ошибка
				if ($(this).siblings('.modal_input_error').hasClass('input_error_phone')) {

					$(this).siblings('.modal_input_error').removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
				}
			} else {

				$(this).siblings('.modal_input_error').hide("fade", 500);
				error.push(false); // нет ошибок


			}
			$(this).focus(function() {
				$(this).siblings('.modal_input_error').hide("fade", 500);
			});
		});
		form.find('.modal_form_email').each(function() { // пробежим по каждому полю в форме
			var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9\-]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
			if ($(this).val() == '') { // если пустое
				$('.modal_form_email').animated('swing');
				setTimeout(function () {
					$('.modal_form_email').removeClass('swing');
					$('.modal_form_email').removeClass('animated');
				},500);
				$(this).siblings('.modal_input_error').show("fade", 500);
				error.push(true); // ошибка
				if ($(this).siblings('.modal_input_error').hasClass('input_error_email')) {

					$(this).siblings('.modal_input_error').removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
				}

			} else if ($(this).val() !== '') {
				if ($(this).val().match(pattern)) {
					$(this).siblings('.modal_input_error').hide("fade", 500).removeClass('input_error_email');
					error.push(false); // нет ошибок
				} else {
					$(this).siblings('.modal_input_error').show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
					error.push(true); // ошибка
				}
			}
			$(this).focus(function() {
				$(this).siblings('.modal_input_error').hide("fade", 500);
			});

		});
		var erorr_finish = 0;
		for (var i = 0; i < error.length; i++) {
			if (error[i] == false) {
				erorr_finish = erorr_finish + 1;
			};
			// console.log(error[i]);
		}
		//console.log(erorr_finish);
		var size = error.length - 1;
		if (erorr_finish > size) { // в зависимости от полей которые проверяются (в нашем случае 3 поля)
			var utm_source = $("input[name='utm_source']").val();
			var utm_campaign = $("input[name='utm_campaign']").val();
			var utm_content = $("input[name='utm_content']").val();
			var utm_term = $("input[name='utm_term']").val();
			var country = $("input[name='country_name']").val();
			var data = form.serialize() + "&utm_source=" + utm_source + "&utm_campaign=" + utm_campaign + "&utm_content=" + utm_content + "&utm_term=" + utm_term + "&country_name=" + country;


			$.ajax({ // инициализируем ajax запрос
				type: 'POST', // отправляем в POST формате, можно GET
				url: '../../site/mail', // путь до обработчика, у нас он лежит в той же папке
				dataType: 'json', // ответ ждем в json формате
				data: data, // данные для отправки
				beforeSend: function(data) { // событие до отправки
					form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
					

				},
				success: function(data) { // событие после удачного обращения к серверу и получения ответа
					//-----------------------------для страницы contextual---------------------------
					if( form.find('input[name="form_type_download_contextual"]').val() == 'download') {

						if(country == 'UA'){
							location.href = '/doc/Dogovor-kontekst.docx'
						}
						if(country == 'EN'){
							location.href = '/doc/Dogovor-kontekst.docx'
						}
						else{
							location.href = '/doc/Dogovor-kontekst.docx'
						}
					}
//-----------------------------для страницы internetshops---------------------------
					if( form.find('input[name="form_type_download_internetshops"]').val() == 'download') {
						if(country == 'UA'){
							location.href = '/doc/Chek_list_melfori_dlya_internet_magazina.pdf'
						}
						if(country == 'EN'){
							location.href = '/doc/Chek_list_melfori_dlya_internet_magazina.pdf'
						}
						else{
							location.href = '/doc/Chek_list_melfori_dlya_internet_magazina.pdf'
						}

					}
					if( form.find('input[name="form_type_download_landing"]').val() == 'download') {
						if(country == 'UA'){
							location.href = '/doc/Dogovor_na_razrabotku_veb-sayta.docx'
						}
						if(country == 'EN'){
							location.href = '/doc/Dogovor_na_razrabotku_veb-sayta.docx'
						}
						else{
							location.href = '/doc/Dogovor_na_razrabotku_veb-sayta.docx'
						}

					}
					if( form.find('input[name="form_type_download_companysite"]').val() == 'download') {
						if(country == 'UA'){
							location.href = '/doc/Dogovor_na_razrabotku_veb-sayta.docx'
						}
						if(country == 'EN'){
							location.href = '/doc/Dogovor_na_razrabotku_veb-sayta.docx'
						}
						else{
							location.href = '/doc/Dogovor_na_razrabotku_veb-sayta.docx'
						}

					}

					if( form.find('input[name="form_type_download"]').val() == 'download') {
						if(country == 'UA'){
							location.href = '/img/file/Poryadok_raboty_frontend_razrabotchika.pdf'
						}
						if(country == 'EN'){
							location.href = '/img/file/Poryadok_raboty_frontend_razrabotchika.pdf'
						}
						else{
							location.href = '/img/file/Poryadok_raboty_frontend_razrabotchika.pdf'
						}

					}

					if (data['error']) { // если обработчик вернул ошибку
						alert(data['error']); // покажем её текст
					} else { // если все прошло ок

						if (data['form_type'] == 'modal') {
							$('.dm-modal form').hide();


							$('.dm-modal .close').hide();
							form.trigger('reset');
							$('.dm-modal .success_mail').addClass('active'); //пишем что всё ок
							setTimeout(function() {
								form.parents('.popup').hide("fade", 500);
								$('.dm-modal .success_mail').removeClass('active');
								$('.dm-modal .close').show("fade", 2000);
								$("body").css({ "overflow": "inherit", "padding-right": "0" });
							}, 3000);
						}
						if (data['form_type'] == 'normal') { //надо писать в обычных формах <input type="hidden" name="form_type" value="normal">
							form.trigger('reset');
							$('.dm-modal .success_mail').addClass('active');
							$('.pop5.md-content').removeClass('md-show');
							$('.popup[data-modal=modal-res]').toggle("fade", 500);
							//$("body").css({ "overflow": "hidden", "padding-right": "17px" });
							setTimeout(function() {
								$('.popup[data-modal=modal-res]').hide("fade", 500);
								$('.dm-modal .success_mail').removeClass('active', 500);
								$("body").css({ "overflow": "inherit", "padding-right": "0" });
							}, 3000);
						}
					}
				},
				error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
					alert(xhr.status); // покажем ответ сервера
					alert(thrownError); // и текст ошибки
				},
				complete: function(data) { // событие после любого исхода
					form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
				}

			});
		}
		return false; // вырубаем стандартную отправку формы
	});

	//  Отправка форм с файлом вносим input[type=file]
	var files;
	$('input[type=file]').change(function() {
		files = this.files;
		//alert(files);
	});

	//  Отправка форм с файлом submit
	$("#form3").on('submit', function(e) { // перехватываем все при событии отправки
		e.preventDefault();
		var $data = new FormData(),
			form = $(this),
			error = [],
			$inputs = $("#form3").find('input[type=hidden]'),
			$phone = $("#form3").find('input[name=phone]'),
			$email = $("#form3").find('input[name=email]'),
			$name = $("#form3").find('input[name=name]'),
			$textarea = $("#form3").find('textarea');

		
		$.each(files, function(key, value) {
			if (!this.name.match(/(.txt)|(.pdf)|(.docx)|(.doc)|(.xlsx)$/i)) {
				alert("Неправильный формат тектового файла.");
				return false;
				error.push(true);
			} else if((this.size / 1024).toFixed(0) > 1524) {
				alert("Слишком большой размер.");
				return false;
				error.push(true);

			}
			$data.append(key, value);

		});


		$.each($inputs, function(key, value) {
			$data.append($(this).attr('name'), $(this).val());
		});

		//добавление основных тестовых полей вместо serialize
		$data.append($textarea.attr('name'), $textarea.val());
		$data.append($phone .attr('name'), $phone.val());
		$data.append($email .attr('name'), $email.val());
		$data.append($name .attr('name'), $name.val());

		form.find('.modal_form_input').each(function() { // пробежим по каждому полю в форме

			if ($(this).val() == '') { // если находим пустое
				$(this).siblings('.modal_input_error').show("fade", 500);
				error.push(true); // ошибка
			} else if ($(this).val() !== '') { // если находим не пустое
				$(this).siblings('.modal_input_error').hide("fade", 500)
				error.push(false); // нет ошибки
			}
			$(this).focus(function() {
				$(this).siblings('.modal_input_error').hide("fade", 500)
			});

		});
		form.find('.modal_form_phone').each(function() { // пробежим по каждому полю в форме
			if ($(this).val() == '') { // если пустое
				$(this).siblings().show("fade", 500);
				error.push(true); // ошибка
				if ($(this).siblings('.modal_input_error').hasClass('input_error_phone')) {
					$(this).siblings('.modal_input_error').removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
				}
			} else {

				$(this).siblings('.modal_input_error').hide("fade", 500);
				error.push(false); // нет ошибок


			}
			$(this).focus(function() {
				$(this).siblings('.modal_input_error').hide("fade", 500);
			});
		});
		form.find('.modal_form_email').each(function() { // пробежим по каждому полю в форме
			var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
			if ($(this).val() == '') { // если пустое
				$(this).siblings('.modal_input_error').show("fade", 500);
				error.push(true); // ошибка
				if ($(this).siblings('.modal_input_error').hasClass('input_error_email')) {
					$(this).siblings('.modal_input_error').removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
				}

			} else if ($(this).val() !== '') {
				if ($(this).val().match(pattern)) {
					$(this).siblings('.modal_input_error').hide("fade", 500).removeClass('input_error_email');
					error.push(false); // нет ошибок
				} else {
					$(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
					error.push(true); // ошибка
				}
			}
			$(this).focus(function() {
				$(this).siblings('.modal_input_error').hide("fade", 500);
			});

		});


		if (files === undefined) {
			$('.fileLoad input').val('Файл не выбран!');
			//error.push(true); // ошибка
		}

		var erorr_finish = 0;

		for (var i = 0; i < error.length; i++) {
			if (error[i] == false) {
				erorr_finish = erorr_finish + 1;
			}

			//console.log(error[i]);
		}
		//console.log(erorr_finish);
		var utm_source = $("input[name='utm_source']").val();
		var utm_campaign = $("input[name='utm_campaign']").val();
		var utm_content = $("input[name='utm_content']").val();
		var utm_term = $("input[name='utm_term']").val();
		var country = $("input[name='country_name']").val();
		$data.append('utm_source', utm_source);
		$data.append('utm_campaign', utm_campaign);
		$data.append('utm_content', utm_content);
		$data.append('utm_term', utm_term);
		$data.append('country_name', country);
		var size = error.length - 1;
		if (erorr_finish > size) {
			$.ajax({
				url: '../../site/mail',
				type: 'POST',
				contentType: false,
				processData: false,
				dataType: 'json',
				data: $data,
				beforeSend: function(loading) {
					if(files !== undefined){
						$('.fileLoad input').val('Файл загружается');
					}
				},
				success: function(data) {
					$('.dm-modal .success_mail').addClass('active');
					$('.popup2 .close').hide();
					if(files !== undefined){
						$('.fileLoad input').val('Файл загружен!');
					}
					$('.popup[data-modal=modal-res]').show().delay(2000).fadeOut(
						function() {
							$('.popup[data-modal=modal-res]').hide("fade", 500);
							form.trigger('reset');
							$('.dm-modal .sucess_mail').addClass('active');
							$("#win2 .close").trigger('click');
							$('.popup2 .close').show();
							$('.fileLoad input').val('Выберите файл');
							files = undefined;
					
						}
					);
				}
			});
		}
	});

});
function getCookie(data) {
	var cookieArr = document.cookie.split(';');
	for(var i =0; i < cookieArr.length; i++){
		if (cookieArr[i].indexOf(data) >= 0) {
			return true;
		}
	}
}

function setCookie(data){
	document.cookie = data;
}

if(getCookie('loader')){
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
}else{
	setCookie('loader');
	setTimeout(function () {
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	},3000)
}
