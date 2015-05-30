angular.module("app", ["ngResource", "ngRoute", "picardy.fontawesome"]).run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };
});

angular.module('app').constant('API_URL', 'http://localhost:3000/quenolosepamama/api/v1');
