'use strict';

const  app = angular.module('myApp.matchColl', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/matchColl', {
            templateUrl: 'matchColl/matchColl.html',
            controller: 'MatchCollCtrl'
        }).when('/coll-corporation-conference', {
            templateUrl: 'matchColl/coll-matches/coll-corporation-conference.html',
            controller: 'MatchCollCtrl'
        }).when('/matchCollVideo', {
            templateUrl: 'matchColl/matchCollVideo.html',
            controller: 'MatchCollCtrl'
        }).when('/video-detail', {
            templateUrl: 'matchColl/video-detail.html',
            controller: 'MatchCollCtrl'
        });
    }])

    .controller('MatchCollCtrl', function($scope) {
            $scope.videos = [
                {title:"首届中国影视歌曲歌手...",cover:"../resources/images/588ed2e514523.jpg",url:"http://vjs.zencdn.net/v/oceans.mp4"},
                {title:"首届中国影视歌曲歌手...",cover:"../resources/images/588ed2e514523.jpg",url:"http://vjs.zencdn.net/v/oceans.mp4"}
            ];
        $scope.png25 = "../resources/images/588ae4b560bbf.jpg";
    });
    app.directive("topOfTheView", function () {
        return {
            template: '<div class="ssjj_s1 tc mt40 fix pl15"><a href="#!matchColl" class="on">精彩集锦</a><a    href="#!matchCollVideo">精彩视频</a></div><div class="height"></div>'
        };
    })