var CM = {

  initialize: function() {
    var mapOptions = {
      zoom: 2,
      center: new google.maps.LatLng(-25.363882, 131.044922)
    };
    var locations = {};
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    // the markers to the map from the json var
    var marker;
    $.getJSON("../landmarks.json").done(function(data) {
      $.each(data, function(k, v) {
        $('#debug').html($('#debug').html() + '<br>' + v.latitude + '<br>' + v.longitude + '<br>' + v.description + '<br>' + v.url);
        var position = new google.maps.LatLng(v.latitude, v.longitude);
        var marker = new google.maps.Marker({
          position: position,
          map: map
        });
        marker.setTitle(v.description);
        CM.attachSecretMessage(marker, v.description);
      });
    });
    var northEast = new google.maps.LatLng(42.3358, -72.6113);
    var southWest = new google.maps.LatLng(42.3110, -72.6644);

    var bounds = new google.maps.LatLngBounds(southWest, northEast);
    map.fitBounds(bounds);
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
  }
};