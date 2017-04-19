'use strict';

var  news = angular.module('myApp.apply', ['ui.router'])

    .controller('ApplyCtrl', function($location, $anchorScroll, $scope, $http) {
       $scope.user = {name: "朱伟峰",
        sex
        :
        "男",
        telephone
        :
        "15210976357",
        address
        :
        "河南省商丘市夏邑县",
        group
        :
        "青年组"
    }

    $scope.submit = function () {
           console.log($scope.user)
        $http({
            method: 'GET',
            url: '/someUrl'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log($scope.user)
        });
    }
    });
