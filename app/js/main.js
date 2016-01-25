$(document).ready(function() {

	console.log('Файл main.js успешно загружен');

	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	

});