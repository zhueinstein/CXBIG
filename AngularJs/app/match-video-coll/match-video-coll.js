'use strict';

angular.module('myApp.match-video-coll', ['ui.router'])
    .controller('match-video-collCtrl', function ($scope, $stateParams, $state) {
        $scope.videos = [
            {
                id: "0",
                title: "首届中国影视歌曲歌手大赛组委会向全国人民拜年",
                date: "2017-04-11",
                url: "http://vjs.zencdn.net/v/oceans.mp4",
                img: "http://ool42cwl5.bkt.clouddn.com/images/news/588ed2e514523.jpg"
            },
            {
                id: "1",
                title: "中国影视歌曲歌手大赛开启",
                date: "2017-04-11",
                url: "http://ok0zj7no0.bkt.clouddn.com/videos/2017/01cx.mp4",
                img: "http://ool42cwl5.bkt.clouddn.com/images/news/588ae4b560bbf.jpg"
            },
            {
                id: "2",
                title: "北京赛区启动仪式",
                date: "2017-04-11",
                url: "http://vjs.zencdn.net/v/oceans.mp4",
                img: "http://ool42cwl5.bkt.clouddn.com/images/news/588b0e9ae40fd.jpg"
            },
            {
                id: "3",
                title: "北京赛区启动仪式",
                date: "2017-04-11",
                url: "http://vjs.zencdn.net/v/oceans.mp4",
                img: "http://ool42cwl5.bkt.clouddn.com/images/news/588b0e9ae40fd.jpg"
            }

        ]
        $scope.sp_03 = "http://ool42cwl5.bkt.clouddn.com/images/sp-03.png"
        $scope.to_play = function (id) {
            $state.go("match-video-play", {id:id})
        }
        if($stateParams.id){
            $scope.playUrl = ($scope.videos[$stateParams.id]).url;
            $scope.playTitle = ($scope.videos[$stateParams.id]).title;
            $scope.playPoster = ($scope.videos[$stateParams.id]).img;
        }
    });