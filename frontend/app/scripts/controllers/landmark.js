'use strict';

angular.module('cultureApp.controllers').controller('LandmarkController', function($scope, $location, LandmarkService) {
  LandmarkService.landmarks().then(function(data) {
    $scope.landmarks = data;
  });

  $scope.map = {
    center: {
      latitude: 42.3295905,
      longitude: -72.6633999
    },
    zoom: 15
  };

  $scope.initialize = function() {
    LandmarkService.getLocation(function(lat, lon) {
      $scope.map = {
        zoom: 13,
        center: {
          latitude: lat,
          longitude: lon
        },

        marker_image: {
          url: "/images/marker_" + window.cmconfig.site + ".png",
          size: new google.maps.Size(20, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32)
        },
        marker_options: {
          shape: {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
          }
        }
      };

      var promise = LandmarkService.list(lat, lon);
      promise.then(function(data) {
        $scope.landmarks = data;
      });
    });
  };

  $scope.landmarkClick = function(landmarkClicked) {


    var ModalInstanceCtrl = function($scope, $modalInstance, $rootScope, landmark) {

      $scope.landmark = landmark;

      // reload is a hack. we can only click on marker once, get "Cannot set property 'isDrawn' of undefined" on second click of marker 
      $scope.reload = function(){
        window.location.reload();
      };
    };

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        landmark: function() {
          return landmarkClicked;
        }
      }
    });

    modalInstance.result.then();
  };

  $scope.initialize();

});
