'use strict';

var matchNews = angular.module('myApp.match-news', ['ui.router']);
matchNews.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('match-news', {
        url: '/match-news',
        views: {
            'index': {
                templateUrl: 'match-news/match-news.html',
                controller: 'match-newsCtrl'
            }
        }
    }).state('match-news2', {
        url: '/match-news2', views: {
            'index': {
                templateUrl: 'match-news/match-news2.html',
                controller: 'match-newsCtrl'
            }
        }
    }).state('match-news3', {
        url: '/match-news3', views: {
            'index': {
                templateUrl: 'match-news/match-news3.html',
        controller: 'match-newsCtrl'
    }
}
}).
state('new-AH-singing-ceremony', {
    url: '/new-AH-singing-ceremony', views: {
        'index': {
            templateUrl: 'match-news/new-AH-singing-ceremony.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-Corporation-NewYear-activities', {
    url: '/news-Corporation-NewYear-activities', views: {
        'index': {
            templateUrl: 'match-news/news-Corporation-NewYear-activities',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-Corporation-Wish-NewYear', {
    url: '/news-Corporation-Wish-NewYear', views: {
        'index': {
            templateUrl: 'match-news/news-Corporation-Wish-NewYear.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-SAX-conference', {
    url: '/news-SAX-conference', views: {
        'index': {
            templateUrl: 'match-news/news-SAX-conference.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-SX-NewYear-activities', {
    url: '/news-SX-NewYear-activities', views: {
        'index': {
            templateUrl: 'match-news/news-SX-NewYear-activities.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-BJ-apply', {
    url: '/news-BJ-apply', views: {
        'index': {
            templateUrl: 'match-news/news-BJ-apply.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-SAX-signing-ceremony', {
    url: '/news-SAX-signing-ceremony', views: {
        'index': {
            templateUrl: 'match-news/news-SAX-signing-ceremony.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-HB-SJZ-young-mass-election-over', {
    url: '/news-HB-SJZ-young-mass-election-over', views: {
        'index': {
            templateUrl: 'match-news/news-HB-SJZ-young-mass-election-over.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-SX-signing-ceremony', {
    url: '/news-SX-signing-ceremony', views: {
        'index': {
            templateUrl: 'match-news/news-SX-signing-ceremony.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-GX-conference', {
    url: '/news-GX-conference', views: {
        'index': {
            templateUrl: 'match-news/news-GX-conference.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-HB-SJZ-conference', {
    url: '/news-HB-SJZ-conference', views: {
        'index': {
            templateUrl: 'match-news/news-HB-SJZ-conference.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-HB-conference', {
    url: '/news-HB-conference', views: {
        'index': {
            templateUrl: 'match-news/news-HB-conference.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-BJ-conference', {
    url: '/news-BJ-conference', views: {
        'index': {
            templateUrl: 'match-news/news-BJ-conference.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-JL-BaYi-music', {
    url: '/news-JL-BaYi-music', views: {
        'index': {
            templateUrl: 'match-news/news-JL-BaYi-music.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-JL-20160619-quarter-final', {
    url: '/news-JL-20160619-quarter-final', views: {
        'index': {
            templateUrl: 'match-news/news-JL-20160619-quarter-final.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-Corporation-memory-90-forum', {
    url: '/news-Corporation-memory-90-forum', views: {
        'index': {
            templateUrl: 'match-news/news-Corporation-memory-90-forum.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-HLJ-DQ-extends-sprite', {
    url: '/news-HLJ-DQ-extends-sprite', views: {
        'index': {
            templateUrl: 'match-news/news-HLJ-DQ-extends-sprite.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-HLJ-DQ-first-mass-election', {
    url: '/news-HLJ-DQ-first-mass-election', views: {
        'index': {
            templateUrl: 'match-news/news-HLJ-DQ-first-mass-election.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-NMG-conference', {
    url: '/news-NMG-conference', views: {
        'index': {
            templateUrl: 'match-news/news-NMG-conference.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-GZ-conference', {
    url: '/news-GZ-conference', views: {
        'index': {
            templateUrl: 'match-news/news-GZ-conference.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-Corporation-we-activities', {
    url: '/news-Corporation-we-activities', views: {
        'index': {
            templateUrl: 'match-news/news-Corporation-we-activities.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-HLJ-DQ-conference', {
    url: '/news-HLJ-DQ-conference', views: {
        'index': {
            templateUrl: 'match-news/news-HLJ-DQ-conference.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-HN-conference', {
    url: '/news-HN-conference', views: {
        'index': {
            templateUrl: 'match-news/news-HN-conference.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-HLJ-JL-apply', {
    url: '/news-HLJ-JL-apply', views: {
        'index': {
            templateUrl: 'match-news/news-HLJ-JL-apply.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-Corporation-must-know', {
    url: '/news-Corporation-must-know', views: {
        'index': {
            templateUrl: 'match-news/news-Corporation-must-know.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-Corporation-love-country', {
    url: '/news-Corporation-love-country', views: {
        'index': {
            templateUrl: 'match-news/news-Corporation-love-country.html',
            controller: 'match-newsCtrl'
        }
    }
}).state('news-Corporation-ygs-conference', {
    url: '/news-Corporation-ygs-conference', views: {
        'index': {
            templateUrl: 'match-news/news-Corporation-ygs-conference.html',
            controller: 'match-newsCtrl'
        }
    }
})
}]).controller("match-newsCtrl", function ($location, $scope, $anchorScroll) {
    $location.hash('top');
    $anchorScroll();
});
matchNews.directive("leftShowDirective", function () {
    return {
        template: '  <div class="fl tc" ><h4>最新资讯</h4> <ul>   <li class="on"><a' +
        ' href="#/match-news">赛事新闻</a></li></ul></div>'
    };
})
matchNews.directive("topShowDirective", function () {
    return {
        template: ' <div class="title fix"> <a href="#/home">首页</a> &gt; <a href="#/match-news">最新资讯</a> &gt; <a href="#/match-news" class="on">赛事新闻</a> </div>'
    };
})