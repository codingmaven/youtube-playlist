'use strict';

describe('Controller: DetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('youtubeApp'));

  var DetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailsCtrl = $controller('DetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach selected object to the controller', function () {
    expect(DetailsCtrl.selected.constructor === Object).toBe(true);
  });
});
