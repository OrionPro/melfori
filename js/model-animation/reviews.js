import {activeSection, getCookie} from '../helper/helper.js';

class ReviewPageAnimation{
	constructor(){


		if(getCookie('loader')){
			this.headerTime = '+=1';
		}else{
			this.headerTime = '+=3';
		}


		//time line статический статический
		this.tl1 = new TimelineMax();
		this.tl2 = new TimelineMax();

		//time line динамический
		this.arrow = new TimelineMax();
		//остановка time lines
		this.tl1.pause();
		this.tl2.pause();

	}
	description() {

	}
	start(){
		if(activeSection('section-1')){
			this.tl1.play();
		}
		if(activeSection('reviews')){
			this.tl2.play();
		}



	}
}
export default ReviewPageAnimation;