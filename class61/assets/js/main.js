(function ($) {
    "use strict";

    jQuery(document).ready(function($) {
        
     var kmdidar = [23.7519228,90.3498603];
   $('.map')
      .gmap3({
        center:kmdidar,
        zoom:11,
        scrollwheel:false,
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        }
      })
   
        .marker({
            position: kmdidar,
            icon: "http://maps.google.com/mapfiles/marker_green.png"
        })
        .infowindow({
            position: kmdidar,
            content: "",
            pixelOffset: new google.maps.Size(0, -40)
        })
        .then(function (infowindow) {
            infowindow.open(this.get(0));
        })
   
   
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#909090"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f1f1f1"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#f1f1f1"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":17}]}
        ],
        {name: "Shades of Grey"}
      );
   
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));











