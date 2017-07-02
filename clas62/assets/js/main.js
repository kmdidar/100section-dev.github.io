(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

          $(".project-titles li").on('click', function () {
            $(".project-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".project-list").isotope({
                filter: selector
            });
        });

          //Magnific Popup
		$('.project-list').magnificPopup({
		   type: 'image',
		   closeOnContentClick: true,
  		   gallery: {enabled: true}
		});



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	