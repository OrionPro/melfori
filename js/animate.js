// Подключение Helpers function
import {activePages} from './helper/helper.js';

// подключение анимаций для страниц
import IndexPageAnimation  from './model-animation/index-pages.js';
import AboutUsAnimation  from './model-animation/about-us-pages.js';
import ContextualAnimation  from './model-animation/contextual-pages.js';
import DesignPagesAnimation  from './model-animation/design-pages.js';
import SeoPageAnimation from './model-animation/seo-page.js';
import ReviewPageAnimation from './model-animation/reviews.js';
import InternetShopsAnimation from './model-animation/internet-magazin.js';
import AdvancmentSmm from './model-animation/advancment-smm.js';
// Запуск необходимой анимации
class Animation {

	constructor() {
		this.IndexPageAnimation = new IndexPageAnimation();
		this.AboutUsAnimation = new AboutUsAnimation();
		this.ContextualAnimation = new ContextualAnimation();
		this.DesignPagesAnimation = new DesignPagesAnimation();
		this.SeoPageAnimation = new SeoPageAnimation();
		this.ReviewPageAnimation = new ReviewPageAnimation();
		this.InternetShopsAnimation = new InternetShopsAnimation();
		this.AdvancmentSmm = new AdvancmentSmm();
		//	Анимации для всех страниц

	}

	initialization() {
// Инициализация настроек анимаций
		if (activePages('main-pages')) {
			this.IndexPageAnimation.description();
		}
		if (activePages('about-us-pages')) {
			this.AboutUsAnimation.description();
		}
		if (activePages('contextual-pages')) {
			this.ContextualAnimation.description();

		}
		if (activePages('design-pages')) {
			this.DesignPagesAnimation.description();
		}
		if (activePages('main-seo-pages')) {
			this.SeoPageAnimation.description();
		}
		if (activePages('reviews-page')) {
			this.ReviewPageAnimation.description()
		}
		if (activePages('internet-shop-pages')) {
			this.InternetShopsAnimation.description()
		}
		if (activePages('advancment-smm')) {
			this.AdvancmentSmm.description()
		}
	}

	play() {
		//	Запуск анимация
		if (activePages('main-pages')) {
			this.IndexPageAnimation.start();
		}
		if (activePages('about-us-pages')) {
			this.AboutUsAnimation.start();
		}
		if (activePages('contextual-pages')) {
			this.ContextualAnimation.start();
		}
		if (activePages('design-pages')) {
			this.DesignPagesAnimation.start();
		}
		if (activePages('main-seo-pages')) {
			this.SeoPageAnimation.start();
		}
		if (activePages('review')) {
			this.ReviewPageAnimation.start()
		}
		if (activePages('internet-shop-pages')) {
			this.InternetShopsAnimation.start()
		}
		if (activePages('advancment-smm')) {
			this.AdvancmentSmm.start()
		}
	}
}

function hovers() {

	TweenMax.set('.who_are_we_item_text', {scaleX: 0});
	TweenMax.set('.who_are_we_item_img img', {scaleX: 1});

	$('.who_are_we_item').hover(function () {

		let image = $(this).find('.who_are_we_item_img img');
		let text = $(this).find('.who_are_we_item_text');

		let inM = new TimelineMax();

		inM.to(image, 0.3, {
			scaleX: 0
		});
		inM.to(text, 0.3, {
			scaleX: 1
		}, "-=0.1")


	}, function () {

		let image = $(this).find('.who_are_we_item_img img');
		let text = $(this).find('.who_are_we_item_text');

		let outM = new TimelineMax();

		outM.add('lable', '+=0.20').to(text, 0.3, {
			scaleX: 0
		}, "lable");
		outM.add('lable', '+=0.05').to(image, 0.3, {
			scaleX: 1
		}, "lable");


	})
}


var anim = new Animation;

$(window).scroll(function () {
	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
	}
});

$(window).ready(function () {
	hovers();


	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
		anim.initialization();
	}


});