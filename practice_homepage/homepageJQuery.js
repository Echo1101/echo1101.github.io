$(document).ready(function () {

	// 自动轮播
	var times=0;
	var t=setInterval(change,3000);

	$('.span0').click(function () {
		change(0);
	});
	$('.span1').click(function () {
		change(1);
	});
	$('.span2').click(function () {
		change(2);
	});
	function  change(m) {
		var ordArr = $('.square').children('span');//获取表明图片顺序的span
		if (m==undefined) {
				//图片滑动
				var dis = ((times%3)*(-1000))+"px";//前提是图片的宽度是1000，如果不是则出现问题
				$(".recommendIntro").animate({
					left: dis
				});
				//span复原
				$('.span0,.span1,.span2').css("background-color","#ccc");
				var str = '.span'+times%3;
				//图片对应的span高亮
				$(str).css('background-color','#188eee');
				times++;
				} 
		else{
			times=m;
			var str = '.span'+times%3;

				//图片滑动
				var dis = ((times%3)*(-1000))+"px";
				$(".recommendIntro").animate({
					left: dis
				});
				//span复原
				$('.span0,.span1,.span2').css("background-color","#ccc");
				var str = '.span'+times%3;
				//图片对应的span高亮
				$(str).css('background-color','#188eee');
				times++;
		}
	}

	//鼠标移入移出图片时轮播暂停或重启
	 $(".recommendIntro").mouseover(function(){//鼠标进入时，清楚定时器，图片停止切换
		clearInterval(t);
	});
	$(".recommendIntro").mouseout(function(){//鼠标移出时，重新启动定时器，图片重新开始切换
		t=setInterval(change,3000);
	});
	//轮播 end

	//浮标 延时提示框
	var timer = null;

		$('#qq').mouseover(function () {
			clearTimeout(timer);
			$('.qqConsulting').slideDown();
			$('#QRcodeDiv').hide();
		});
		$('#qq').mouseout(function(){
			timer = setTimeout(function(){
				$('.qqConsulting').slideUp();
			},1000);
		});
		$('.qqConsulting').mouseover(function () {
			clearTimeout(timer);
		});
		$('.qqConsulting').mouseout(function(){
			timer = setTimeout(function(){
				$('.qqConsulting').slideUp();
			},1000);
		});

	$('#QRcode').mouseover(function () {
			clearTimeout(timer);
			$('#QRcodeDiv').slideDown();
			$('.qqConsulting').hide();
		});
		$('#QRcode').mouseout(function(){
			timer = setTimeout(function(){
				$('#QRcodeDiv').slideUp();
			},1000);
		});
		$('#QRcodeDiv').mouseover(function () {
			clearTimeout(timer);
		});
		$('#QRcodeDiv').mouseout(function(){
			timer = setTimeout(function(){
				$('#QRcodeDiv').slideUp();
			},1000);
		});

		$('#toTop').mouseover(function(){
			//两个提示框都隐藏
			$('.qqConsulting').hide();
			$('#QRcodeDiv').hide();
		});
});	