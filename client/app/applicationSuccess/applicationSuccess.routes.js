'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('applicationSuccess', {
      url: '/applicationSuccess',
      template: '<application-success></application-success>',
      params: {
        createdUser: null,
      },
    });
}
