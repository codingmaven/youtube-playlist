'use strict';

/**
 * @ngdoc function
 * @name youtubeApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the youtubeApp
 */
angular.module('youtubeApp')
  .controller('DetailsCtrl', function (youtubeService) {
    var vm = this;
    vm.selected = youtubeService.selectedVideo;

    console.log(youtubeService.selectedVideo);
  });
