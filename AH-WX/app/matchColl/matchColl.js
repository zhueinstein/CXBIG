'use strict';

var app = angular.module('myApp.matchColl', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('matchColl', {
        url: "/matchColl",
        templateUrl: 'matchColl/matchColl.html',
        controller: 'MatchCollCtrl'
    }).state('coll-corporation-conference', {
        url: "/coll-corporation-conference",
        templateUrl: 'matchColl/coll-matches/coll-corporation-conference.html',
        controller: 'MatchCollCtrl'
    }).state('matchCollVideo', {
        url: "/matchCollVideo",
        templateUrl: 'matchColl/matchCollVideo.html',
        controller: 'MatchCollCtrl'
    }).state('video-detail', {
        url: "/video-detail/:id",
        templateUrl: 'matchColl/video-detail.html',
        controller: 'MatchCollCtrl'
    });
}])

    .controller('MatchCollCtrl', function ($scope, $state, $stateParams) {
        $scope.videos = [
            {
                id: 0,
                title: "首届中国影视歌曲...",
                cover: "../resources/images/588ae4b560bbf.jpg",
                url: "http://vjs.zencdn.net/v/oceans.mp4"
            },
            {
                id: 1,
                title: "安徽赛区启动仪式",
                cover: "../resources/images/ahgsdskq.png",
                url: "http://ool42cwl5.bkt.clouddn.com/job_video/zgysgequgsdsfbhahsq.mp4"
            }
        ];

        if ($stateParams.id) {
            $scope.currentUrl = $scope.videos[$stateParams.id].url;
            $scope.currentTitle = $scope.videos[$stateParams.id].title;
        }
        $scope.goDetail = function (id) {
            $state.go("video-detail", {id: id})
        }
    });
app.directive("topOfTheViewJj", function () {
    return {
        template: '<div class="ssjj_s1 tc mt40 fix pl15"><a href="#/matchColl" class="on">精彩集锦</a><a    href="#/matchCollVideo">精彩视频</a></div><div class="height"></div>'
    };
})
app.directive("topOfTheViewSp", function () {
    return {
        template: '<div class="ssjj_s1 tc mt40 fix pl15"><a href="#/matchColl" >精彩集锦</a><a' +
        '    href="#/matchCollVideo" class="on">精彩视频</a></div><div class="height"></div>'
    };
})