'use strict';

angular.module('myApp.match-notice', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/match-notice', {
            templateUrl: 'match-notice/match-notice.html',
            controller: 'match-noticeCtrl'
        });
    }])

    .controller('match-noticeCtrl', [function() {

    }]);