(function() {
  'use strict';
  angular.module('cultureApp.services', ['ngRoute', 'ngAnimate', 'ngResource', 'ng-rails-csrf']);

  angular.module('cultureApp', ['ngRoute', 'cultureApp.services', 'google-maps']);

}).call(this);
