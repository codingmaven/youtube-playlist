'use strict';

/**
 * @ngdoc directive
 * @name youtubeApp.directive:youtubeListItem
 * @description
 * # youtubeListItem
 */
angular.module('youtubeApp')
  .directive('youtubeListItem', function (youtubeService) {
    return {
      templateUrl: 'views/youtubelistitem.html',
      restrict: 'E',
      scope: {
        data: '@',
        index: '@'
      },
      link: function postLink(scope) {
        scope.videoData = JSON.parse(scope.data);
        scope.clicked = function(){
          youtubeService.selectedVideo = youtubeService.videoList[scope.index];
          console.log(scope.index);
        };
        console.log(scope.data);
      }
    };
  });
