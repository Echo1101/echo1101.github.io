window.onload = function () {
	//鼠标移入移出专业细分栏时的彩色框变换

	// 浮标鼠标移入事件
	var oToTop = document.getElementById('toTop');
	var oQQ = document.getElementById('qq');
	var oQRcode = document.getElementById('QRcode');

	oToTop.onmouseover = function () {
		document.getElementById('toTopIcon').src = "img/images/buoy-toTop-02.jpg";
	}
	oToTop.onmouseout = function () {
		document.getElementById('toTopIcon').src = "img/images/buoy-toTop-01.jpg";
	}
	oQQ.onmouseover = function () {
		document.getElementById('qqIcon').src = "img/images/buoy-qq-02.jpg";
		document.getElementById('qqConsulting').style.display = "block";
	}
	oQQ.onmouseout = function () {
		document.getElementById('qqIcon').src = "img/images/buoy-qq-01.jpg";
		document.getElementById('qqConsulting').style.display = "none";
	}
	oQRcode.onmouseover = function () {
		document.getElementById('QRcodeIcon').src = "img/images/buoy-QRcode-02.jpg";
		document.getElementById('QRcodeDiv').style.display = "block";
	}
	oQRcode.onmouseout = function () {
		document.getElementById('QRcodeIcon').src = "img/images/buoy-QRcode-01.jpg";
		document.getElementById('QRcodeDiv').style.display = "none";
	}
	// 浮标鼠标移入事件 end
}