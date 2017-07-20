import {activeSection, getCookie} from '../helper/helper.js';



class DesignPagesAnimation{
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

	description(){
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
			}, '-=1');
		this.tl2
			.from('.about-us-design-section h2',1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.content-addition-wrap .text-wrap .title',1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.content-addition-wrap .text-wrap  ul li',0.5,{
				opacity: 0,
				y:30,
				ease: Power3.easeOut
			},0.2,'-=0.5')
			.from('.content-addition-wrap .decore-img',1,{
				h: 0,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.download-price-wrap h3',1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.download-price-wrap .clearfix .item img',0.5,{
				opacity: 0,
				x:-50,
				ease: Power3.easeOut
			},0.2,'-=0.5')
			.staggerFrom('.download-price-wrap .clearfix .item .text',0.5,{
				opacity: 0,
				x: 50,
				ease: Power3.easeOut
			},0.2,'-=0.9')
			.from('.download-price-wrap .button',1,{
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5');
		this.tl3
			.from('.section-3 .title-wrap h2',1,{
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.section-3 .item .img-wrap',0.5,{
				opacity: 0,
				xPercent : -50,
				ease: Power3.easeOut
			},0.2,'-=0.5')
			.staggerFrom('.section-3 .item .content',0.5,{
					opacity: 0,
					xPercent : 50,
					ease: Power3.easeOut
				},0.2,'-=0.9');
			this.tl4
			.from('.section-4 .title-wrap', 0.5,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.firstline .center', 0.5,{
				rotation: 50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.firstline .wrap',0.5,{
				opacity: 0,
				xPercent : 50,
				ease: Power3.easeOut
			},0.5,'-=0.6')
			.from('.secondline .center', 0.5,{
				rotation: 50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.secondline .wrap',0.5,{
				opacity: 0,
				xPercent : -50,
				ease: Power3.easeOut
			},0.5,'-=0.9')
			.from('.thirdline .center', 0.5,{
				rotation: -50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.thirdline .wrap',0.5,{
				opacity: 0,
				xPercent : 50,
				ease: Power3.easeOut
			},0.5,'-=1.2')
			.from('.fourthline .center', 0.5,{
				rotation: 50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.fourthline .wrap',0.5,{
				opacity: 0,
				xPercent : -50,
				ease: Power3.easeOut
			},0.5,'-=1.5');
			this.tl5
			.from('.section-5 h2', 0.5,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-5 p', 0.5,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-5 unique_challenge_form', 0.5,{
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.gear-1',1,{
					y:	20,
					opacity: 0,
					ease: Bounce.easeOut,
					rotation: -50,
					onComplete: ()=>{
						rotationGear('.gear-1')

					}
				}, '-=1.5')
					.from('.gear-2',1,{
						y: -20,
						opacity: 0,
						ease: Bounce.easeOut,
						rotation: 50,
						onComplete: ()=>{
							rotationGear('.gear-2', -1)
						}
					},'-=1.5');

	}




	start(){
		if (activeSection('section-1')) {
			this.tl1.play();
		}
		if (activeSection('section-2', 300, 500)) {
			this.tl2.play();
		}
		if (activeSection('section-3', 300, 500)) {
			this.tl3.play();
		}
		if (activeSection('section-4', 300, 500)) {
			this.tl4.play();
		}
		if (activeSection('section-5', 300, 500)) {
			this.tl5.play();
		}
	}
}
export default DesignPagesAnimation;