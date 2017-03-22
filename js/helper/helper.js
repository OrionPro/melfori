

export function activeSection(section, start = 0){
	var topPosition = $(section).offset().top - start,
		bottomPosition = $(section).offset().top + $(section).height() + start;
	if(($(window).scrollTop() >= topPosition) && ($(window).scrollTop() <= bottomPosition)){
		return true;
	}
}

export function activePages(className) {
	if($('body').hasClass(className)){
		return true;
	}else{
		return false;
	}
}
