/*
var main = function() {
	
});
};
*/

// $(document).ready(main);

$(document).ready(function(){
	$('#webpage').fadeIn(1000);
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
	
		$(document).keypress(function(event) {
    if(event.which === 72 + 32) {
		$(".hide").toggle();
    } else if(event.which === 82 + 32) {
		window.open('https://www.reddit.com/')
	}
	});
	
	*/

	//Simple, Finite Comic Viewer

var comicData = {
	total:2,
	currentView:2,
	imageList:["",""]
};

var comic = document.getElementByID("comix");

function nextComic() {
	comic.src = comicData.imageList[comicData.currentView];
	comicData.currentView++;
	if (comicData.total == comicData.currentView) {
		//hide button
		return;
	}
	if (comicData.currentView != 1) {
		//reveal button
		return;
	} else return;
}

function prevComic() {
	var cur = comicData.currentView;
	comic.src = comicData.imageList[comicData.currentView - 2];
	comicData.currentView--;
	if (comicData.currentView == 1) {
		//hide button
		return;
	} else return;
}