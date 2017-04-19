'use strict';


    require('./bower_components/angular/angular.min.js')
    require('./bower_components/angular-route/angular-route.min.js')
    require('./bower_components/angular-ui-router/release/angular-ui-router.min.js')
    require('./matchIntroduction/matchIntroduction.js')
    require('./matchColl/matchColl.js')
    require('./news/news.js')
    require('./components/version/version.js')
    require('./components/version/version-directive.js')
    require('./components/version/interpolate-filter.js')
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.matchIntroduction',
  'myApp.matchColl',
  'myApp.news',
  'myApp.version'
]).
config(['$locationProvider', '$stateProvider','$urlRouterProvider', function($locationProvider, $stateProvider,$urlRouterProvider) {
    $stateProvider.state('apply', {
        url:"/apply",
        templateUrl: 'apply/apply.html',
    }).state('competitor', {
        url:"/competitor",
        templateUrl: 'competitor/competitor.html',
    }).state('home', {
        url:"/home",
        templateUrl: 'home/home.html',
        controller:"NewsCtrl"
    }).state('supportEnterprise', {
        url:"/supportEnterprise",
        templateUrl: 'supportEnterprise/supportEnterprise.html',
    });
    $urlRouterProvider.otherwise("/home")
}]);
