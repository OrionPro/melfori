import {activeSection, getCookie, rotationGear} from '../helper/helper.js';


class SmmAnimation {
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
			.from('.anchors', 1, {
				opacity: 0
			}, "-=1");
		this.tl2
			.from('.section-2 .title-wrap h2', 1.8, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			}, '+=0.2')
			.staggerFrom('.smm-steps-section .social-wrap .social-item', 0.5, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.2, "-=1")
			.from('.section-2 .item-title h3', 1, {
				x: 50,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=0.6')
			.from('.smm-steps-section .aducation', 1, {
				y: -50,
				opacity: 0,
				ease: Power3.easeOut
			}, '+=0.6')
			.from('.smm-steps-section .item-title p', 1, {
				x: 50,
				opacity: 0,
				ease: Power3.easeOut
			}, '-=2')
			.staggerFrom('.section-2 .content ul li', 0.7, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.3, "-=1.6")
			.staggerFrom('.section-2 .content ul .arrow', 1, {
				height: 0,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.5, "-=0.5")
			.staggerFrom('.section-2 .content ul .arrow', 0.5, {
				width: 0
			}, 0.5, "-=0.5");
		this.tl3
			.from('.section-3 h2', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.4)
			.staggerFrom('.section-3 .social-item', 0.7, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.2, "-=0.5")
			.from('.section-3 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-3 .decore-scheme-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-3 .decore-scheme-wrap .title-item-decore', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")

			//начало анимации шестеренок
			.from('.section-3 .decore-scheme-wrap .small', 1, {
				y: 20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: -50,
				onComplete: () => {
					rotationGear('.decore-scheme-wrap .small span')
				}
			}, "-=0.8", "animation-input")
			.from('.section-3 .decore-scheme-wrap .big', 1, {
				y: -20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: () => {
					rotationGear('.decore-scheme-wrap .big span', -1)
				}
			}, "-=1", "animation-input")
			//конец анимации шестеренок

			.staggerFrom('.section-3 .decore-scheme-wrap .item', 1, {
				y: 30,
				opacity: 0,
				scaleY: 0.9,
				ease: Power3.easeOut
			}, 0.3, "-=1")
			.add("animation-input", "-=2.3")
			.staggerFrom('.section-3 .animation-input input', 0.6, {
				y: 30,
				autoAlpha: 0,
				scaleY: 1.4,
				ease: Power0.easeOut
			}, 0.2, "animation-input")
			.from('.decore-scheme-wrap-form p', 1, {
				y: 30,
				opacity: 0,
				scaleY: 0.9,
				ease: Power3.easeOut
			}, "-=1", "animation-input");

		this.tl4
			.from('.section-4 h2', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.from('.section-4 p', 1, {
				x: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-4 form', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5");
		this.tl5
			.from('.section-5 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.staggerFrom('.section-5 .internet-shop-goods-item', 0.5, {
				yPercent: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.3, "-=0.5")
			.from('.section-5 .form-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-5 .aducation', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5");

		this.tl6
			.from('.section-6 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.4")
			.from('.section-6 .item p', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.6")
			.from('.smm_bg', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.4")
			.staggerFrom('.smm_img1', 0.5, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.2, "-=1")
			.staggerFrom('.smm_img2', 0.5, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.2, "-=1")
			.from('.section-6 .warning-wrap .content', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.6")
			.from('.section-6 .warning-wrap .content img', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.8")
			.from('.section-6 .warning-wrap .content h3', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=1")
			.from('.section-6 .warning-wrap .content p', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=1.2");
		this.tl7
			.from('.section-7 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.4")
			.from('.section-7 p.title_slide', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.6")
			.from('.section-7 .carousel_wrap ', 1, {
				scaleY: 0.8,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=1");
		this.tl8
			.from('.section-8 .smm-rates-title', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.4")
			.from('.section-8 .smm-rates-table', 1, {
				scaleY: 0.8,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.6");
		this.tl9
			.from('.section-9 .contextual-form-section_wrap-title', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.4")
			.from('.section-9 p', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.7")
			.from('.section-9 .phone-button', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.7");
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
		if (activeSection('section-9', 300, 500)) {
			this.tl9.play();
		}
	}
}

export default SmmAnimation;