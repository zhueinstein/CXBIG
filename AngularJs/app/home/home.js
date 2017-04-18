'use strict';
var app = angular.module('myApp.home', ['ui.router']);
app.controller('HomeCtrl', function($scope) {
    $scope.pws1 = [
        {title:"郭兰英  ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d310a66cd9.jpg",url:"#/pw_detail"},
        {title:"邓玉华  ...",detail:"国家一级演员  著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585516c707b80.jpg",url:"#/pw_detail"},
        {title:"王立平 ...",detail:"著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585516e7267b9.jpg",url:"#/pw_detail"},
        {title:"吕其明  ...",detail:"著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585516feef48c.jpg",url:"#/pw_detail"},
        {title:"刘为光  ...",detail:"著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855fe5a1596c.jpg",url:"#/pw_detail"},
        {title:"滕矢初  ...",detail:"著名国家一级指挥家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d2c5b4e589.jpg",url:"#/pw_detail"},
        {title:"付林  ...",detail:"著名国家一级词曲作家 教育家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585518224353a.jpg",url:"#/pw_detail"},
        {title:"杨洪基 ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855189bc92a8.jpg",url:"#/pw_detail"},
        {title:"李光熙  ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/58551838ee7ac.jpg",url:"#/pw_detail"},
        {title:"刘秉义 ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585518558971c.jpg",url:"#/pw_detail"},
        {title:"姜嘉锵 ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d5af21927b.jpg",url:"#/pw_detail"},
        {title:"江平  ...",detail:"著名国家一级导演  中国广播艺术团党委书...",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5859153344d53.jpg",url:"#/pw_detail"},
        {title:"于淑珍 ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855186ea800e.jpg",url:"#/pw_detail"},
        {title:"蒋大为 ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d2a3282372.jpg",url:"#/pw_detail"},
        {title:"耿莲凤 ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/58551885e09f5.jpg",url:"#/pw_detail"},
        {title:"姚明 ...",detail:"著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d1a0388973.jpg",url:"#/pw_detail"},
        {title:"丁荫楠  ...",detail:"著名国家一级导演",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585b7f4a7bbed.jpg",url:"#/pw_detail"},
        {title:"谢芳  ...",detail:"国家一级演员 著名表演艺术家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/58551725972f8.jpg",url:"#/pw_detail"},
        {title:"张目  ...",detail:"国家一级演员 著名表演...",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d5518a2b72.jpg",url:"#/pw_detail"},
        {title:"张连文 ...",detail:"国家一级演员 著名表演艺术家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855174b2a759.jpg",url:"#/pw_detail"},
        {title:"徐沛东 ...",detail:"著名作曲家 中国音乐家协会党组书记",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585518f1860a0.jpg",url:"#/pw_detail"},
        {title:"王黎光 ...",detail:"著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585517747c131.jpg",url:"#/pw_detail"},
        {title:"李海鹰  ...",detail:"著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855178f4b65a.jpg",url:"#/pw_detail"},
        {title:"李前宽  ...",detail:"著名国家一级导演 原中国电影家协会主席...",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d5730bd894.jpg",url:"#/pw_detail"},
        {title:"卞小贞 ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d525782e01.jpg",url:"#/pw_detail"},
        {title:"雷蕾 ...",detail:"著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/58591571144c3.jpg",url:"#/pw_detail"},
        {title:"任卫新  ...",detail:"著名国家一级词作家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855181031e99.jpg",url:"#/pw_detail"},
        {title:"刘青 ...",detail:"著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5859154da3911.jpg",url:"#/pw_detail"},
        {title:"王洁实 ...",detail:"国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d58af9c524.jpg",url:"#/pw_detail"},
        {title:"三宝  ...",detail:"著名作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d52c7c730e.jpg",url:"#/pw_detail"},
        {title:"何国强  ...",detail:"著名作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d4de6d61f5.jpg",url:"#/pw_detail"},
        {title:"乌兰托嘎  ...",detail:"著名作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855196906115.jpg",url:"#/pw_detail"},
        {title:"王国欢  ...",detail:"著名作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585519dbab717.jpg",url:"#/pw_detail"},
        {title:"乌兰托娅  ...",detail:"著名军旅歌手",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5859158bbf291.jpg",url:"#/pw_detail"},
        {title:"董冬冬  ...",detail:"著名音乐人",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d53de10722.jpg",url:"#/pw_detail"}
    ];
    $scope.png = "http://ool42cwl5.bkt.clouddn.com/images/in-08.png";


});