import {activeSection, getCookie} from '../helper/helper.js';



class AdvancmentSmm{
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
			.from('.section-2 h2', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.section-2 .iconSocial .imgWraper',0.5,{
				xPercent: -30,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease:  Power3.easeOut,
			},0.3,'-=0.7')
			.staggerFrom('.section-2 .iconSocial p',0.5,{
				xPercent: 30,
				opacity: 0,
				scale: 0.95,
				rotation: 5,
				ease:  Power3.easeOut,
			},0.3,'-=1.7');
		this.tl3
			.from('.section-3 h2', 1, {
				y: -50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-3 .carousel_wrap', 1, {
				scale:0,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5');
		this.tl4
			.from('.section-4 h2', 1, {
				y: -50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			//начало анимации шестеренок
			.from('.section-4 .gear-1', 1, {
				y: 20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: -50,
				onComplete: ()=>{
					rotationGear('.section-4 .gear-1')
				}
			}, "-=0.5")
			.from('.section-4 .gear-2', 1, {
				y: -20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: () =>{
					rotationGear('.section-4 .gear-2', -1)
				}
			}, "-=0.5")
			// конец анимации шестеренок
			.staggerFrom('.section-4 .content ul li', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.5,"-=0.5")
			.staggerFrom('.section-4 .content ul .arrow', 1, {
				height: 0,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.5,"-=2.7")
			.staggerFrom('.section-4 .content ul .arrow', 0.5, {
				width: 0
			}, 0.5,"-=2.7");
		this.tl5
			.from('.section-5 h2', 1, {
				y: -50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.section-5 .rates', 0.5, {
				skewY: 30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.5,"-=0.7")
			.staggerFrom('.section-5 .rates .rates-header', 0.5, {
				height: 0,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.3,"-=2.7")
			.staggerFrom('.section-5 .rates ul li', 0.5, {
				skewX: 30,
				y:30,
				opacity: 0,
				ease: Power3.easeOut
			}, 0.1,"-=2.7");
		this.tl6
			.from('.section-6 h2', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-6 p', 1, {
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-6 form', 1, {
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')

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
export default AdvancmentSmm;
