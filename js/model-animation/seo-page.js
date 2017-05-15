import {activeSection, getCookie, rotationGear} from '../helper/helper.js';

class SeoPageAnimation{
	constructor(){


		if(getCookie('loader')){
			this.headerTime = '+=1';
		}else{
			this.headerTime = '+=3';
		}
		
		
		//time line статический статический
		this.tl1 = new TimelineMax();
		this.tl2 = new TimelineMax();
		this.tl3 = new TimelineMax();
		this.tl4 = new TimelineMax();
		this.tl5 = new TimelineMax();
		this.tl6 = new TimelineMax();
		this.tl7 = new TimelineMax();
		this.tl8 = new TimelineMax();
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

	}
	description() {
		//HEADER
		this.tl1
			.from('.header_top', 3, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			}, this.headerTime)
			.from('.header_title', 3, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=1.7')
			.from('.header_bot_txt', 3, {
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

					this.arrow.resume();
				}
			}, '-=1.7');


		this.tl2
			.from('.hotClients_per_hour', 1, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5")
			.from(".about-wrap", 1,{
				x: -100,
				opacity: 0,
				ease: Bounce.easeOut
			},"-=0.1")
			.from(".img-wrap", 1,{
				x: 100,
				opacity: 0,
				ease: Bounce.easeOut
			},'+=0.1');

		this.tl3
			.from('.difference_betwen', 3,{
				y: 50,
				opacity: 0,
				ease: Power3.linear
			}, '-=1')
			.from(".context_wrap", 1,{
				x: -300,
				opacity: 0,
				ease: Power3.linear

			},'-=1')
			.from('.seo_wrap', 1,{
				x: 300,
				opacity: 0,
				ease: Power3.linear
			},'-=0.1')
			.from('.content-wrap', 1,{
				scale: 1.2,
				opacity: 0,
				ease: Power3.linear
			},'-=0.1')
			.from('.content-wrap  h3', 1,{
				scale: 0.8,
				opacity: 0,
				ease: Power3.linear
			},'-=0.3');
		this.tl4
			.from('.ten_recommendations h2', 1,{
				y: 50,
				opacity: 0,
				ease: Power3.linear
				})
			.from('.ten_recommendations p', 1,{
				y: 50,
				opacity: 0,
				ease: Power3.linear
				}, '-=0.3')
			.from('.animation_form_address', 1,{
				x: 30,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease: Power3.easeOut
			},'-=0.7')
			.from('.animation_form_email', 1,{
				x: 30,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease: Power3.easeOut
			}, '-=0.7')
			.from('.animation_seo_class', 1,{
				x: -50,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease: Power3.easeOut
			},'-=0.7');
		this.tl5
			.from('.contextual-steps-section .title-wrap h2',1,{
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
		},	"-=0.5")
			.from('.decor-img',1,{
				y: 50,
				opacity: 0,
				ease: Power3.easeOut

			},'-=0.5')
			.from('.arrow', 1,{
				x: 50,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5")
			.from('.center-text', 2,{
				x: -100,
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
			}, '-=0.5')
			.from('.gear-2',1,{
				y: -20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: ()=>{
					rotationGear('.gear-2', -1)
				}
			},'-=0.7');
		
		this.tl6
			.from('.result_of_action',2,{
				x: 50,
				opacity: 0,
				ease: Bounce.easeOut
			}, '-=0.5');

	}

	start(){
	if(activeSection("contextual-header")){
		this.tl1.play();
	}
	if(activeSection('contextual-not-pay-section')){
		this.tl2.play();
	}
	if(activeSection('unlike_contextual_of_advertising')){
		this.tl3.play();
	}
	if(activeSection('ten_recommendations')){
		this.tl4.play();
	}
	if(activeSection('contextual-steps-section')){
		this.tl5.play();
	}
	if(activeSection('internet-shop-goods')){
		this.tl6.play();
	}

}

}
export default SeoPageAnimation;