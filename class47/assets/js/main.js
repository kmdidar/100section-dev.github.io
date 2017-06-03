(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".testimonial-carousel").owlCarousel({
        	 loop: true,
             autoplay: true,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dot:true,
             nav: false,
             mouseDrag:true,
             touchDrag:false,
             items:1
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	