'use strict';

/**
 * @ngdoc service
 * @name youtubeApp.youtubeService
 * @description
 * # youtubeService
 * Factory in the youtubeApp.
 */
angular.module('youtubeApp')
  .factory('youtubeService', function ($http) {
    var feedUrl = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw";
    var videoList = [];
    var selectedVideo = {};
    // Public API here
    return {
      getFeed: function (callback) {
        $http({
          method: 'get',
          url: feedUrl
        })
          .then(function(data) {
            var response = data.data;
            callback(null, response);
          }, function(x) {
            callback(x);
          });
      },
      videoList: videoList,
      selectedVideo: selectedVideo
    };
  });
