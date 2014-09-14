(function() {
  angular.module('cultureApp').controller('LandmarkController', [
    '$scope', '$location', '$modal', 'CultureService',
    function($scope, $location, $modal, CultureService) {

      $scope.list = function() {
        return CultureService.list().then(function(result) {

        });
      },


      $scope.map = {
        center: {
          latitude: 42.3295905,
          longitude: -72.6633999
        },
        zoom: 15,
      },

      $scope.landmarkClick = function(landmarkClicked) {
        $scope.openLandmarkModal(landmarkClicked);
      },

      $scope.openLandmarkModal = function(landmark) {
            var ModalInstanceCtrl = function($scope, $modalInstance, $rootScope, landmark) {
          $scope.landmark = landmark;
        };

        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: ModalInstanceCtrl,
          resolve: {
            landmark: function() {
              return landmark;
            },
          },
        });

        modalInstance.result.then(modalInstance.close, modalInstance.close);

      },

      // reload is a hack. we can only click on marker once, get "Cannot set property 'isDrawn' of undefined" on second click of marker 
     
      $scope.reload = function(){
        // window.location.reload();
       $location.path("/#/mapView");
      },

      $scope.initialize = function() {
        CultureService.getLocation(function(lat, lon) {
          $scope.map = {
            zoom: 13,
            center: {
              latitude: lat,
              longitude: lon
            },
            // scrollwheel: true,
            // fitBounds: false,
            // draggable: true,
            // marker_image: {
            //   url: "/assets/marker_" + window.cmconfig.site + ".png",
            //   size: new google.maps.Size(20, 32),
            //   origin: new google.maps.Point(0, 0),
            //   anchor: new google.maps.Point(0, 32)
            // },
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
