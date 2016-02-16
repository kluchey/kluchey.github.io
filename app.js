/*
var main = function() {
	
});
};
*/

// $(document).ready(main);

$(document).ready(function(){
	$('#webpage').fadeIn(1000);
	$(document).keypress(function(event) {
    if(event.which === 72 + 32) {
		$(".hide").toggle();
    } else if(event.which === 82 + 32) {
		window.open('https://www.reddit.com/')
	}
	});
});
/*
	$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $('div.header').css({
			"position": "fixed"
		});
    } else {
        $('div.header').css({
			"position": "static"
		});
	};
	});
	*/