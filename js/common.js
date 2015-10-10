$(document).ready(function() {

	$(".main_head").css("height", $(window).height());

	// function heightDetect() {
	// 	$(".main_head").css("height", $(window).height());
	// };
	// heightDetect();
	// $(window).resize(function() {
	// 	heightDetect();
	// });
	
	$(".sandwich, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});