import {activeSection, getCookie} from '../helper/helper.js';



class ContextualAnimation{
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
			.from('.header_top', 3, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
		},this.headerTime)
			.from('.header_title', 3,{
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1.7')
			.from('.header_bot_txt', 3,{
				y: 50,
				opacity: 0,
				ease: Power3.easeOut,
				onComplete:  () => {
					this.arrow
						.from('.header_bot_txt .fa-angle-down', 2, {
							ease: Power3.easeOut,
							y: -30 })
						.to('.header_bot_txt .fa-angle-down', 0.5, {
							y: -30
						});

					this.arrow.resume();
				}
			},'-=1.7');

		
	}

	start(){


		if (activeSection('section-1')) {
			this.tl1.play();

		}

	}
}
export default ContextualAnimation;