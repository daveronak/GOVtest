'use strict';

import application from './application.component';
import {
  ApplicationController
} from './application.component';

describe('Component: ApplicationComponent', function() {
  beforeEach(angular.mock.module(application));
  beforeEach(angular.mock.module('stateMock'));

  var scope;
  var applicationComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('https://restcountries.eu/rest/v1/region/Europe')
      .respond([{name:'France'},{name:'America'},{name:'China'},{name:'Azerbaijan'}]);

    scope = $rootScope.$new();
    state = $state;
    applicationComponent = $componentController('application', {
      $http,
      $scope: scope
    });
  }));

  it('should attach a list of countries to the controller', function() {
    applicationComponent.$onInit();
    $httpBackend.flush();
    expect(applicationComponent.countries.length)
      .toBe(4);
  });

 /* // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('https://restcountries.eu/rest/v1/region/Europe')
      .passThrough();

    scope = $rootScope.$new();
    state = $state;
    applicationComponent = $componentController('application', {
      $http,
      $scope: scope
    });
  }));

  it('should attach a list of countries comming from the API to the controller', function(){
    applicationComponent.$onInit();
    $httpBackend.flush();
    expect(applicationComponent.countries.length).toBeGreaterThan(10);
  })*/
});
