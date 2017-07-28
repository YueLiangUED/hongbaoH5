/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-26 11:03:58
*/

$(document).ready(function(){
	$(document).on('touchmove', function (event) {
    	event.preventDefault(); 
    });
     // 遮罩层
    function showMask() {
        var $mask = $('#mask');
        var winH = $(window).height();
        var winW = $(window).width();
        $mask.height(winH);
        $mask.width(winW);
        $mask.show();
    }
    // showMask();
    function hideMask() {
        var $mask = $('#mask');
        $mask.hide();
    }
    $('.gz-text').on('click',function () {
    	$('.pop').css({
    		'transform': 'translateY(0)',
			'-webkit-transform': 'translatey(0)'
    	});
    	showMask();
    });
    $('.pop-close').on('click', function () {
    	$('.pop').css({
    		'transform': 'translateY(-9.6rem);',
			'-webkit-transform': 'translatey(-9.6rem)'
    	});
    	hideMask();
    });
    $('.pop').swipeUp(function () {
    	$('.pop').css({
    		'transform': 'translateY(-10rem);',
			'-webkit-transform': 'translatey(-10rem)'
    	});
    	hideMask();
    });
});