// JavaScript Document
$(function(){
	//头部导航
	/*$(".aa").attr("href","javascript:void(0)");
	$(".nav_1 li").click(function(){
		$(".nav_2").css("display","none");
		$(this).find(".nav_2").css("display","block");
		$(".nav_1 li").find(".a_1").removeClass("a_3");
		$(this).find(".aa").addClass("a_3");
	});*/
	$(".a_2 img").click(function(){
		console.log(1111)
		var z=$(".nav_1").css("display");
		if(z == "none"){
			$(".nav_1").slideDown();
		}else{
			$(".nav_1").slideUp();
		}
	});
	$(".nav_1 .a_1").click(function () {
		console.log("111")
        $(".nav_1").slideUp();
    });

	$(document).click(function(e){
	 e = window.event || e;
	 obj = $(e.srcElement || e.target);
		if (!$(obj).is(".a_2,.a_2 *,.nav_1,.nav_1 *")) {
			$(".nav_1").css("display","none");
	   }
	});
	/*********************************/
	var lik=$(".nav_5 li").length;
	$(".nav_5 li").eq(lik-1).css("margin-bottom","0px");
	$(".nav_5 li").eq(lik-2).css("margin-bottom","0px");
	$(".nav_5 li").eq(lik-3).css("margin-bottom","0px");

	var likk=$(".nav_8 li").length;
	$(".nav_8 li").eq(likk-1).css("margin-bottom","0px");
	$(".nav_8 li").eq(likk-2).css("margin-bottom","0px");

	$('.fenxiang').click(function(){
		$('.fenxiang_02').toggle();
	})
});
