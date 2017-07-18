(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
                $('.header-area').addClass('sticky');
            } else {
                $('.header-area').removeClass('sticky');
            }
        });

        // var footerHifgt = $("footer.footer-area").height();
        
        $(".side-main-wraper").css('margin-bottom', 400 +'px');

        






    });


    jQuery(window).load(function() {


    });


}(jQuery));