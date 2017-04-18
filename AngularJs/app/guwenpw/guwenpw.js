'use strict';

angular.module('myApp.guwenpw', ['ui.router'])
.controller('guwenpwCtrl', function($scope, $state,$stateParams) {
    $scope.pws = [
        {id:"0",title:"郭兰英  国家一级演员 著名歌...",detail:"郭兰英  国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d310a66cd9.jpg",url:"#/pw_detail",shows:false},
        {id:"1",title:"邓玉华  国家一级演员  著名...",detail:"邓玉华  国家一级演员  著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585516c707b80.jpg",url:"#/pw_detail",shows:false},
        {id:"2",title:"王立平  著名国家一级作曲家",detail:"王立平  著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585516e7267b9.jpg",url:"#/pw_detail",shows:false},
        {id:"3",title:"吕其明  著名国家一级作曲家",detail:"吕其明  著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585516feef48c.jpg",url:"#/pw_detail",shows:false},
        {id:"4",title:"刘为光  著名国家一级作曲家",detail:"刘为光  著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855fe5a1596c.jpg",url:"#/pw_detail",shows:false},
        {id:"5",title:"滕矢初  著名国家一级指挥家",detail:"滕矢初  著名国家一级指挥家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d2c5b4e589.jpg",url:"#/pw_detail",shows:false},
        {id:"6",title:"付林  著名国家一级词曲作家 ...",detail:"付林  著名国家一级词曲作家 教育家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585518224353a.jpg",url:"#/pw_detail",shows:false},
        {id:"7",title:"杨洪基 国家一级演员 著名歌唱...",detail:"杨洪基 国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855189bc92a8.jpg",url:"#/pw_detail",shows:false},
        {id:"8",title:"李光熙  国家一级演员 著名歌...",detail:"李光熙  国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/58551838ee7ac.jpg",url:"#/pw_detail",shows:false},
        {id:"9",title:"刘秉义 国家一级演员 著名歌唱...",detail:"刘秉义 国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585518558971c.jpg",url:"#/pw_detail",shows:false},
        {id:"10",title:"姜嘉锵 国家一级演员 著名歌唱...",detail:"姜嘉锵 国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d5af21927b.jpg",url:"#/pw_detail",shows:false},
        {id:"11",title:"江平  著名国家一级导演  中...",detail:"江平  著名国家一级导演  中国广播艺术团党委书...",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5859153344d53.jpg",url:"#/pw_detail",shows:false},
        {id:"12",title:"于淑珍 国家一级演员 著名歌唱...",detail:"于淑珍 国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855186ea800e.jpg",url:"#/pw_detail",shows:false},
        {id:"13",title:"蒋大为 国家一级演员 著名歌唱...",detail:"蒋大为 国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d2a3282372.jpg",url:"#/pw_detail",shows:false},
        {id:"14",title:"耿莲凤 国家一级演员 著名歌唱...",detail:"耿莲凤 国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/58551885e09f5.jpg",url:"#/pw_detail",shows:false},
        {id:"15",title:"姚明 著名国家一级作曲家",detail:"姚明 著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d1a0388973.jpg",url:"#/pw_detail",shows:false},
        {id:"16",title:"丁荫楠  著名国家一级导演",detail:"丁荫楠  著名国家一级导演",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585b7f4a7bbed.jpg",url:"#/pw_detail",shows:false},
        {id:"17",title:"谢芳  国家一级演员 著名表演...",detail:"谢芳  国家一级演员 著名表演艺术家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/58551725972f8.jpg",url:"#/pw_detail",shows:false},
        {id:"18",title:"张目  国家一级演员 著名表演...",detail:"张目  国家一级演员 著名表演...",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d5518a2b72.jpg",url:"#/pw_detail",shows:false},
        {id:"19",title:"张连文  国家一级演员 著名表...",detail:"张连文  国家一级演员 著名表演艺术家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855174b2a759.jpg",url:"#/pw_detail",shows:false},
        {id:"20",title:"徐沛东 著名作曲家 中国音乐家...",detail:"徐沛东 著名作曲家 中国音乐家协会党组书记",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585518f1860a0.jpg",url:"#/pw_detail",shows:false},
        {id:"21",title:"王黎光  著名国家一级作曲家",detail:"王黎光  著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585517747c131.jpg",url:"#/pw_detail",shows:false},
        {id:"22",title:"李海鹰  著名国家一级作曲家",detail:"李海鹰  著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855178f4b65a.jpg",url:"#/pw_detail",shows:false},
        {id:"23",title:"李前宽  著名国家一级导演 原...",detail:"李前宽  著名国家一级导演 原中国电影家协会主席...",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d5730bd894.jpg",url:"#/pw_detail",shows:false},
        {id:"24",title:"卞小贞 国家一级演员 著名歌唱...",detail:"卞小贞 国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d525782e01.jpg",url:"#/pw_detail",shows:false},
        {id:"25",title:"雷蕾 著名国家一级作曲家",detail:"雷蕾 著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/58591571144c3.jpg",url:"#/pw_detail",shows:false},
        {id:"26",title:"任卫新  著名国家一级词作家 ...",detail:"任卫新  著名国家一级词作家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855181031e99.jpg",url:"#/pw_detail",shows:false},
        {id:"27",title:"刘青 著名国家一级作曲家",detail:"刘青 著名国家一级作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5859154da3911.jpg",url:"#/pw_detail",shows:false},
        {id:"28",title:"王洁实 国家一级演员 著名歌唱...",detail:"王洁实 国家一级演员 著名歌唱家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d58af9c524.jpg",url:"#/pw_detail",shows:false},
        {id:"29",title:"三宝  著名作曲家",detail:"三宝  著名作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d52c7c730e.jpg",url:"#/pw_detail",shows:false},
        {id:"30",title:"何国强  著名作曲家",detail:"何国强  著名作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d4de6d61f5.jpg",url:"#/pw_detail",shows:false},
        {id:"31",title:"乌兰托嘎  著名作曲家",detail:"乌兰托嘎  著名作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5855196906115.jpg",url:"#/pw_detail",shows:false},
        {id:"32",title:"王国欢  著名作曲家",detail:"王国欢  著名作曲家",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585519dbab717.jpg",url:"#/pw_detail",shows:false},
        {id:"33",title:"乌兰托娅  著名军旅歌手",detail:"乌兰托娅  著名军旅歌手",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/5859158bbf291.jpg",url:"#/pw_detail",shows:false},
        {id:"34",title:"董冬冬  著名音乐人",detail:"董冬冬  著名音乐人",pic:"http://ool42cwl5.bkt.clouddn.com/images/pw/585d53de10722.jpg",url:"#/pw_detail",shows:false}
    ];

     $scope.onAbove = function (pw) {
         pw.shows = true;
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
          if(param === "match-introduction"){
                 $state.go(name, {introduction:'on'});
          }
           if(param === "organization"){
                 $state.go(name, {organization:'on'});
          }
           if(param === "org-group"){
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