$(document).ready(function() {

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
		$("._mPS2id-t").css("height", $(window).height());
	};
	
	heightDetect();
	
	$(window).resize(function() {
		heightDetect();
	});

	function onClickTopMenu() {
		$(".top_menu").fadeOut(600);
		// $(".sandwich").toggleClass("active");
		if ($(".sandwich").is(".active")) {
			$(".sandwich").removeClass("active");
		}
	}

	function onClickToggleMenu () {
		$(".sandwich").toggleClass("active");
		if ($(".top_menu").is(":visible")) {
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		}
	}

	function scroll () {
		
	}
	

	$(".arrow_in_circle a").click(function() {
		var link = $(this).attr("href");
		var str_link = "a[href*='" + link + "']";
		$(str_link).mPageScroll2id();
	});

	$(".top_menu ul li a").click(function() {
		var link = $(this).attr("href");
		var str_link = "a[href*='" + link + "']";
		$(str_link).mPageScroll2id();
		onClickTopMenu();
	});

	// $(".navigation .point").click(scroll());

	$(".navigation .arrow").hover(function () {
		$(this).fadeToggle( "slow", "linear" );
	});
	/*
	$(document).on('touchstart click', '.top_menu', function(event) {
		if (event.type == "touchstart") {
			onClickTopMenu();
		} else {
			onClickTopMenu();
		}
		event.stopPropagation();
		event.preventDefault();
	});

	$(document).on('touchstart click', '.toggle_menu', function(event) {
		if (event.type == "touchstart") {
			onClickToggleMenu();
		} else {
			onClickToggleMenu();
		}
		event.stopPropagation();
		event.preventDefault();
	});
*/

	$(document).on('click', '.top_menu', function(event) {
		onClickTopMenu();
		event.stopPropagation();
		event.preventDefault();
	});

	$(document).on('click', '.toggle_menu', function(event) {
		onClickToggleMenu();
		event.stopPropagation();
		event.preventDefault();
	});

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});