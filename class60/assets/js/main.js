(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        /*circle*/
            var center = [23.7519228,90.3498603];
    $('.map')
      .gmap3({
        center: center,
        zoom: 12  ,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
        
      .circle({
        center: center,
        radius : 1000,
        fillColor : "#FFAF9F",
        strokeColor : "#FF512F"
      })
      .infowindow({
                position: center,
                content:'<div style="color:#000000; border:1px solid #ddd;background-color: #A3CCFF; width:500px; line-height:46px; font-weight: 400; height: 50px; text-align:center">' +
          '*** EID MUBARAK RRF***)' +'</div>',
                pixelOffset: new google.maps.Size(0, -30)
            })
            .then(function (infowindow) {
                infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
            })
        
        
        /*marker*/
        
            var center = [23.7519228,90.3498603];
    $('.marker')
      .gmap3({
        center: center,
        zoom: 12,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .marker({
        position: center,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
      .infowindow({
                position: center,
                content:'<div style="color:#000000; border:1px solid #ddd;background-color: #A3CCFF; width:500px; line-height:46px; font-weight: 400; height: 50px; text-align:center">' +
          '*** EID MUBARAK RRF***)' +'</div>',
                pixelOffset: new google.maps.Size(0, -30)
            })
            .then(function (infowindow) {
                infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
            })


        
        /*route*/

        var rrf = {lat: 23.75633, lng: 90.3709143};
        
     $('.route')
      .gmap3({
        center: rrf,
        zoom: 12,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .circle({
      center: rrf,
      radius : 250,
      fillColor : "#FFAF9F",
      strokeColor : "#FF512F"
      })
      .infowindow({
      position: rrf,
      content: "Hello Bangladesh"
      })
       .route({
      origin:"Farmgate, Dhaka, Dhaka Division",
      destination:"upoharbd",
      travelMode: google.maps.DirectionsTravelMode.DRIVING
      })
      .directionsrenderer(function (results) {
      if (results) {
        return {
        panel: "#box",
        directions: results
        }
      }
      })
      .then(function (infowindow) {
      infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
      });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	