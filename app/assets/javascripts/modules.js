(function() {
  'use strict';
  angular.module('cultureApp.services', ['ngRoute', 'ngAnimate', 'ngResource', 'ng-rails-csrf', 'google-maps', 'mm.foundation']);

  angular.module('cultureApp', ['ngRoute', 'cultureApp.services']);

}).call(this);
