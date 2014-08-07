angular.module('cultureApp', [
  'ngRoute',
  'ngCookies',
  'cultureApp.controllers',
  'cultureApp.services',
  'cultureApp.directives',
  'cultureApp.resources',
  'google-maps',
  'underscore'
]).config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/mapview', {
    templateUrl: '/templates/mapview.html',
    controller: 'LandmarkController'
  }).when('/listview', {
    templateUrl: '/templates/listview.html',
    controller: 'LandmarkController'
  }).otherwise({redirectTo: '/mapview'});
}).run(function($injector) {
  // For testing purposes
  window.Landmark = $injector.get("Landmark");
  window.LandmarkService = $injector.get("LandmarkService");
});
