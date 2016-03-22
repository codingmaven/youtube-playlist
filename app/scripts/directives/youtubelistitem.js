'use strict';

/**
 * @ngdoc directive
 * @name youtubeApp.directive:youtubeListItem
 * @description
 * # youtubeListItem
 */
angular.module('youtubeApp')
  .directive('youtubeListItem', function () {
    return {
      templateUrl: '../../views/youtubelistitem.html',
      restrict: 'E',
      scope: {
        data: '@'
      },
      link: function postLink(scope, element, attrs) {
        scope.videoData = JSON.parse(scope.data);
        console.log(JSON.parse(scope.data));
      }
    };
  });
