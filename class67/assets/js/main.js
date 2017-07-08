(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        //Wow js
		new WOW().init(); 



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	