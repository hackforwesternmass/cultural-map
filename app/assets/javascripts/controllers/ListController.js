(function() {
  angular.module('cultureApp').controller('ListController', [
    '$scope', '$location', 'CultureService', function($scope, $location, CultureService) {
      
      $scope.list = function() {
        return CultureService.list().then(function(result) {


        });
      };
     
    }
  ]);

}).call(this);