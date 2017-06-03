(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('.fetured-trailor-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay:false

        });

        $(".fetured-trailor-carousel").on("translated.owl.carousel", function () {
            $(".tailor-text h2").addClass("animated fadeInDown").css("opacity", "1");
        });
        $(".fetured-trailor-carousel").on("translate.owl.carousel", function () {
            $(".tailor-text h2").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".fetured-trailor-carousel").on("translated.owl.carousel", function () {
            $(".tailor-text p, .tailor-text a").addClass("animated fadeInUp").css("opacity", "1");
        });
        $(".fetured-trailor-carousel").on("translate.owl.carousel", function () {
            $(".tailor-text p, .tailor-text a").removeClass("animated fadeInUp").css("opacity", "0");
        })
        $(".fetured-trailor-carousel").on("translated.owl.carousel", function () {
            $(".lorored-prizing-box p").addClass("animated fadeInUp").css("opacity", "1");
        });
        $(".fetured-trailor-carousel").on("translate.owl.carousel", function () {
            $(".lorored-prizing-box p").removeClass("animated fadeInUp").css("opacity", "0");
        })



        var totalHeight = $(".fetured-trailor-carousel .owl-dots").height();
        var minusHeight = "-" + totalHeight/2;
         $(".fetured-trailor-carousel .owl-dots").css("margin-top", parseInt(minusHeight));



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	