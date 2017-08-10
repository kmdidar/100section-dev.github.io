(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $('.clock').countdown('2017/10/10', function(event) {
  $(this).html(event.strftime('<span class="countdown-wraper"><span class="single-countdown-item">%w</br><span>weeks</span></span><span class="single-countdown-item">%D</br><span>Days</span></span><span class="single-countdown-item">%H</br><span>Hours</span></span><span class="single-countdown-item">%M</br><span>Minits</span></span><span class="single-countdown-item">%S</br><span>Seconds</span></span></span>'));
});



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	