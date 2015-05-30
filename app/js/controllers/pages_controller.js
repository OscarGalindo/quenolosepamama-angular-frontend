angular.module('app').controller('PagesCtrl', function($scope, $http, API_URL) {
  $http.get(API_URL + '/pages').
    success(function(data, status, headers, config) {
      $scope.pages = data;
    }).
    error(function(data, status, headers, config) {
      console.log('error:' + data);
    });
});
