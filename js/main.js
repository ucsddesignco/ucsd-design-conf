$(document).ready(function() {

	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
		$(this).animate({})
	});

	$(".menu-button").click(function() {
    $(".du-nav").toggleClass("nav-open");
		console.log("YAAAA");
  });

	$(".du-nav--mobile-link").click(function() {
    $(".du-nav").toggleClass("nav-open");
  });
});
