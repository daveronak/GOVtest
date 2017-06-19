'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './applicationSuccess.routes';

export class ApplicationSuccessComponent {
  /*@ngInject*/
  constructor($stateParams) {
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.createdUser = this.$stateParams.createdUser;
  }
}

export default angular.module('ronakDaveInterviewAngularNodeApp.applicationSuccess', [uiRouter])
  .config(routes)
  .component('applicationSuccess', {
    template: require('./applicationSuccess.html'),
    controller: ApplicationSuccessComponent,
    controllerAs: 'applicationSuccessCtrl'
  })
  .name;
