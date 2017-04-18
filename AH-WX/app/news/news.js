'use strict';

var  news = angular.module('myApp.news', ['ui.router']);

    news.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('news', {
            url:"/news",
            templateUrl: 'news/news.html',
            controller: 'NewsCtrl'
        }).state('notices', {
            url:"/notices",
            templateUrl: 'news/notices.html',
            controller: 'NewsCtrl'
        }).state('new-AH-signing-ceremony', {
            url:"/new-AH-signing-ceremony",
            templateUrl: 'news/coll-news/new-AH-signing-ceremony.html',
            controller: 'NewsCtrl'
        });
    }])

    .controller('NewsCtrl', function($anchorScroll) {
        $location.hash('top');
        $anchorScroll();

    });
news.directive("topOfTheViewOne", function () {
        return{
            template:'<div class="ssjj_s1 tc mt40 fix pl15"><a href="#/news" class="on">赛事新闻</a><a' +
            ' href="#/notices">公告</a></div><div class="height"><a id="top"></a></div>'
        }
    })

news.directive("topOfTheViewTwo", function () {
        return{
            template:'<div class="ssjj_s1 tc mt40 fix pl15"><a href="#/news" >赛事新闻</a><a href="#/notices"class="on">公告</a></div><div class="height"></div>'
        }
    })
