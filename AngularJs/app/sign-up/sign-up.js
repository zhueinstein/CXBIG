'use strict';

angular.module('myApp.sign-up', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/sign-up', {
            templateUrl: 'sign-up/sign-up.html',
            controller: 'sign-upCtrl'
        });
    }])

    .controller('sign-upCtrl', [function() {

    }]);