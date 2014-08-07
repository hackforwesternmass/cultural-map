'use strict';

var appResources = angular.module('cultureApp.resources', ["rails"]);

appResources.factory('Landmark', function(railsResourceFactory, $q) {
  var resource = railsResourceFactory({
    url: '/api/landmarks',
    name: 'landmark'
  });

  return resource;
});
