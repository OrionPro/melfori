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
			.from('.section-2 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-2 .about-wrap', 1, {
				x: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-2 .img-wrap', 1, {
				x: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-2 h3', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-2 .decore-scheme-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-2 .decore-scheme-wrap .title-item-decore', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")

			//начало анимации шестеренок
			.from('.section-2 .decore-scheme-wrap .small', 1, {
				y: 20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: -50,
				onComplete: ()=>{
					rotationGear('.decore-scheme-wrap .small span')
				}
			}, "-=0.8")
			.from('.section-2 .decore-scheme-wrap .big', 1, {
				y: -20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: () =>{
					rotationGear('.decore-scheme-wrap .big span', -1)
				}
			}, "-=1")
			//конец анимации шестеренок

			.staggerFrom('.section-2 .decore-scheme-wrap .item', 1, {
				y: 30,
				opacity: 0,
				scaleY: 0.9,
				ease: Power3.easeOut
			},0.3, "-=1")
			.staggerFrom('.unique-form-decore .animation-input', 1, {
				y: 30,
				autoAlpha: 0,
				scaleY: 0.9,
				ease: Power3.easeOut
			},0.3, "-=2.5")
			.from('.decore-scheme-wrap-form p', 1, {
				y: 30,
				opacity: 0,
				scaleY: 0.9,
				ease: Power3.easeOut
			}, "-=1");

		this.tl3
			.from('.section-3 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.from('.yandex-view', 1, {
				x: -30,
				opacity: 0,
				ease: Bounce.easeOut
			}, "-=0.5", "browser-view")
			.add("browser-view", "-=1")
			.from('.google-view', 1, {
				x: 30,
				opacity: 0,
				ease: Bounce.easeOut
			}, "browser-view")
			.from('.section-3 .about-text-wrap', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5")
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
			.staggerFrom('.section-4 .internet-shop-goods-item', 0.5, {
				yPercent: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.3 ,"-=0.5")
			.from('.section-4 .form-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5");

		this.tl5
			.from('.section-5 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.staggerFrom('.description-in-five-steps-item', 0.5, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.3,"-=0.5")
			.from('.section-5 .context-prise-wrap .decore-img', 1, {
				x: -10,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5")
			.from('.section-5 .context-prise-wrap .text', 1, {
				x: 10,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5");

		this.tl6
			.from('.section-6 .title-wrap', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.from('.carousel-wrap', 1, {
				autoAlpha: 0,
				scaleY: 0.5,
				rotate: 5,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.carousel-wrap .carousel-buttons', 1, {
				scaleY: 0.5,
				autoAlpha: 0,
				ease: Power3.easeOut
			}, "-=0.5");

		this.tl7
			.from('.section-7 .title-wrap', 1, {
				y: -30,
				autoAlpha: 0,
				ease: Power3.easeOut
			}, "+=0.5")
			.from('.section-7 p', 1, {
				y: -30,
				autoAlpha: 0,
				ease: Power3.easeOut
			}, "-=0.5")
			.from('.section-7 .phone-button', 1, {
				y: 30,
				autoAlpha: 0,
				ease: Power3.easeOut
			}, "-=0.5");
		this.tl8
			.from('.contextual-rates .title-wrap',1,{
				y: -30,
				autoAlpha: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.rates-menu', 1 ,{
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.rates-table-desk table tr',0.5,{
				y:30,
				opacity: 0,
				skewX:'30deg'
			},0.1,'-=0.5');
		this.tl9
			.from('.section-9 .title-wrap',1,{
				y: -30,
				autoAlpha: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-9 .description-contextual',1,{
				y: 30,
				autoAlpha: 0,
				ease: Power3.easeOut
			},'-=0.5');

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
		if (activeSection('section-7', 800, 900)) {
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
export default ContextualAnimation;