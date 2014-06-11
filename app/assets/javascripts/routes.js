(function() {
  angular.module('cultureApp').config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      return $routeProvider.when('/mapView', {
        templateUrl: 'mapView.html',
        controller: 'MapController'
      }).when('/listView', {
        templateUrl: 'listView.html',
        controller: 'ListController'
      }).otherwise({
        redirectTo: '/mapView'
      });
    }
  ]);
}).call(this);