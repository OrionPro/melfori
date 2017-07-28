import {activeSection, getCookie, rotationGear} from '../helper/helper.js';


class LandingPage {
	constructor() {
		if (getCookie('loader')) {
			this.headerTime = '+=1';
		} else {
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
		this.tl12 = new TimelineMax();

		//time line динамический
		this.arrow = new TimelineMax();
		this.customNextBtn = new TimelineMax();
		this.customPrevBtn = new TimelineMax();

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
		this.tl12.pause();
	}

	description() {
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
			.from('.section-2 .title-wrap', 1, {
			y: -30,
			opacity: 0,
			ease: Power3.easeOut
		},'-=0.5')
			.from('.section-2 .title_block_left_decor .title_block_left_decor_img', 1, {
				x: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.section-2 .title_block_left_decor p', 0.3, {
				x: 30,
				opacity: 0,
				ease: Power3.easeOut
			},0.3,'-=0.5')
			.from('.section-2 .title-wrap-h3', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.section-2 .internet-shop-goods-wrap .langing-page-doing-item ', 0.3, {
				x: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.3,'-=0.5')
			.from('.section-2 .aside-container', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'+=0.1');
		this.tl3
			.from('.section-3 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-3 .title_block_left_decor .title_block_left_decor_img', 1, {
				x: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.section-3 .title_block_left_decor p', 0.3, {
				x: 30,
				opacity: 0,
				ease: Power3.easeOut
			},0.3,'-=0.5')
			.from('.section-3 .more-content .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1')
			.from('.section-3 label', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-3 .animation-div', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5');
		this.tl4
			.from('.section-4 .title-wrap', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-4 .content .text-wrap h3', 1, {
			y: -30,
			opacity: 0,
			ease: Power3.easeOut
			},'-=0.5')
			.from('#g7385', 0.5, {
				y: -30,
				opacity: 0,
				scaleY: 0.5,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-4 .content .text-wrap aside', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#path4171', 0.5, {
				opacity: 0,
				scaleY: 1.5,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-4 .content .text-wrap .decor-bottom-border', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4179', 0.5, {
				opacity: 0,
				scaleY: 1.5,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#g6735', 0.5, {
				opacity: 0,
				scaleY: 0.5,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#g6710', 0.5, {
				opacity: 0,
				scaleY: 1.5,
				ease: Power3.easeOut
			},'-=1')
			.from('#path4173', 0.5, {
				opacity: 0,
				scaleY: 0.1,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#g4225', 0.5, {
				opacity: 0,
				scaleY: 0.1,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4185', 0.5, {
				opacity: 0,
				y: -20,
				ease: Power3.easeOut
			},'-=1')
			.from('#rect4183', 0.5, {
				opacity: 0,
				y: -20,
				ease: Power3.easeOut
			},'-=1')
			.from('#path4181', 0.5, {
				opacity: 0,
				y: -20,
				ease: Power3.easeOut
			},'-=1')
			.from('#path4165', 1, {
				opacity: 0,
				scaleY: 0.1,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#path4159', 0.5, {
				opacity: 0,
				y: -20,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#path4169', 0.5, {
				opacity: 0,
				scaleY: 0.1,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#path4147', 0.5, {
				opacity: 0,
				x: 30,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#path4167', 0.5, {
				opacity: 0,
				scaleY: 0.1,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#path4153', 0.5, {
				opacity: 0,
				y: 30,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#path4163', 0.5, {
				opacity: 0,
				scaleY: 0.1,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#path4141', 0.5, {
				opacity: 0,
				x: -30,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#g5276', 1, {
				opacity: 0,
				y: 30,
				x: 30,
				rotation: 360,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#g5093', 1, {
				opacity: 0,
				width: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#g5081', 0.5, {
				opacity: 0,
				x: - 30,
				scaleX: 0.9,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4161', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4145', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4157', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4149', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4147', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4159', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4151', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4139', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4155', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('#rect4143', 0.1, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5');
		this.tl5
			.from('.section-5 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-5 .form-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-5 .form_frame', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5');
		this.tl6
			.from('.section-6 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-6 .gear-1', 1, {
				y: 20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: -50,
				onComplete: ()=>{
					rotationGear('.section-6 .gear-1')
				}
			}, "-=0.5")
			.from('.section-6 .gear-2', 1, {
				y: -20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: () =>{
					rotationGear('.section-6 .gear-2', -1)
				}
			}, "-=0.5")
			.from('.section-6 .video-wrap', 1, {
				x: 50,
				y: -50,
				rotation: 360,
				opacity: 0,
				scale: 0.3,
				ease: Power3.easeOut
			},'-=1')
			.staggerFrom('.section-6 .content ul li', 0.5, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.3,"-=0.5")
			.staggerFrom('.section-6 .content ul .arrow', 0.5, {
				height: 0,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.3,"-=2.7")
			.from('.section-6 .form-container ', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-6 .form-container #form ', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5');
		this.tl7
			.from('.section-7 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
		.staggerFrom('.section-7 .clearfix .animation-item', 0.5, {
				xPercent: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.5,"-=0.5")
			.from('.section-7 .animation-button', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5');
		this.tl8
			.from('.section-8 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.section-8 .title-wrap-p', 0.5, {
				yPercent: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.5,"-=0.5")
			.from('.section-8 .texarea-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-8 .modal_form_input_wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-8 .animation-input', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
	}


	start() {
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
		if (activeSection('section-6', 300, 500)) {
			this.tl6.play();
		}
		if (activeSection('section-7', 300, 500)) {
			this.tl7.play();
		}
		if (activeSection('section-8', 300, 500)) {
			this.tl8.play();
		}
	}
}
export default LandingPage;