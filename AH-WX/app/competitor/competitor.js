'use strict';

angular.module('myApp.competitor', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/competitor', {
            templateUrl: 'competitor/competitor.html',
            controller: 'competitorCtrl'
        });
    }])
    .controller('competitorCtrl', [function() {

    }]);