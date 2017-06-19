'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('application', {
      url: '/',
      template: '<application></application>'
    });
}
