'use strict';

const  news = angular.module('myApp.news', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/news', {
            templateUrl: 'news/news.html',
            controller: 'NewsCtrl'
        }).when('/notices', {
            templateUrl: 'news/notices.html',
            controller: 'NewsCtrl'
        }).when('/new-AH-signing-ceremony', {
            templateUrl: 'news/coll-news/new-AH-signing-ceremony.html',
            controller: 'NewsCtrl'
        });
    }])

    .controller('NewsCtrl', [function() {

    }]);
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
