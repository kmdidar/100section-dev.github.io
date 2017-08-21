(function($){"use strict";jQuery(document).ready(function($){
	$(".featured-project").owlCarousel({
		items:1,
		dots:true,
		autoplay:true,
		loop:true,
		nav:false,
		animateOut:"fadeOut",
		animateIn:"fadeIn"
	});
	$(".project-bg").ripples({
		resolution:512,
		dropRadius:20,
		perturbance:.05
	});
	setInterval(function(){
		var $el=$(".project-bg");
		var x=Math.random()*$el.outerWidth();
		var y=Math.random()*$el.outerHeight();
		var dropRadius=20;
		var strength=.05+Math.random()*.05;
		$el.ripples("drop",x,y,dropRadius,strength)},500)
});


jQuery(window).load(function(){

})
})(jQuery);