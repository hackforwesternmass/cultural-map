(function() {
  angular.module('cultureApp').controller('LandmarkController', [
    '$scope', '$location', '$modal', 'CultureService',
    function($scope, $location, $modal, CultureService) {

      $scope.list = function() {
        return CultureService.list().then(function(result) {

        });
      },

      $scope.addLandmarks = function() {

        // var mapOptions = $scope.map;

        // var locations = {};
        // var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        // $.each($.landmarks, function() {

        //   var position = new google.maps.LatLng(v.latitude, v.longitude);

        //   var marker_image = {
        //     url: '/assets/marker.png',
        //     size: new google.maps.Size(20, 32),
        //     origin: new google.maps.Point(0, 0),
        //     anchor: new google.maps.Point(0, 32)
        //   };

        //   var shape = {
        //     coords: [1, 1, 1, 20, 18, 20, 18, 1],
        //     type: 'poly'
        //   };

        //   var marker = new google.maps.Marker({
        //     position: position,
        //     map: map,
        //     icon: marker_image,
        //     shape: shape
        //   });

        //   marker.setTitle(v.description);
        //   $scope.attachSecretMessage(marker, v.description);
        // });
      },

      $scope.map = {
        center: {
          latitude: 42,
          longitude: -72
        },
        zoom: 8,
      },

      $scope.mapOptions = {
        scrollWheel: true,
        draggable: true
      },

      $scope.landmarkClick = function(landmarkClicked) {


        var ModalInstanceCtrl = function($scope, $modalInstance, $rootScope, landmark) {

          $scope.landmark = landmark;

          // reload is a hack. we can only click on marker once, get "Cannot set property 'isDrawn' of undefined" on second click of marker 
          $scope.reload = function(){
            window.location.reload();
          }
        };

        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: ModalInstanceCtrl,
          resolve: {
            landmark: function() {
              return landmarkClicked;
            },
          },
        });

        modalInstance.result.then($scope.reload, $scope.reload);

      },


      $scope.reload = function() {
        window.location.reload();
      },


      $scope.initialize = function() {
        CultureService.getLocation(function(lat, lon) {
          $scope.map = {
            zoom: 13,
            center: {
              latitude: lat,
              longitude: lon
            },
            scrollwheel: true,
            fitBounds: false,
            draggable: true,
            marker_image: {
              url: "/assets/marker_" + window.cmconfig.site + ".png",
              size: new google.maps.Size(20, 32),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 32)
            },
            marker_options: {
              shape: {
                coords: [1, 1, 1, 20, 18, 20, 18, 1],
                type: 'poly'
              }
            },
          };
          var promise = CultureService.list(lat, lon);
          promise.then(function(data) {
            $scope.landmarks = data;

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
