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
    vm.currentPage = 0;
    vm.pageSize = 6;

    youtubeService.getFeed(function(err, data){
      if(err) {
        return console.log(err);

      }
      vm.videoList = data.items;
      youtubeService.videoList = vm.videoList;
    });


    vm.numberOfPages=function(){
      return Math.ceil(vm.videoList.length/vm.pageSize);
    }
  });

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
angular.module('youtubeApp')
  .filter('startFrom', function() {
    return function(input, start) {
      start = +start; //parse to int
      return input.slice(start);
    }
  });
