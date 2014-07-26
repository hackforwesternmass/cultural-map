(function() {
    angular.module('cultureApp.services').factory('CultureService', [
      '$resource', '$rootScope',
      function($resource, $scope) {
        var service;
        service = $resource('/landmarks.json', {}, {
          'create': {
            method: 'POST'
          },
          'list': {
            method: 'GET',
            isArray: true
          },
          'show': {
            method: 'GET'
          }
        }, 'delete', {
          method: 'DELETE'
        });
        return {
          getLocation: function(callback) {
            navigator.geolocation.getCurrentPosition(function(pos) {
              var lat = pos.coords.latitude;
              var lon = pos.coords.longitude;
              callback(lat, lon);
            }, function() {
              alert("Please allow us to find your current location");
            });
        },
        create: function(new_badge) {

        },
        list: function(lat, lon) {
          var promise;
          promise = service.list({'lat':lat, 'lon' : lon}).$promise;
          return promise;
        },
        show: function(badge_id) {

        },
        "delete": function(badge_id) {

        },


      };
    }]);

}).call(this);