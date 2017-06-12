(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".testimonial-carousel").owlCarousel({
        	 loop: true,
             autoplay: true,
             dots:true,
             nav: false,
             items:3,
             margin: 30
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	