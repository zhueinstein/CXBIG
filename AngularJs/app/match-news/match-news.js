'use strict';

var matchNews = angular.module('myApp.match-news', ['ngRoute']);
matchNews.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/match-news', {
    templateUrl: 'match-news/match-news.html',
    controller: 'match-newsCtrl'
  }).when('/match-news2', {
    templateUrl: 'match-news/match-news2.html',
    controller: 'match-newsCtrl'
  }).when('/match-news3', {
    templateUrl: 'match-news/match-news3.html',
    controller: 'match-newsCtrl'
  }).when('/new-AH-singing-ceremony', {
        templateUrl: 'match-news/new-AH-singing-ceremony.html',
        controller: 'match-newsCtrl'
    }).when('/news-Corporation-NewYear-activities', {
        templateUrl: 'match-news/news-Corporation-NewYear-activities',
        controller: 'match-newsCtrl'
    }).when('/news-Corporation-Wish-NewYear', {
        templateUrl: 'match-news/news-Corporation-Wish-NewYear.html',
        controller: 'match-newsCtrl'
    }).when('/news-SAX-conference', {
        templateUrl: 'match-news/news-SAX-conference.html',
        controller: 'match-newsCtrl'
    }).when('/news-SX-NewYear-activities', {
        templateUrl: 'match-news/news-SX-NewYear-activities.html',
        controller: 'match-newsCtrl'
    }).when('/news-BJ-apply', {
        templateUrl: 'match-news/news-BJ-apply.html',
        controller: 'match-newsCtrl'
    }).when('/news-SAX-signing-ceremony', {
        templateUrl: 'match-news/news-SAX-signing-ceremony.html',
        controller: 'match-newsCtrl'
    }).when('/news-HB-SJZ-young-mass-election-over', {
        templateUrl: 'match-news/news-HB-SJZ-young-mass-election-over.html',
        controller: 'match-newsCtrl'
    }).when('/news-SX-signing-ceremony', {
        templateUrl: 'match-news/news-SX-signing-ceremony.html',
        controller: 'match-newsCtrl'
    }).when('/news-GX-conference', {
        templateUrl: 'match-news/news-GX-conference.html',
        controller: 'match-newsCtrl'
    }).when('/news-HB-SJZ-conference', {
        templateUrl: 'match-news/news-HB-SJZ-conference.html',
        controller: 'match-newsCtrl'
    }).when('/news-HB-conference', {
        templateUrl: 'match-news/news-HB-conference.html',
        controller: 'match-newsCtrl'
    }).when('/news-BJ-conference', {
        templateUrl: 'match-news/news-BJ-conference.html',
        controller: 'match-newsCtrl'
    }).when('/news-JL-BaYi-music', {
        templateUrl: 'match-news/news-JL-BaYi-music.html',
        controller: 'match-newsCtrl'
    }).when('/news-JL-20160619-quarter-final', {
        templateUrl: 'match-news/news-JL-20160619-quarter-final.html',
        controller: 'match-newsCtrl'
    }).when('/news-Corporation-memory-90-forum', {
        templateUrl: 'match-news/news-Corporation-memory-90-forum.html',
        controller: 'match-newsCtrl'
    }).when('/news-HLJ-DQ-extends-sprite', {
        templateUrl: 'match-news/news-HLJ-DQ-extends-sprite.html',
        controller: 'match-newsCtrl'
    }).when('/news-HLJ-DQ-first-mass-election', {
        templateUrl: 'match-news/news-HLJ-DQ-first-mass-election.html',
        controller: 'match-newsCtrl'
    }).when('/news-NMG-conference', {
        templateUrl: 'match-news/news-NMG-conference.html',
        controller: 'match-newsCtrl'
    }).when('/news-GZ-conference', {
        templateUrl: 'match-news/news-GZ-conference.html',
        controller: 'match-newsCtrl'
    }).when('/news-Corporation-we-activities', {
        templateUrl: 'match-news/news-Corporation-we-activities.html',
        controller: 'match-newsCtrl'
    }).when('/news-HLJ-DQ-conference', {
        templateUrl: 'match-news/news-HLJ-DQ-conference.html',
        controller: 'match-newsCtrl'
    }).when('/news-HN-conference', {
        templateUrl: 'match-news/news-HN-conference.html',
        controller: 'match-newsCtrl'
    }).when('/news-HLJ-JL-apply', {
        templateUrl: 'match-news/news-HLJ-JL-apply.html',
        controller: 'match-newsCtrl'
    }).when('/news-Corporation-must-know', {
        templateUrl: 'match-news/news-Corporation-must-know.html',
        controller: 'match-newsCtrl'
    }).when('/news-Corporation-love-country', {
        templateUrl: 'match-news/news-Corporation-love-country.html',
        controller: 'match-newsCtrl'
    }).when('/news-Corporation-ygs-conference', {
        templateUrl: 'match-news/news-Corporation-ygs-conference.html',
        controller: 'match-newsCtrl'
    });
}]).controller("match-newsCtrl",function ($scope) {
    $scope.reloadRoute = function () {
        $window.location.reload();
    };
});
matchNews.directive("leftShowDirective", function () {
    return{
        template:'  <div class="fl tc" ><h4>最新资讯</h4> <ul>   <li class="on"><a' +
        ' href="#!match-news">赛事新闻</a></li></ul></div>'
    };
})
matchNews.directive("topShowDirective", function () {
    return{
        template:' <div class="title fix"> <a href="#!shouye">首页</a> &gt; <a href="#!match-news">最新资讯</a> &gt; <a href="#!match-news" class="on">赛事新闻</a> </div>'
    };
})