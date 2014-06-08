var CM = {

  getLocation: function(callback) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;

      callback(lat, lon);
    }, function() {
      alert("Please allow us to find your current location");
    });
  },

  getLandmarks: function(lat, lon, callback) {
   $.getJSON("/landmarks.json?lat=" + lat + "&lon=" + lon).done(function(data) {
      $.each(data, callback);
    });
  },

  initialize: function() {

    CM.getLocation(function(lat, lon) {
      var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(lat, lon),
        scrollwheel: false,
        fitBounds: true
      };

      var locations = {};
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      // the markers to the map from the json var
      var marker;

      CM.getLandmarks(lat, lon,
        function(k, v) {
          $('#debug').html($('#debug').html() + '<br>' + v.latitude + '<br>' + v.longitude + '<br>' + v.description + '<br>' + v.url);
          var position = new google.maps.LatLng(v.latitude, v.longitude);
       
          var marker_image = {
              url: '/assets/marker.png',
              size: new google.maps.Size(20, 32),
              origin: new google.maps.Point(0,0),
              anchor: new google.maps.Point(0, 32)
          };

           var shape = {
            coords: [1, 1, 1, 20, 18, 20, 18 , 1],
            type: 'poly'
          };

          var marker = new google.maps.Marker({
            position: position,
            map: map, 
            icon: marker_image,
            shape: shape
          });

          marker.setTitle(v.description);
          CM.attachSecretMessage(marker, v.description);
        }
      );


    });

  },

  // The five markers show a secret message when clicked
  // but that message is not within the marker's instance data
  attachSecretMessage: function(marker, name) {
    var infowindow = new google.maps.InfoWindow({
      content: name
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(marker.get('map'), marker);
    });
  },

  parallax: function() {
    var ev = {
      scrollTop: document.body.scrollTop || document.documentElement.scrollTop
    };
    ev.ratioScrolled = ev.scrollTop / (document.body.scrollHeight - document.documentElement.clientHeight);
    CM.render(ev);
  },

  render: function(ev) {
    var t = ev.scrollTop;
    var y = Math.round(t * 1 / 4) - 0;
    var x = Math.round(t * -1 / 4) - 0;
    var coords = '50% ' + x + 'px';

    jQuery('#hero-home').css('background-position', coords);
  },

  viewMap: function() {
    $('#list-view').hide();
    $('#map-canvas').show();
  },

  viewList: function() {
    $('#map-canvas').hide();

    //

    $('#list-view').show();
  },
};
