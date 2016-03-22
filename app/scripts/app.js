'use strict';

/**
 * @ngdoc overview
 * @name youtubeApp
 * @description
 * # youtubeApp
 *
 * Main module of the application.
 */
angular
  .module('youtubeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'youtube-embed'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
