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
               var lat = '42.3295905';
               var lon = '-72.6633999';
               var subdomain = location.hostname.split('.')[0];
               if (subdomain == 'northampton') {
                 lat = '42.3295905';
                 lon = '-72.6633999';
	       } else if (subdomain == 'holyoke') {
                 lat = '42.2240909';
                 lon = '-72.640495';
	       } else if (subdomain == 'amherst') {
                 lat = '42.3676145';
                 lon = '-72.5054909';
               }; 
               callback(lat, lon);
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
