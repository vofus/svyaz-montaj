$(document).ready(function() {

	// $(".main_head").css("height", $(window).height());

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
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

	// $(".toggle_menu").click(function() {
	// 	$(".sandwich").toggleClass("active");

	// 	if ($(".top_menu").is(":visible")) {
	// 		$(".top_menu").fadeOut(600);
	// 		$(".top_menu li a").removeClass("fadeInUp animated");
	// 	} else {
	// 		$(".top_menu").fadeIn(600);
	// 		$(".top_menu li a").addClass("fadeInUp animated");
	// 	}
	// });

	// $(".top_menu").click(function() {
	// 	$(".top_menu").fadeOut(600);
	// 	// $(".sandwich").toggleClass("active");
	// 	if ($(".sandwich").is(".active")) {
	// 		$(".sandwich").removeClass("active");
	// 	}
	// });

	$(".top_menu ul li a").click(function() {
		onClickTopMenu();
	});
	
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

});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});