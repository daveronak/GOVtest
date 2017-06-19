'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './application.routes';

export class ApplicationComponent {

  saveUser = function(newUser) {
    this.$http.post('/api/userdatas', newUser)
      .then(response => {
        console.log('created', response.data);
        this.$state.go('applicationSuccess', { createdUser: response.data});
      }, err => {
        console.error(err);
      });
  };
  /*@ngInject*/
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
  }

  $onInit() {
    this.$http.get('https://restcountries.eu/rest/v1/region/Europe')
      .then(response => {
        this.countries = response.data;
      });
  }
}

export default angular.module('ronakDaveInterviewAngularNodeApp.application', [uiRouter])
  .config(routes)
  .component('application', {
    template: require('./application.html'),
    controller: ApplicationComponent,
    controllerAs: 'applicationCtrl'
  })
  .name;
