'use strict';

var appServices = angular.module('cultureApp.services',[]);

appServices.service('LandmarkService', function($q, $http, Landmark) {
  this.landmarks = function() {
    var d = $q.defer();
    Landmark.query().then(function(data) {
      if (data)
        d.resolve(data);
      else
        d.reject(null);
    });

    return d.promise;
  };

  this.getLocation = function(callback) {
    var lat = '42.3295905';
    var lon = '-72.6633999';
    var subdomain = location.hostname.split('.')[0];
    if (subdomain == 'holyoke') {
      lat = '42.2240909';
      lon = '-72.640495';
    }

    if (subdomain == 'amherst') {
      lat = '42.3676145';
      lon = '-72.5054909';
    }

    callback(lat,lon);
  }

  this.list = function(lat, lon) {
    return Landmark.query({'lat': lat, 'lon': lon})
  }
});
