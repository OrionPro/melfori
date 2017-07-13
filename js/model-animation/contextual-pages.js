import {activeSection, getCookie, rotationGear} from '../helper/helper.js';


class ContextualAnimation {
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
			.from('.header-form', 3, {
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
			}, '-=1.7');

		this.tl2
			.from('.section-2 h2', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.from('.section-2 .about-wrap', 1, {
				x: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-2 .img-wrap', 1, {
				x: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=1")
			.from('.section-2 h3', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.7")
			.from('.section-2 .decore-scheme-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.7")
			.from('.section-2 .decore-scheme-wrap .title-item-decore', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.7")

			//начало анимации шестеренок
			.from('.section-2 .decore-scheme-wrap .small', 1, {
				y: 20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: -50,
				onComplete: ()=>{
					rotationGear('.decore-scheme-wrap .small span')
				}
			}, "-=0.5")
			.from('.section-2 .decore-scheme-wrap .big', 1, {
				y: -20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: () =>{
					rotationGear('.decore-scheme-wrap .big span', -1)
				}
			}, "-=0.7")
			//конец анимации шестеренок

			.staggerFrom('.section-2 .decore-scheme-wrap .item', 1, {
				y: 30,
				opacity: 0,
				scaleY: 0.9,
				ease: Power3.easeOut
			},0.3, "-=1");

		this.tl3
			.from('.section-3 h2', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.from($('.section-3 .img-wrap:even'), 1, {
				x: -30,
				opacity: 0,
				ease: Bounce.easeOut
			}, "-=0.5")
			.from($('.section-3 .img-wrap:odd'), 1, {
				x: 30,
				opacity: 0,
				ease: Bounce.easeOut
			}, "-=1")
			.from('.section-3 .about-text-wrap', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=1")
			.from('.section-3 .contextual-google-yandex-form', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5");

		this.tl4
			.from('.section-4 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.staggerFrom('.section-4 .internet-shop-goods-item', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.03 ,"-=0.5")
			.from('.section-4 .form-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.7");

		this.tl5
			.from('.section-5 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			//начало анимации шестеренок
			.from('.section-5 .gear-1', 1, {
				y: 20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: -50,
				onComplete: ()=>{
					rotationGear('.section-5 .gear-1')
				}
			}, "-=0.5")
			.from('.section-5 .gear-2', 1, {
				y: -20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: () =>{
					rotationGear('.section-5 .gear-2', -1)
				}
			}, "-=0.7")
			// конец анимации шестеренок
			.staggerFrom('.section-5 .content ul li', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.5,"-=0.5")
			.staggerFrom('.section-5 .content ul .arrow', 1, {
				height: 0,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.5,"-=2.7")
			.staggerFrom('.section-5 .content ul .arrow', 0.5, {
				width: 0
			}, 0.5,"-=2.5")
			.from('.section-5 .context-prise-wrap .decore-img', 1, {
				x: -10,
				opacity: 0,
				ease: Power3.easeOut
			},"-=1.5")
			.from('.section-5 .context-prise-wrap .text', 1, {
				x: 10,
				opacity: 0,
				ease: Power3.easeOut
			},"-=1.3");

		this.tl6
			.from('.section-6 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.from('.section-6 .carousel_wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-6 .carousel_txt_wrap ', 1, {
				y: 30,
				ease: Power3.easeOut
			}, "-=1")
			.from('.section-6 .customNextBtn', 2.5, {
				x: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-6 .customPrevBtn', 2.5, {
				x: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=2.5");
		this.tl7
			.from('.section-7 h2', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.from('.section-7 p', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-7 .unique_challenge_form', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=1")
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
	}
}
export default ContextualAnimation;