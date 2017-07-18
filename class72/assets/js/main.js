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

        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();

         $('.counter-number span').counterUp({
            delay: 10,
            time: 5000
        });
        






    });


    jQuery(window).load(function() {


    });


}(jQuery));