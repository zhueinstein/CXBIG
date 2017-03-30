'use strict';

angular.module('myApp.support-enterprises', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/support-enterprises', {
            templateUrl: 'support-enterprises/support-enterprises.html',
            controller: 'support-enterprisesCtrl'
        });
    }])

    .controller('support-enterprisesCtrl', [function() {

    }]);