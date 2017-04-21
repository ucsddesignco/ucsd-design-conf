$(document).ready(function($) {

	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
		$(this).animate({})
	});

	$(".mobile-link").click(function() {
		console.log("YAAAA");
    $(".du-nav").toggleClass("nav-open");
  });
});
