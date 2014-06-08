var CM = {

  getLandmarks: function(lat, lon, callback) {
    $.getJSON("../landmarks.json?lat=" + lat + "&lon=" + lon).done(function(data) {
      $.each(data, callback);
    });
  },

  initialize: function() {

    // get user location here 

    // "latitude":42.320514,"longitude":-72.628392

    var lat = 42.320514;
    var lon = -72.628392; 

    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(lat, lon),
      scrollwheel: false
    };

    var locations = {};
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    // the markers to the map from the json var
    var marker;

    CM.getLandmarks(lat, lon,
      function(k, v) {
        $('#debug').html($('#debug').html() + '<br>' + v.latitude + '<br>' + v.longitude + '<br>' + v.description + '<br>' + v.url);
        var position = new google.maps.LatLng(v.latitude, v.longitude);
        var marker = new google.maps.Marker({
          position: position,
          map: map
        });
        marker.setTitle(v.description);
        CM.attachSecretMessage(marker, v.description);
      }
    );

    // var northEast = new google.maps.LatLng(lat + .10 , lon - .10);
    // var southWest = new google.maps.LatLng(lat + .10, lon - .10 );
    // var bounds = new google.maps.LatLngBounds(southWest, northEast);
    // map.fitBounds(bounds);

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