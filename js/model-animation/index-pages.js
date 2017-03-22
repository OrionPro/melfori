import {activeSection} from '../helper/helper.js';



class IndexPageAnimation{
	constructor(){
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

		//time line динамические
		this.arrow = new TimelineMax();

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

		//инициализация настроек time line
		this.description();

	}

	description(){

		this.tl1
			.from('.header_top', 3, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
		},'+=2')
			.from('.header_title', 3,{
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1.5')
			.from('.header_bot_txt', 3,{
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1.5')
			.from('.header_bot_txt .fa-angle-down', 0.7,{
				y: -25,
				opacity: 0,
				scale: 0.5,
				ease: Power3.easeOut
			},'-=1.5');
	}

	start(){
		if (activeSection('.header')) {
			this.tl1.resume();
		}
	}
}
export default IndexPageAnimation;