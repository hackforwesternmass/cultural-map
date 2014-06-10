(function() {
  angular.module('cultureApp').config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      return $routeProvider.when('/mapView', {
        templateUrl: '/assets/mapView.html',
        controller: 'MapController'
      }).when('/listView', {
        templateUrl: '/assets/listView.html',
        controller: 'ListController'
      }).otherwise({
        redirectTo: '/mapView'
      });
    }
  ]);
}).call(this);