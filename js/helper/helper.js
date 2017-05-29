

export function activeSection(section, startTop = 0, startBotton = 0){

	section = '.' + section;
	if($(section).offset() !== undefined){
		var topPosition = $(section).offset().top - startTop,
			bottomPosition = $(section).offset().top + $(section).height() - startBotton;
		if(($(window).scrollTop() >= topPosition) && ($(window).scrollTop() <= bottomPosition)){
			return true;
		}
	}
}

export function activePages(className) {
	if($('body').hasClass(className)){
		return true;
	}else{
		return false;
	}
}

export function getCookie(data) {
	var cookieArr = document.cookie.split(';');
	for(var i =0; i < cookieArr.length; i++){
		if (cookieArr[i].indexOf(data) >= 0) {
			return true;
		}
	}

}

export function setCookie(data){
	document.cookie = data;
}

export function rotationGear(elements, direction = 1){
	var gearSmall = new TimelineMax();
	gearSmall
		.from(elements, 2,{
			rotation: 360 * direction,
			force3D:false,
			ease: Power0.easeNone
		});
	gearSmall.repeat(Infinity);
}


