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
            var myUrl = 'http://localhost:8099/a/rule/order/add?callback=JSON_CALLBACK&user='+ JSON.stringify($scope.user);
           console.log(JSON.stringify($scope.user))
        $http.jsonp(myUrl).success(function(response) {
            console.log(response);
            $scope.myarr = response;
        });
        /*$http({
            method: 'GET',
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            console.log($scope.user)
        });*/
    }
    });
