'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import application from '../app/application/application.component';
import applicationSuccess from '../app/applicationSuccess/applicationSuccess.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.scss';

angular.module('ideaProjectsApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, navbar,
  footer, application, applicationSuccess, constants, util
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['ideaProjectsApp'], {
      strictDi: true
    });
  });
