import {activeSection, getCookie,rotationGear} from '../helper/helper.js';



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
			.from('.header_top', 2.3, {
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
		},this.headerTime)
			.from('.header_title', 2.3,{
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1.7')
			.from('.header-form', 2.3,{
				y: 50,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1.7')
			.from('.header_bot_txt', 2.3,{
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
			.from('.section-2 .title-wrap', 0.5, {
			y: -30,
			opacity: 0,
			ease: Power3.easeOut
		},'section-2')
			.from('.section-2 .title_block_left_decor', 0.5,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from('.section-2 h3', 2,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom('.section-2 .wrap_our_advantages_item', 0.5,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.3,'-=1');

		//section 3

		this.tl31
			.from("#g6204", 0.6, {
				y: 10,
				ease: Power3.easeOut
			})
			.from("#g6046", 1, {
				y: 10,
				ease: Power3.easeOut
			},'-=0.8')
			.from("#g6414", 1, {
				x: 10,
				ease: Power3.easeOut
			},'-=0.8')
			.from("#g6182", 1, {
				scaleX: 0,
				ease: Power3.easeOut
			},'-=0.8')
			.from("#g6472", 1, {
				y: -10,
				ease: Power3.easeOut
			},'-=0.8')
			.from("#g6482", 1, {
				scale: 0,
				ease: Power3.easeOut
			},'-=0.8')
			.from("#g6197", 1, {
				y: -50,
				ease: Power3.easeOut
			},'-=0.8')
			.from("#g6189", 1, {
				y: -100,
				ease: Power3.easeOut
			},'-=0.8')
			.from("#g6487", 1, {
				y: -100,
				ease: Power3.easeOut
			},'-=0.8');

		this.tl32
			.add('label')
			.from("#g7872", 0.7, {
				y: 200,
				ease: Power3.easeOut
			})
			.from("#g7937", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=2')
			.from("#path7405", 0.7, {
				x: -400,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#rect7407", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path7415", 0.7, {
				scaleX: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#g8100", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#g7423", 0.7, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path7403", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#polygon7413", 0.7, {
				y: 150,
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#polygon7409", 0.7, {
				y: 150,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1')
			.from("#g8092", 0.7, {
				y: -300,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#g7937", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#g8019", 0.7, {
				x: 150,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path7419", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path7411", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path7421", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5');

		this.tl33
			.add('label3')
			.from("#g5163", 0.7, {
				opacity: 0,
				ease: Power3.easeOut
			})
			.from("#g5029", 0.7, {
				y: -150,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path4437", 0.7, {
				x: -150,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#rect4439", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#g5054asad", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#polygon4503", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#rect4507", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.from("#polygon4619", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.from("#polygon4621", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.from("#path4435", 0.7, {
				opacity: 0,
				y: -10,
				ease: Power3.easeOut
			},'-=1')
			.from("#polygon4429", 0.7, {
				opacity: 0,
				x: -10,
				ease: Power3.easeOut
			},'-=1')
			.from("#g4431", 0.7, {
				opacity: 0,
				y: -10,
				ease: Power3.easeOut
			},'-=1')
			.from("#path4613", 0.7, {
				opacity: 0,
				y: -10,
				ease: Power3.easeOut
			},'-=1')
			.from("#polygon4615", 0.7, {
				opacity: 0,
				y: -10,
				ease: Power3.easeOut
			},'-=1')
			.staggerFrom("#g5054asad rect", 0.7, {
				opacity: 0,
				y: -10,
				ease: Power3.easeOut
			},0.1,'-=1')

			.from("#g5109", 0.7, {
				x: 150,
				ease: Power3.easeOut
			},'-=1')
			.from("#path4629", 0.7, {
				x: 150,
				ease: Power3.easeOut
			},'-=1')
			.from("#path4611", 0.7, {
				opacity: 0,
				ease: Power3.easeOut
			},'-=0.1')
			.from("#circle4505", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.from("#rect4487", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.from("#rect4491", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.from("#rect4489", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.from("#path4509", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.from("#rect4485", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.staggerFrom("#g5015 path", 0.7, {
				opacity: 0,
				y: 10,
				ease: Power3.easeOut
			},'-=1')
			.from("#g4999", 0.7, {
				x: -100,
				ease: Power3.easeOut
			},'-=1')
			.from("#g5011", 0.7, {
				scaleX: 0,
				ease: Power3.easeOut
			},'-=1')
			.from("#g5096", 0.7, {
				opacity: 0,
				y: 50,
				ease: Power3.easeOut
			},'-=1')
			.from("#path4617", 0.7, {
				opacity: 0,
				y: 50,
				ease: Power3.easeOut
			},'-=1')
			.from("#g5144", 0.7, {
				y: 150,
				ease: Power3.easeOut
			},'-=1');

		
		
		this.tl34
			.add('label4')
			.from("#g6523", 0.7, {
				y: -150,
				ease: Power3.easeOut
			})
			.from("#g6536", 0.7, {
				x: -450,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#g7104", 0.7, {
				scaleX: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#g7133", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path5649", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#g7156", 0.7, {
				y: -250,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path5661", 0.7, {
				y: -250,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path5663", 0.7, {
				y: -250,
				ease: Power3.easeOut
			},'-=0.5')
			.from("#path5665", 0.7, {
				y: -250,
				ease: Power3.easeOut
			},'-=0.5')
			.staggerFrom("#g7133 g", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g7133 rect", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g7190 g", 0.7, {
				y: 100,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g7056 path", 0.7, {
				x: 250,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g7056 g", 0.7, {
				x: 7,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g7056 rect", 0.7, {
				x: 200,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.from("#g7116", 1.5, {
				y: -350,
				rotation: 180,
				ease: Power3.easeOut
			},0.1,'-=0.5')
			.from("#g7005", 1.5, {
				y: 150,
				ease: Power3.easeOut
			},0.1,'-=0.5')
			.staggerFrom("#g7005 g", 1.5, {
				y: 10,
				ease: Power3.easeOut
			},0.1,'-=1.5');


		this.tl35
			.add('label5')
			.staggerFrom("#g8094 g", 0.7, {
				y: -150,
				ease: Power3.easeOut
			},0.1)
			.staggerFrom("#g8094 path", 0.7, {
				y: -150,
				ease: Power3.easeOut
			},0.1,'-=1')
			.staggerFrom("#g8094 rect", 0.7, {
				y: -150,
				ease: Power3.easeOut
			},0.1,'-=1')
			.staggerFrom("#g8219 g", 0.7, {
				y: -200,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g8219 rect", 0.7, {
				y: -200,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g8219 path", 0.7, {
				y: -200,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g8219 circle", 0.7, {
				y: -300,
				ease: Power3.easeOut
			},0.1,'-=2')
			.staggerFrom("#g8243 rect", 1, {
				y: 350,
				ease: Power3.easeOut
			},0.1,'-=2')
			.staggerFrom("#g8243 g", 1, {
				y: 370,
				ease: Power3.easeOut
			},0.1,'-=2')
			.staggerFrom("#g8243 path", 1, {
				y: 370,
				ease: Power3.easeOut
			},0.1,'-=2')
			.staggerFrom("#g8243 polygon", 1, {
				y: 270,
				ease: Power3.easeOut
			},0.1,'-=2')
			.staggerFrom("#g8184 path", 1, {
				x: -150,
				ease: Power3.easeOut
			},0.1,'-=2.5')
			.staggerFrom("#g8184 rect", 1, {
				x: -150,
				ease: Power3.easeOut
			},0.1,'-=2.5')
			.staggerFrom("#g8184 g", 1, {
				x: -150,
				ease: Power3.easeOut
			},0.1,'-=2.5')
			.staggerFrom("#g8210 path", 1, {
				x: 150,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g8210 rect", 1, {
				x: 150,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g8137 rect", 1, {
				x: 250,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g8137 path", 1, {
				scaleX: 0,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g8137 circle", 1, {
				y: 250,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g8125 rect", 1, {
				x: 500,
				ease: Power3.easeOut
			},0.1,'-=2')
			.staggerFrom("#g8125 polygon", 1, {
				x: -500,
				ease: Power3.easeOut
			},0.1,'-=2')
			.staggerFrom("#g8125 path", 1, {
				x: 200,
				ease: Power3.easeOut
			},0.1,'-=2')
			.staggerFrom("#g8162", 1, {
				y: 350,
				ease: Power3.easeOut
			},0.1,'-=2.5')
			.staggerFrom("#g7675 path", 1, {
				y: 350,
				ease: Power3.easeOut
			},0.1,'-=2.5')
			.staggerFrom("#g7675 g", 1, {
				y: 350,
				ease: Power3.easeOut
			},0.1,'-=2.5')


		this.tl36
			.add('label6')
			.staggerFrom("#g9659", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.1)
			.staggerFrom("#polygon8714", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.1)
			.staggerFrom("#g9659 path", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.1)
			.staggerFrom("#g9659 rect", 0.7, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.1,'-=0.5')
			.staggerFrom("#g9659 polygon", 0.7, {
				y: 100,
				ease: Power3.easeOut
			},0.1,'-=0.5')
			.from("#g9667", 1.5, {
				x: -520,
				ease: Elastic.easeOut.config(1, 0.3)
			},'-=0.5')
			.from("#g9732", 1.5, {
				x: 520,
				ease: Elastic.easeOut.config(1, 0.3)
			},'-=1.5')
			.staggerFrom("#g9172 rect", 0.7, {
				y: -400,
				ease: Power3.easeOut
			},0.01,'-=2')
			.staggerFrom("#g9172 polygon", 0.7, {
				y: -400,
				ease: Power3.easeOut
			},0.01,'-=2.5');


		this.tl37
			.add('label7')
			.staggerFrom("#g10693 path", 0.7, {
				y: -150,
				ease: Power3.easeOut
			},0.1)
			.staggerFrom("#g10659 path", 1, {
				y: -150,
				ease: Power3.easeOut
			},0.1,'-=0.5')
			.staggerFrom("#g10659 rect", 1, {
				y: -150,
				ease: Power3.easeOut
			},0.1,'-=0.5')
			.staggerFrom("#g10659 polygon", 1, {
				y: -150,
				ease: Power3.easeOut
			},0.1,'-=0.5')
			.from("#g10789", 1, {
				y: -250,
				ease: Power3.easeOut
			},'-=1')
			.staggerFrom("#g11072 path", 1, {
				x: -350,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g10891 polygon", 1, {
				y: -350,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g11072 rect", 1, {
				x: -350,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g11072 polygon", 1, {
				x: -350,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g10807 polygon", 1, {
				x: 500,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g10807 rect", 1, {
				x: 500,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g10807 path", 1, {
				x: 500,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g10795 path", 1, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g10795 rect", 1, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.1,'-=3')
			.staggerFrom("#g10819 rect", 1, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.05,'-=3')
			.staggerFrom("#g10819 path", 1, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.05,'-=3')
			.staggerFrom("#g10819 polygon", 1, {
				scaleY: 0,
				ease: Power3.easeOut
			},0.05,'-=3')
			.staggerFrom("#path10380", 1, {
				scaleY: 0,
				ease: Power3.easeOut
			},'-=3')


		this.tl38
			.add('label8')
			.from("#g12549", 1, {
				x: 450,
				ease: Power3.easeOut
			})
			.staggerFrom("#g12652 polygon",1, {
				y: -250,
				ease: Power3.easeOut
			},0.1,'-=0.5')
			.staggerFrom("#g12652 rect", 1, {
				x: -250,
				ease: Power3.easeOut
			},0.1,'-=0.5')
			.staggerFrom("#g12652 path", 1, {
				y: 250,
				ease: Power3.easeOut
			},0.1,'-=1')
			.staggerFrom("#g12735 rect", 2, {
				y: 550,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g12735 circle", 2, {
				y: 550,
				ease: Power3.easeOut
			},0.1,'-=1.5')
			.staggerFrom("#g12672 rect", 1, {
				x: -250,
				ease: Elastic.easeOut.config(1, 0.3)
			},0.1,'-=1.5')
			.staggerFrom("#g12672 path", 1, {
				x: -250,
				ease: Elastic.easeOut.config(1, 0.3)
			},0.1,'-=1.5')
			.staggerFrom("#g12515 rect", 1, {
				scaleY: 0,
				ease: Elastic.easeOut.config(1, 0.3)
			},0.1,'-=1.5')
			.staggerFrom("#g12515 path", 1, {
				scaleX: 0,
				ease: Elastic.easeOut.config(1, 0.3)
			},0.1,'-=1.5')
			.staggerFrom("#g12689 path", 1, {
				scaleX: 0,
				ease: Elastic.easeOut.config(1, 0.3)
			},0.1,'-=1.5')
			.from("#g12685", 1, {
				y: 200,
				ease: Power3.easeOut
			},'-=1.5')
			.from("#g11514", 1, {
				y: -250,
				ease: Power3.easeOut
			},'-=1.5')
			.from("#g12529", 1, {
				rotation: 360,
				opacity: 0,
				ease: Power3.easeOut
			},'-=1.5')
			.from("#g12707", 1, {
				x: -250,
				ease: Power3.easeOut
			},'-=1.5')
			.from("#g12722", 1, {
				x: -250,
				ease: Power3.easeOut
			},'-=1.5')
			.from("#path11586", 1, {
				x: -350,
				ease: Power3.easeOut
			},'-=1.5');


		this.tl3
			.add('section-3',"+=0.5")
			.from('.section-3 .title-wrap', 0.7,{
			y: -30,
			opacity: 0,
			ease: Power3.easeOut
		},'section-3')
			.from('.section-3 .title_block_left_decor', 0.7,{
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
				y: 50,
				autoAlpha: 0,
				ease: Power3.easeOut,
				onComplete: ()=>{
					// $('#Layer_1').parent().siblings('a').hover((e)=>{
					// 	e.preventDefault();
					// 	this.tl31.play();
					// })
					this.tl31.play();
				}
			},'-=1.5')
			.from("#Layer_2", 1, {
				y: 50,
				autoAlpha: 0,
				ease: Power3.easeOut,
				onComplete: ()=>{
					// $('#Layer_2').parent().siblings('a').hover((e)=>{
					// 	e.preventDefault();
					// 	this.tl32.play();
					// })
					this.tl32.play();

				}
			},'-=1.5')
			.from("#Layer_3", 1, {
				y: 50,
				autoAlpha: 0,
				ease: Power3.easeOut,
				onComplete: ()=>{
					// $('#Layer_3').parent().siblings('a').hover((e)=>{
					// 	e.preventDefault();
					// 	this.tl33.play();
					// })
					this.tl33.play();
				}
			},'-=1.5')
			.from("#Layer_4", 1, {
				y: 50,
				autoAlpha: 0,
				ease: Power3.easeOut,
				onComplete: ()=>{
					// $('#Layer_4').parent().siblings('a').hover((e)=>{
					// 	e.preventDefault();
					// 	this.tl34.play();
					// })
					this.tl34.play();
				}
			},'-=1.5')
			.from("#Layer_5", 1, {
				y: 50,
				autoAlpha: 0,
				ease: Power3.easeOut,
				onComplete: ()=>{
					// $('#Layer_5').parent().siblings('a').hover((e)=>{
					// 	e.preventDefault();
					// 	this.tl35.play();
					// })
					this.tl35.play();
				}
			},'-=1.5')
			.from("#Layer_6", 1, {
				y: 50,
				autoAlpha: 0,
				ease: Power3.easeOut,
				onComplete: ()=>{
					// $('#Layer_6').parent().siblings('a').hover((e)=>{
					// 	e.preventDefault();
					// 	this.tl36.play();
					// })
					this.tl36.play();
				}
			},'-=1.5')
			.from("#Layer_7", 1, {
				y: 50,
				autoAlpha: 0,
				ease: Power3.easeOut,
				onComplete: ()=>{
					// $('#Layer_7').parent().siblings('a').hover((e)=>{
					// 	e.preventDefault();
					// 	this.tl37.play();
					// })
					this.tl37.play();
				}
			},'-=1.5')
			.from("#Layer_8", 1, {
				y: 50,
				autoAlpha: 0,
				ease: Power3.easeOut,
				onComplete: ()=>{
					// $('#Layer_8').parent().siblings('a').hover((e)=>{
					// 	e.preventDefault();
					// 	this.tl38.play();
					// })
					this.tl38.play();
				}
			},'-=1.5');


		
		//section 4
		this.tl4
			.from('.section-4 .row', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			});

		//section 5
		this.tl5
			.from('.section-5 .title-wrap', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			})
			.from('.section-5 .title_block_left_decor', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.7")
			.from('.section-5 .why_profitably_item_img', 0.7,{
				x: -30,
				opacity: 0,
				ease: Power3.easeOut

			},"-=0.7")
			.from('.img-fa3x',1,{
				y:	20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: ()=>{
					rotationGear('.img-fa3x',-1)
				}
			},'-=1.5')
			.from('.img-fa2x',1,{
				y:	20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: ()=>{
					rotationGear('.img-fa2x',-1)
				}
			},'-=1.5')
			.from('.img-fa1x',1,{
				y:	20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: ()=>{
					rotationGear('.img-fa1x',-1)
				}
			},'-=1.5')
			.from('.img-fa1x-1',1,{
				y:	20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: ()=>{
					rotationGear('.img-fa1x-1',-1)
				}
			},'-=1.5')
			.from('.img-fa1x-2',1,{
				y:	20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: ()=>{
					rotationGear('.img-fa1x-2',-1)
				}
			},'-=1.5')
			.from('.img-fa1x-3',1,{
				y:	20,
				opacity: 0,
				ease: Bounce.easeOut,
				rotation: 50,
				onComplete: ()=>{
					rotationGear('.img-fa1x-3',-1)
				}
			},'-=1.5')
			.from('.section-5 .why_profitably_item_txt', 0.7,{
				x: 30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=1");



	//	section 6
		this.tl6
			.from('.section-6 .row', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			});

	//	section 7
		this.tl7
			.from('.section-7 .title-wrap', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			})
			.from('.section-7 .title_block_left_decor ', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5")
			.staggerFrom('.section-7 .who_are_we_items .who_are_we_item ', 1.4,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.02,"-=0.5")
			.from('.section-7 .who_are_we_bottom_title ', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5");

	//	section 8
		this.tl8
			.from('.section-8 .title-wrap', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"+=0.5")
			.staggerFrom('.section-8 .how_good_item', 1.4,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.01,"-=0.5")
			.from('.section-8 .link', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},"-=0.5");

		//section 9
		this.tl9
			.from('.section-9 h2', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			})
			.staggerFrom('.section-9 .couple_of_words_txt', 1.4,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			},0.01,"-=0.5");

		//section 10
		this.tl10
			.from('.section-10 .row', 0.7,{
				y: -30,
				opacity: 0,
				ease: Power3.easeOut
			});
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