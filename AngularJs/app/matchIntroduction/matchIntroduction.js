'use strict';

// Declare app level module which depends on views, and components


angular.module('myApp.matchIntroduction', ['ui.router'])
    .controller("MatchIntroductionCtrl",function ($scope, $state, $location,$stateParams) {
        $scope.organization = $stateParams.organization;
        $scope.introduction = $stateParams.introduction;
        $scope.group = $stateParams.group;
        $scope.guests = $stateParams.guests;
        $scope.guwenpw = $stateParams.guwenpw;
        $scope.media = $stateParams.media;
        $scope.communication = $stateParams.communication;
        $scope.onSelect = function (item) {
                console.log(item === "guests")
                if(item == "organization") {
                        $scope.organization = 'on';
                }
                if(item == "introduction") {
                        $scope.introduction = 'on';
                }
                if(item == "group") {
                         $scope.group = 'on';
                }
                if(item == "guests") {
                        console.log("111111")
                         $scope.guests = 'on';
                        console.log($scope.guests)
                }
                if(item == "guwenpw") {
                         $scope.guwenpw = 'on';
                }
                if(item == "media") {
                        $scope.media = 'on';
                }
                if(item == "communication") {
                        $scope.communication = 'on';
                }


        }

});
