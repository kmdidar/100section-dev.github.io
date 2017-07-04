(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        // $(document).scroll(function(){
        //     var height = $('.main-menu-area').outerHeight();
        //     var uporethekDurutto = $(window).scrollTop();
        //     if(uporethekDurutto >= height){
        //         $('.main-menu-area').addClass('is-sticky');
        //         return false;
        //     }else{
        //         $('.main-menu-area').removeClass('is-sticky');
        //     }
        // });
        
        $(window).on('scroll',function(){
            if($(this).scrollTop() > 50){
            $('.main-menu-area').addClass('sticky');
        }
        else{
            $('.main-menu-area').removeClass('sticky');
    }
  });




        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	