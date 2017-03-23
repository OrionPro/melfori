import {activeSection, getCookie} from '../helper/helper.js';



class AboutUsAnimation{
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

		//	section 2
		this.tl2
			.from('.section-2 h2', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5")
			.from('.section-2 .title_block_left_decor ', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5")
			.staggerFrom('.section-2 .who_are_we_items .who_are_we_item ', 2,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.02,"-=0.5")
			.from('.section-2 .who_are_we_bottom_title ', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5");

		// section 3
		this.tl3
			.from('.section-3 .title-wrap', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5")
			.from('.section-3 .img-container', 1,{
				y: -30,
				opacity: 0,
				scale: 0.95,
				rotation: 3,
				ease: Power3.easeOut
			},"-=0.5");

		// section 4
		this.tl4
			.from('.section-4 .title-wrap', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5")
			.from('.section-4 .map-container ', 1,{
				x: -30,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease: Bounce.easeOut
			},"-=0.5")
			.from('.section-4 .contacts ', 1,{
				x: 50,
				opacity: 0,
				ease: Bounce.easeOut
			},"-=0.7");

		// section 5
		this.tl5
			.from('.section-5 .title-wrap', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5")
			.from('.section-5 .unique_challenge_form ', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5")
			.from('.section-5 .social-links-container', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5")
			.staggerFrom('.section-5 .social-links-container li',2,{
				x: 50,
				y: 10,
				opacity: 0,
				ease: Elastic.easeOut.config(1, 0.3)
			},0.1,'-=0.5');
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
export default AboutUsAnimation;