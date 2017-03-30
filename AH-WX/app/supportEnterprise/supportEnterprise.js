'use strict';

angular.module('myApp.supportEnterprise', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/supportEnterprise', {
        templateUrl: 'supportEnterprise/supportEnterprise.html',
        controller: 'SupportEnterpriseCtrl'
    });
}])

    .controller('SupportEnterpriseCtrl', [function() {

    }]);
