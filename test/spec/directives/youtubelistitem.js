'use strict';

describe('Directive: youtubeListItem', function () {

  // load the directive's module
  beforeEach(module('youtubeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<youtube-list-item></youtube-list-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the youtubeListItem directive');
  }));
});
