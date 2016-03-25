'use strict';

/**
 * @ngdoc function
 * @name youtubeApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the youtubeApp
 */
angular.module('youtubeApp')
  .controller('DetailsCtrl', function (youtubeService, $routeParams, lodash) {
    var vm = this;
    vm.selected = {};
    youtubeService.getFeed(function(err, data){
      if(err) {
        return console.log(err);

      }
      vm.videoList = data.items;
      vm.videoId = $routeParams.videoId;
      vm.selected = lodash.find(vm.videoList, {id: vm.videoId});
      youtubeService.videoList = vm.videoList;
      console.log(youtubeService.videoList, vm.selected);
    });


  });
