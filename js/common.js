
// подключение common.js

$(document).ready( function() {
	//  Инициальзация маски в форме
	$(".modal_form_phone").mask("+7(999) 999-99-99");
	//  Стилизация скролла
	$(".couple_of_words_txt").mCustomScrollbar({
		theme:"my-theme"
	});

	if( $(".modal_form_phone").attr('class') !== undefined && $(".modal_form_phone").attr('class').match(/class1|class2|class3|class4|class5/) ) {
		console.log("match");
	}
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
    $(".scroll_to").on("click", function(e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $("#" + anchor.data('scroll')).offset().top
        }, 500);
        return false;
    });

    //  Активация слайдера
    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     items: 1,
    //     dots: true
    // });

    // Кастомные кнопки управления слайдером
    // var owl = $('.owl-carousel');
    // owl.owlCarousel();
    // // Go to the next item
    // $('.customNextBtn').click(function() {
    //     owl.trigger('next.owl.carousel', [700]);
    // });
    // // Go to the previous item
    // $('.customPrevBtn').click(function() {
    //     // With optional speed parameter
    //     // Parameters has to be in square bracket '[]'
    //     owl.trigger('prev.owl.carousel', [700]);
    // });  
    

});

$(window).resize(function() {

});

$(window).scroll(function() {
    
});

