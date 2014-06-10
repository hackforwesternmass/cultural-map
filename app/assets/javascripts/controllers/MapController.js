(function() {
  angular.module('cultureApp').controller('MapController', [
    '$scope', '$location', 'CultureService',
    function($scope, $location, CultureService) {

      $scope.list = function() {
        return CultureService.list().then(function(result) {

        });
      },

      $scope.initialize = function() {

        CultureService.getLocation(function(lat, lon) {
          var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(lat, lon),
            scrollwheel: false,
            fitBounds: true
          };

          var locations = {};
          var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

          var marker;
          var promise = CultureService.list(lat, lon);
          promise.then(function(data) {

            $.each(data,
              function(k, v) {
                $('#debug').html($('#debug').html() + '<br>' + v.latitude + '<br>' + v.longitude + '<br>' + v.description + '<br>' + v.url);

                var position = new google.maps.LatLng(v.latitude, v.longitude);

                var marker_image = {
                  url: '/assets/marker.png',
                  size: new google.maps.Size(20, 32),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 32)
                };

                var shape = {
                  coords: [1, 1, 1, 20, 18, 20, 18, 1],
                  type: 'poly'
                };

                var marker = new google.maps.Marker({
                  position: position,
                  map: map,
                  icon: marker_image,
                  shape: shape
                });

                marker.setTitle(v.description);
                $scope.attachSecretMessage(marker, v.description);

              }
            );
          });
        });
      }
      // The five markers show a secret message when clicked
      // but that message is not within the marker's instance data
      $scope.attachSecretMessage = function(marker, name) {
        var infowindow = new google.maps.InfoWindow({
          content: name
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(marker.get('map'), marker);
        });
      }

      $scope.initialize();

    }

  ]);

}).call(this);