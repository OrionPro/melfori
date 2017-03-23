
// Подключение Helpers function
import {activePages} from './helper/helper.js';

// подключение анимаций для страниц
import IndexPageAnimation  from './model-animation/index-pages.js';
import AboutUsAnimation  from './model-animation/about-us-pages.js';
import ContextualAnimation  from './model-animation/contextual-pages.js';

// Запуск необходимой анимации
class Animation {
	constructor(){
		this.IndexPageAnimation = new IndexPageAnimation();
		this.AboutUsAnimation = new AboutUsAnimation();
		this.ContextualAnimation = new ContextualAnimation();


		// Инициализация настроек анимаций
		if(activePages('main-pages')){
			this.IndexPageAnimation.description();
		}
		if(activePages('about-us-pages')){
			this.AboutUsAnimation.description();
		}
		if(activePages('contextual-pages')){
			this.ContextualAnimation.description();
		}
	}
	
	play(){
		//	Запуск анимация
		if(activePages('main-pages')){
			this.IndexPageAnimation.start();
		}
		if(activePages('about-us-pages')){
			this.AboutUsAnimation.start();
		}
		if(activePages('contextual-pages')){
			this.ContextualAnimation.start();
		}
	}
}


function hovers(){


	TweenMax.set('.who_are_we_item_text', {scaleX:0});
	TweenMax.set('.who_are_we_item_img img', {scaleX:1});
	$('.who_are_we_item').hover(function() {


		let image = $(this).find('.who_are_we_item_img img');
		let text = $(this).find('.who_are_we_item_text');

		let inM =  new TimelineMax();


		inM.to(image, 0.3, {
			scaleX: 0
		});
		inM.to(text, 0.3, {
			scaleX: 1
		},"-=0.1")


	}, function() {


		let image = $(this).find('.who_are_we_item_img img');
		let text = $(this).find('.who_are_we_item_text');

		let outM =  new TimelineMax();


		outM.add('lable','+=0.20').to(text, 0.3, {
			scaleX: 0
		},"lable");
		outM.add('lable','+=0.05').to(image, 0.3, {
			scaleX: 1
		},"lable");

	})
}


var anim = new Animation;

$(window).scroll(function () {
	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
	}
});

$(window).ready(function() {
	hovers();


	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
	}



});