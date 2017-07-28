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
    	$('.pop').show();
    	$('.pop').removeClass('animated bounceOutUp');
    	$('.pop').addClass('animated bounceInDown');
    	showMask();
    });
    $('.pop-close').on('click', function () {
    	$('.pop').removeClass('animated bounceInDown');
    	$('.pop').addClass('animated bounceOutUp');
    	hideMask();
    });
    $('.pop').swipeUp(function () {
    	$('.pop').removeClass('animated bounceInDown');
    	$('.pop').addClass('animated bounceOutUp');
    	hideMask();
    });
    $('.l-btn').on('click', function () {
    	if ($('.form-input').val() == '') {
            alert('请填写个人信息！');
            return;
        }
    	$('.gz-text, .l-btn, .tip-2, .form-input').hide();
    	$('.goCard').show();
    	$('.hb-bg').addClass('act');
    });
});