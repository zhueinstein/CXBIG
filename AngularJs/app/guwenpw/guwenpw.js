'use strict';

angular.module('myApp.guwenpw', ['ui.router'])
.controller('guwenpwCtrl', function($scope,$http, $state,$stateParams) {
    $scope.pws = [
          {title:"郭兰英  国家一级演员 著名歌...",detail:"郭兰英  国家一级演员 著名歌唱家",pic:"../resources/images/pw/585d310a66cd9.jpg",url:"#/pw_detail",shows:false},
          {title:"邓玉华  国家一级演员  著名...",detail:"邓玉华  国家一级演员  著名歌唱家",pic:"../resources/images/pw/585516c707b80.jpg",url:"#/pw_detail",shows:false},
          {title:"王立平  著名国家一级作曲家",detail:"王立平  著名国家一级作曲家",pic:"../resources/images/pw/585516e7267b9.jpg",url:"#/pw_detail",shows:false},
          {title:"吕其明  著名国家一级作曲家",detail:"吕其明  著名国家一级作曲家",pic:"../resources/images/pw/585516feef48c.jpg",url:"#/pw_detail",shows:false},
          {title:"刘为光  著名国家一级作曲家",detail:"刘为光  著名国家一级作曲家",pic:"../resources/images/pw/5855fe5a1596c.jpg",url:"#/pw_detail",shows:false},
          {title:"滕矢初  著名国家一级指挥家",detail:"滕矢初  著名国家一级指挥家",pic:"../resources/images/pw/585d2c5b4e589.jpg",url:"#/pw_detail",shows:false},
          {title:"付林  著名国家一级词曲作家 ...",detail:"付林  著名国家一级词曲作家 教育家",pic:"../resources/images/pw/585518224353a.jpg",url:"#/pw_detail",shows:false},
          {title:"杨洪基 国家一级演员 著名歌唱...",detail:"杨洪基 国家一级演员 著名歌唱家",pic:"../resources/images/pw/5855189bc92a8.jpg",url:"#/pw_detail",shows:false},
          {title:"李光熙  国家一级演员 著名歌...",detail:"李光熙  国家一级演员 著名歌唱家",pic:"../resources/images/pw/58551838ee7ac.jpg",url:"#/pw_detail",shows:false},
          {title:"刘秉义 国家一级演员 著名歌唱...",detail:"刘秉义 国家一级演员 著名歌唱家",pic:"../resources/images/pw/585518558971c.jpg",url:"#/pw_detail",shows:false},
          {title:"姜嘉锵 国家一级演员 著名歌唱...",detail:"姜嘉锵 国家一级演员 著名歌唱家",pic:"../resources/images/pw/585d5af21927b.jpg",url:"#/pw_detail",shows:false},
          {title:"江平  著名国家一级导演  中...",detail:"江平  著名国家一级导演  中国广播艺术团党委书...",pic:"../resources/images/pw/5859153344d53.jpg",url:"#/pw_detail",shows:false},
          {title:"于淑珍 国家一级演员 著名歌唱...",detail:"于淑珍 国家一级演员 著名歌唱家",pic:"../resources/images/pw/5855186ea800e.jpg",url:"#/pw_detail",shows:false},
          {title:"蒋大为 国家一级演员 著名歌唱...",detail:"蒋大为 国家一级演员 著名歌唱家",pic:"../resources/images/pw/585d2a3282372.jpg",url:"#/pw_detail",shows:false},
          {title:"耿莲凤 国家一级演员 著名歌唱...",detail:"耿莲凤 国家一级演员 著名歌唱家",pic:"../resources/images/pw/58551885e09f5.jpg",url:"#/pw_detail",shows:false},
          {title:"姚明 著名国家一级作曲家",detail:"姚明 著名国家一级作曲家",pic:"../resources/images/pw/585d1a0388973.jpg",url:"#/pw_detail",shows:false},
          {title:"丁荫楠  著名国家一级导演",detail:"丁荫楠  著名国家一级导演",pic:"../resources/images/pw/585b7f4a7bbed.jpg",url:"#/pw_detail",shows:false},
          {title:"谢芳  国家一级演员 著名表演...",detail:"谢芳  国家一级演员 著名表演艺术家",pic:"../resources/images/pw/58551725972f8.jpg",url:"#/pw_detail",shows:false},
          {title:"张目  国家一级演员 著名表演...",detail:"张目  国家一级演员 著名表演...",pic:"../resources/images/pw/585d5518a2b72.jpg",url:"#/pw_detail",shows:false},
          {title:"张连文  国家一级演员 著名表...",detail:"张连文  国家一级演员 著名表演艺术家",pic:"../resources/images/pw/5855174b2a759.jpg",url:"#/pw_detail",shows:false},
          {title:"徐沛东 著名作曲家 中国音乐家...",detail:"徐沛东 著名作曲家 中国音乐家协会党组书记",pic:"../resources/images/pw/585518f1860a0.jpg",url:"#/pw_detail",shows:false},
          {title:"王黎光  著名国家一级作曲家",detail:"王黎光  著名国家一级作曲家",pic:"../resources/images/pw/585517747c131.jpg",url:"#/pw_detail",shows:false},
          {title:"李海鹰  著名国家一级作曲家",detail:"李海鹰  著名国家一级作曲家",pic:"../resources/images/pw/5855178f4b65a.jpg",url:"#/pw_detail",shows:false},
          {title:"李前宽  著名国家一级导演 原...",detail:"李前宽  著名国家一级导演 原中国电影家协会主席...",pic:"../resources/images/pw/585d5730bd894.jpg",url:"#/pw_detail",shows:false},
          {title:"卞小贞 国家一级演员 著名歌唱...",detail:"卞小贞 国家一级演员 著名歌唱家",pic:"../resources/images/pw/585d525782e01.jpg",url:"#/pw_detail",shows:false},
          {title:"雷蕾 著名国家一级作曲家",detail:"雷蕾 著名国家一级作曲家",pic:"../resources/images/pw/58591571144c3.jpg",url:"#/pw_detail",shows:false},
          {title:"任卫新  著名国家一级词作家 ...",detail:"任卫新  著名国家一级词作家",pic:"../resources/images/pw/5855181031e99.jpg",url:"#/pw_detail",shows:false},
          {title:"刘青 著名国家一级作曲家",detail:"刘青 著名国家一级作曲家",pic:"../resources/images/pw/5859154da3911.jpg",url:"#/pw_detail",shows:false},
          {title:"王洁实 国家一级演员 著名歌唱...",detail:"王洁实 国家一级演员 著名歌唱家",pic:"../resources/images/pw/585d58af9c524.jpg",url:"#/pw_detail",shows:false},
          {title:"三宝  著名作曲家",detail:"三宝  著名作曲家",pic:"../resources/images/pw/585d52c7c730e.jpg",url:"#/pw_detail",shows:false},
          {title:"何国强  著名作曲家",detail:"何国强  著名作曲家",pic:"../resources/images/pw/585d4de6d61f5.jpg",url:"#/pw_detail",shows:false},
          {title:"乌兰托嘎  著名作曲家",detail:"乌兰托嘎  著名作曲家",pic:"../resources/images/pw/5855196906115.jpg",url:"#/pw_detail",shows:false},
          {title:"王国欢  著名作曲家",detail:"王国欢  著名作曲家",pic:"../resources/images/pw/585519dbab717.jpg",url:"#/pw_detail",shows:false},
          {title:"乌兰托娅  著名军旅歌手",detail:"乌兰托娅  著名军旅歌手",pic:"../resources/images/pw/5859158bbf291.jpg",url:"#/pw_detail",shows:false},
          {title:"董冬冬  著名音乐人",detail:"董冬冬  著名音乐人",pic:"../resources/images/pw/585d53de10722.jpg",url:"#/pw_detail",shows:false}
      ];

     $scope.onAbove = function (pw) {
         pw.shows = true;
         console.log($http)
      }
      $scope.leave = function (pw) {
          pw.shows = false;
      }
    if($stateParams.index){
        $scope.detailTitle = $scope.pws[$stateParams.index].detail;
        $scope.detailPic = $scope.pws[$stateParams.index].pic;
    }
      $scope.goDetail = function (index) {

          $state.go("pw_detail",{index:index});
      }

      $scope.goOutWh = function (name) {
            const param = name.substring(name.indexOf("-")+1)
          if(param === "introduction"){
                 $state.go(name, {introduction:'on'});
          }
           if(param === "organization"){
                 $state.go(name, {organization:'on'});
          }
           if(param === "group"){
                 $state.go(name, {group:'on'});
          }
           if(param === "guests"){
                 $state.go(name, {guests:'on'});
          }
           if(param === "guwenpw"){
                 $state.go(name, {guwenpw:'on'});
          }
           if(param === "media"){
                 $state.go(name, {media:'on'});
          }
           if(param === "communication"){
                 $state.go(name, {communication:'on'});
          }
      }
});