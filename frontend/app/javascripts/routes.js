(function() {
  angular.module('cultureApp').config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      return $routeProvider.when('/mapView', {
        templateUrl: 'mapView.html',
        controller: 'LandmarkController'
      }).when('/listView', {
        templateUrl: 'listView.html',
        controller: 'LandmarkController'
      }).otherwise({
        redirectTo: '/mapView'
      });
    }
  ]);
}).call(this);