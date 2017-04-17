'use strict';

angular.module('myApp.support-enterprises', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('support-enterprises', {
            url:"/support-enterprises",
            views:{
                'index':{
                    templateUrl: 'support-enterprises/support-enterprises.html',
                    controller: 'support-enterprisesCtrl'
                }
            }
        });
    }])

    .controller('support-enterprisesCtrl', [function() {

    }]);