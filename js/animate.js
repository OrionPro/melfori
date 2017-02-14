
// подключение animate.js


class Animation{


	constructor(){


		this.tl1 = new TimelineMax();
		this.tl1.pause();
		
	}

	description(){
		this.tl1.from('.header_title', 0.7, {
			y: -100,
			opacity: 0,
			ease: Power4.easeOut
		},'+=1');
	}


	play(){
		if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 900) {
			this.tl1.resume();
		}
	}

	hovers(){

		TweenMax.set('.who_are_we_item_text',{scaleX:0});
		TweenMax.set('.who_are_we_item_img img',{scaleX:1});
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
}


var anim = new Animation;

$(window).scroll(function () {
	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
	}
});

$(window).ready(function() {
	anim.hovers();


	if (document.documentElement.clientWidth >= 1200) {
		anim.description();
		anim.play();
	}



});