'use strict';

/**
 * @ngdoc function
 * @name youtubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the youtubeApp
 */
angular.module('youtubeApp')
  .controller('MainCtrl', function (youtubeService) {
    var vm = this;
    vm.videoList = [];

    youtubeService.getFeed(function(err, data){
      if(err) {
        return console.log(err);

      }
      vm.videoList = data.items;
      youtubeService.videoList = vm.videoList;
    })

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
