/*
* @Author: 会飞的猫
* @Date:   2016-08-24 10:48:36
* @Last Modified by:   anchen
* @Last Modified time: 2016-12-14 09:19:48
*/

$(function(){
    //精彩集锦
    $('.main_spjj_02 ul li').hover(function(){
        $(this).find('.pic_yc').stop(true,true).fadeIn();
    },function(){
        $(this).find('.pic_yc').stop(true,true).fadeOut();
    })
/*
    if($('.in_top').size()>0){
        var in_top = $('.in_top').offset().top;
    }
    $(window).scroll(function(){
        var scrollTop1 = $(document).scrollTop();
        if(scrollTop1>100){
            $('.in_top').addClass('in_tops');
        }else{
            $('.in_top').removeClass('in_tops')
        }
    })*/


    $('.main_zzhcy_02 ul li').click(function(){
        $('.wrap').fadeIn();
    })
    $('.wrap_out img').click(function(){
 $('.wrap').fadeOut();
    })
})