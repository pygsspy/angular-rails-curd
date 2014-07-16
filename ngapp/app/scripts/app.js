'use strict';

angular.module('notesApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/show/:id', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .when('/update/:id', {
        templateUrl: 'views/update.html',
        controller: 'UpdateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
