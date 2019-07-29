$(document).ready(function(){
	$("form").submit(function(){
		var lol = $("#tel").val();
		var reg = /^1\d{10}$/;
		var m1=$(".mmk1").val();
		var m2=$(".mmk2").val();
		var uName=$(".name").val();
		if(m2 != m1){
			alert("两次密码不一致！");
			return false;
		}
		if(reg.test(lol) != true){
			alert("手机号码必须11位");
			return false;
		}
		if(isNaN(uName)==false){
			alert("名字不能为数字！");
			return false;
		}	
		return true;
	})
})
$(function(){
	zongji();
	function zongji(){
		var qian=0;
		$(".hh1").each(function(i,dom){
			var shu=$(dom).children(" .hh6").find(".ppp1").val();
			var price=shu*$(dom).children(".hh5").find(".xj").text();
			$(dom).children("#price2")
		})
	}
	
	
	$(".jiahao").click(function(){
		var jia =$(".hh6 li input[type=text]").val();
	    $(this).prev().val(parseInt(jia)+1);
	    zongji();
	})
	$(".jianhao").click(function(){
		var jian=$(this).next().val();
		if(jian>1){
			$(this).next().val(parseInt(jian)-1);
			zongji();
		}else{
			alert("商品数量不能小于1！！！")
		}
	})
})
$(function(){
	zongji1();
	function zongji1(){
		var qian=0;
		$(".hh1").each(function(i,dom){
			var shu=$(dom).children(".mm6").find(".ppp1").val();
			var price=shu*$(dom).children(".hh5").find(".xj").text();
			$(dom).children("#price2")
		})
	}
	
	
	$(".jiahao1").click(function(){
		var jia =$(".hh6 li input[type=text]").val();
	    $(this).prev().val(parseInt(jia)+1);
	    zongji1();
	})
	$(".jianhao1").click(function(){
		var jian=$(this).next().val();
		if(jian>1){
			$(this).next().val(parseInt(jian)-1);
			zongji1();
		}else{
			alert("商品数量不能小于1！！！")
		}
	})
})
	
	

	

