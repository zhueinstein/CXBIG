'use strict';
    require('./bower_components/angular/angular.js')
    require('./bower_components/angular-route/angular-route.js')
    require('./home/home.js')
    require('./matchIntroduction/matchIntroduction.js')
    require('./matchColl/matchColl.js')
    require('./competitor/competitor.js')
    require('./news/news.js')
    require('./supportEnterprise/supportEnterprise.js')
    require('./apply/apply.js')
    require('./components/version/version.js')
    require('./components/version/version-directive.js')
    require('./components/version/interpolate-filter.js')
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.matchIntroduction',
  'myApp.matchColl',
  'myApp.competitor',
  'myApp.news',
  'myApp.supportEnterprise',
  'myApp.apply',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
