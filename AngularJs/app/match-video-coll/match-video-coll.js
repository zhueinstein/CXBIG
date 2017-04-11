'use strict';

angular.module('myApp.match-video-coll', ['ngRoute'])
    .controller('match-video-collCtrl', function ($scope, $stateParams) {
$scope.videos = [
    {id:"1",title:"首届中国影视歌曲歌手大赛组委会向...",date:"2017-04-11", url:"http://vjs.zencdn.net/v/oceans.mp4",img:"../resources/images/news/588ed2e514523.jpg"},
    {id:"2",title:"中国影视歌曲歌手...",date:"2017-04-11", url:"http://vjs.zencdn.net/v/oceans.mp4",img:"../resources/images/news/588ae4b560bbf.jpg"},
    {id:"3",title:"北京赛区启动仪式",date:"2017-04-11", url:"http://vjs.zencdn.net/v/oceans.mp4",img:"../resources/images/news/588b0e9ae40fd.jpg"},
    {id:"4",title:"北京赛区启动仪式",date:"2017-04-11", url:"http://vjs.zencdn.net/v/oceans.mp4",img:"../resources/images/news/588b0e9ae40fd.jpg"}

]
    $scope.sp_03="../resources/images/sp-03.png"
    $scope.playUrl = $stateParams.url;
    });