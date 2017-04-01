$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});


// search
 function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }



//map
function myMap() {
var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 31.768319, lng: 35.213710}
        });

var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
// nearest retailer latitude and longitude
var locations = [
  {lat: 31.767537, lng: 35.212029},
  {lat: 31.768796, lng: 35.215741},
  {lat: 31.767282, lng: 35.214090}
]



// animate
$(".col-sm-4").hover(function(){
      $(this).addClass('animated pulse');
    },
    function(){
      $(this).removeClass('animated pulse');
    });
