(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        $('#graphic-dprogressbar').circleProgress({
            value: 0.85,
            size: 200,
            fill: {
                gradient: ["red", "orange"]
            },
            emptyFill: '#fff',
            thickness: 2
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(85 * progress) + '<i>%</i>');
        });
        $('#dmarketing-dprogressbar').circleProgress({
            value: 0.65,
            size: 200,
            fill: {
                gradient: ["red", "orange"]
            },
            emptyFill: '#fff',
            thickness: 2
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(65 * progress) + '<i>%</i>');
        });
        $('#web-dprogressbar').circleProgress({
            value: 0.95,
            size: 200,
            fill: {
                gradient: ["red", "orange"]
            },
            emptyFill: '#fff',
            thickness: 2
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(95 * progress) + '<i>%</i>');
        });






    });


    jQuery(window).load(function() {


    });


}(jQuery));