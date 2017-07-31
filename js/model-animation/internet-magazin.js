import {activeSection, getCookie} from '../helper/helper.js';

class InternetShopsAnimation{
	constructor(){

		if(getCookie('loader')){
			this.headerTime = '+=1';
		}else{
			this.headerTime = '+=3';
		}

		//time line статический
		this.tl1 = new TimelineMax();
		this.tl2 = new TimelineMax();
		this.tl3 = new TimelineMax();
		this.tl4 = new TimelineMax();
		this.tl5 = new TimelineMax();
		this.tl6 = new TimelineMax();
		this.tl7 = new TimelineMax();
		this.tl8 = new TimelineMax();
		this.tl9 = new TimelineMax();
		this.tl10 = new TimelineMax();
		this.tl11 = new TimelineMax();

		//time line динамический
		this.arrow = new TimelineMax();

		//остановка time lines
		this.tl1.pause();
		this.tl2.pause();
		this.tl3.pause();
		this.tl4.pause();
		this.tl5.pause();
		this.tl6.pause();
		this.tl7.pause();
		this.tl8.pause();
		this.tl9.pause();
		this.tl10.pause();
		this.tl11.pause();

	}
	description() {
		//HEADER
		this.tl1
			.from('.header_top', 1.8, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			}, this.headerTime)
			.from('.header_title', 1.8, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=1')
			.from('.header-form', 1.8, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut,
				onComplete: () => {
					this.arrow
						.from('.header_bot_txt .fa-angle-down', 2, {
							ease: Power3.easeOut,
							y: -30
						})
						.to('.header_bot_txt .fa-angle-down', 0.5, {
							y: -30
						});
					this.arrow.repeat(Infinity);
				}
			}, '-=1')
			.from('.anchors', 1,{
				opacity: 0
			}, "-=1");
			this.tl2
			.from('.section-2 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.section-2 .title_block_left_decor', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.section-2 .title-wrap-h3', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.staggerFrom('.internet-shop-goods-item', 1, {
				yPercent : -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.2,"-=0.7")
			.from('.form-title-unique-wrap .form-wrap .item-title', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.form-title-unique-wrap .form-wrap .unique_challenge_form', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5');
			this.tl3
			.from('.section-3 .title-wrap h2', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.section-3 .title-wrap p', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.section-3 .video-wrap', 1, {
				scale: 0,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.section-3 input', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5');
			this.tl4
			.from('.section-4 .title-wrap h2', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.section-4 .title-wrap p', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.content  .gear-wrap .gear-1',1,{
				y:	20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: -50,
				onComplete: ()=>{
					rotationGear('.content .gear-wrap .gear-1')
				}
			}, '-=1.5')
			.from('.content  .gear-wrap .gear-2',1,{
				y: -20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: ()=>{
					rotationGear('.content  .gear-wrap .gear-2', -1)
				}
			},'-=1.5')
			.staggerFrom('.content ul li aside',1,{
				x : 30,
				opacity: 0,
				ease:  Power3.easeOut,
				},0.4,'-=0.7')
			.staggerFrom('.content ul li  img',1,{
				x : -30,
				opacity: 0,
				ease:  Power3.easeOut,
				},0.4,'-=2.7')
			.staggerFrom('.content ul li .arrow',1,{
					height: 0,
					opacity: 0,
					ease:  Power3.easeOut,
				},0.4,'-=2.7')
			.staggerFrom('.content ul li input',0.5,{
				yPercent: 30,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease:  Power3.easeOut,
				},0.4,'-=2.7')
			.from('.content ul li  a', 0.5, {
				yPercent: 30,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease: Power3.easeOut
			}, '-=2')
			.from('.content .addition-wrap p', 0.5, {
				y: 30,
				opacity: 0,
				scale: 0.95,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.content .addition-wrap a', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5');
			this.tl5
			.from('.section-5 h2',0.8, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.5')
			.from('.section-5 p', 0.8, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.section-5 .items-wrap a',1,{
				xPercent: 30,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease:  Power3.easeOut,
			},0.3,'-=0.7')
			.staggerFrom('.section-5 .items-wrap ul',1,{
				xPercent: -30,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease:  Power3.easeOut,
			},0.3,'-=1.7')
			.from('.section-5 .animation-button', 0.8, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5');
			this.tl6
				.from('.section-6 .title-wrap h2', 1, {
					y: -30,
					opacity: 0,
					ease: Power3.easeOut
				},'-=0.5')
				.from('.section-6 .title-wrap p', 1, {
					y: -30,
					opacity: 0,
					ease: Power3.easeOut
				},'-=0.5')
				.from('.section-6 .unique_challenge_form aside p', 1, {
					y: 30,
					opacity: 0,
					ease: Power3.easeOut
				},'-=0.5')
				.from('.section-6 .unique_challenge_form form', 1, {
					y: 30,
					opacity: 0,
					ease: Power3.easeOut
				},'-=0.5');
}

	start(){
		if (activeSection('section-1')) {
			this.tl1.play();
		}
		if (activeSection('section-2',300,500)) {
			this.tl2.play();
		}
		if (activeSection('section-3',300,500)) {
			this.tl3.play();
		}
		if (activeSection('section-4',300,500)) {
			this.tl4.play();
		}
		if (activeSection('section-5',300,500)) {
			this.tl5.play();
		}
		if (activeSection('section-6',300,500)) {
			this.tl6.play();
		}

	}
}
export default InternetShopsAnimation;