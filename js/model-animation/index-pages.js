import {activeSection, getCookie} from '../helper/helper.js';



class IndexPageAnimation{
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
		this.tl31 = new TimelineMax();
		this.tl32 = new TimelineMax();
		this.tl33 = new TimelineMax();
		this.tl34 = new TimelineMax();
		this.tl35 = new TimelineMax();
		this.tl36 = new TimelineMax();
		this.tl37 = new TimelineMax();
		this.tl38 = new TimelineMax();

		this.tl4 = new TimelineMax();
		this.tl5 = new TimelineMax();
		this.tl6 = new TimelineMax();
		this.tl7 = new TimelineMax();
		this.tl8 = new TimelineMax();
		this.tl9 = new TimelineMax();
		this.tl10 = new TimelineMax();
		this.tl11 = new TimelineMax();

		//time line динамические
		this.arrow = new TimelineMax({
			repeat: Infinity
		});

		this.tl1.pause();
		this.tl2.pause();

		this.tl3.pause();
		this.tl31.pause();
		this.tl32.pause();
		this.tl33.pause();
		this.tl34.pause();
		this.tl35.pause();
		this.tl36.pause();
		this.tl37.pause();
		this.tl38.pause();

		this.tl4.pause();
		this.tl5.pause();
		this.tl6.pause();
		this.tl7.pause();
		this.tl8.pause();
		this.tl9.pause();
		this.tl10.pause();
		this.tl11.pause();

		//инициализация настроек time line


		this.start = this.start;
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
				ease: Power3.easeOut
			},'-=1.7')
			.from('.header_bot_txt .fa-angle-down', 0.7,{
				y: -30,
				opacity: 0,
				scale: 0.5,
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

		//section 2
		this.tl2.add('section-2','+=0.5')
			.from('.section-2 .title-wrap', 1, {
			y: -30,
			opacity: 0,
			ease: Power3.easeOut
		},'section-2')
			.from('.section-2 .title_block_left_decor', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1')
			.from('.section-2 h3', 2,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1')
			.staggerFrom('.section-2 .our_advantages_item', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.3,'-=1')
			.from('.section-2 .our_advantages-download', 1,{
				y: 30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1.5');

		//section 3

		this.tl31
			.from("#g6204", 1, {
				y: 10,
				ease: Bounce.easeOut
			})
			.from("#g6046", 1, {
				y: 10,
				ease: Bounce.easeOut
			},'-=0.8')
			.from("#g6414", 1, {
				x: 10,
				ease: Bounce.easeOut
			},'-=0.8')
			.from("#g6182", 1, {
				scale: 0,
				ease: Bounce.easeOut
			},'-=0.8')
			.from("#g6472", 1, {
				y: -10,
				ease: Bounce.easeOut
			},'-=0.8')
			.from("#g6482", 1, {
				scale: 0,
				ease: Bounce.easeOut
			},'-=0.8')
			.from("#g6197", 1, {
				x: 50,
				ease: Bounce.easeOut
			},'-=0.8')
			.from("#g6189", 1, {
				y: -10,
				ease: Bounce.easeOut
			},'-=0.8')
			.from("#g6487", 1, {
				y: -10,
				ease: Bounce.easeOut
			},'-=0.8');

		this.tl32
			.add('label')
			.from("#g7872", 0.7, {
				y: 200,
				ease: Bounce.easeOut
			})
			.from("#g7937", 0.7, {
				scaleY: 0,
				ease: Bounce.easeOut
			},'-=0.5')
			.from("#path7415", 0.7, {
				y: -50,
				ease: Bounce.easeOut
			},'-=0.5')
			.from("#g8100", 0.7, {
				y: 50,
				ease: Bounce.easeOut
			},'-=0.5')
			.from("#rect7261", 0.7, {
				y: 50,
				ease: Bounce.easeOut
			},'-=0.5')

		this.tl3
			.add('section-3',"+=0.5")
			.from('.section-3 .title-wrap', 1,{
			y: -30,
			opacity: 0,
			ease: Power3.easeOut
		},'section-3')
			.from('.section-3 .title_block_left_decor', 1,{
			y: -30,
			opacity: 0,
			ease: Power3.easeOut
		},'-=0.5')
			.staggerFrom('.section-3 .why_effective_item', 2,{
			y: -30,
			opacity: 0,
			ease: Power3.easeOut
		},0.01,'-=0.5')
			.from("#Layer_1", 1, {
				scale: 0,
				ease: Bounce.easeOut,
				onComplete: ()=>{
					this.tl31.play();
				}
			})
			.from("#Layer_2", 1, {
				scale: 0,
				ease: Bounce.easeOut,
				onComplete: ()=>{
					this.tl32.play();
				}
			})





		//section 4
		this.tl4
			.from('.section-4 .row', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5");

		//section 5
		this.tl5
			.from('.section-5 .title-wrap', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5")
			.from('.section-5 .title_block_left_decor', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.7")
			.from('.section-5 .why_profitably_item_img', 1,{
				x: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.7")
			.from('.section-5 .why_profitably_item_txt', 1,{
				x: 30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=1");

	//	section 6
		this.tl6
			.from('.section-6 .row', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5");

	//	section 7
		this.tl7
			.from('.section-7 .title-wrap', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5")
			.from('.section-7 .title_block_left_decor ', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5")
			.staggerFrom('.section-7 .who_are_we_items .who_are_we_item ', 2,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.02,"-=0.5")
			.from('.section-7 .who_are_we_bottom_title ', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5");

	//	section 8
		this.tl8
			.from('.section-8 .title-wrap', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5")
			.staggerFrom('.section-8 .how_good_item', 2,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.01,"-=0.5")
			.from('.section-8 .link', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5");

		//section 9
		this.tl9
			.from('.section-9 h2', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5")
			.staggerFrom('.section-9 .couple_of_words_txt', 2,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.01,"-=0.5");

		//section 10
		this.tl10
			.from('.section-10 .row', 1,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5");
	}

	start(){
		
		if (activeSection('section-1')) {
			this.tl1.resume();
		}
		if (activeSection('section-2' , 300, 400)) {
			this.tl2.resume();
		}
		if (activeSection('section-3' , 300, 400)) {
			this.tl3.resume();

		}
		if (activeSection('section-4' , 500, 400)) {
			this.tl4.resume();
		}
		if (activeSection('section-5' , 500, 400)) {
			this.tl5.resume();
		}
		if (activeSection('section-6' , 500, 400)) {
			this.tl6.resume();
		}
		if (activeSection('section-7' , 500, 400)) {
			this.tl7.resume();
		}
		if (activeSection('section-8' , 500, 400)) {
			this.tl8.resume();
		}
		if (activeSection('section-9' , 500, 400)) {
			this.tl9.resume();
		}
		if (activeSection('section-10' , 700, 400)) {
			this.tl10.resume();
		}
	}
}
export default IndexPageAnimation;