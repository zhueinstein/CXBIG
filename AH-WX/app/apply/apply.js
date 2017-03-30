'use strict';

angular.module('myApp.apply', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/apply', {
            templateUrl: 'apply/apply.html',
            controller: 'ApplyCtrl'
        });
    }])
    .controller('ApplyCtrl', [function() {

    }]);