$("html").niceScroll({

cursorcolor:'#f7600e',
cursorwidth:'15px',
cursorborderradius:'5px',
cursorborder:'1px solid #f7600e'
});
$(function(){
'use strict';
var winH =$(window).height();
var winW = $(window).width();
var navH =$('.navbar').innerHeight();


    $('.home').css('height',winH -navH);






   $('.navbar .nav-link ').click(function(){
      $('html').animate({
	scrollTop : $('#' + $(this).data('value')).offset().top -50
		},1500);
      $(this).parent().addClass('active').siblings().removeClass('active');
    });

$('.up-come .info1 .vid1').click(function(){
$('.up-come .r1 .you iframe').attr('src','https://www.youtube.com/embed/8FLOdZGeeL8');
});
$('.up-come .info1 .vid2').click(function(){
$('.up-come .r1 .you iframe').attr('src','https://www.youtube.com/embed/Lx85ChWAlLg');
});
$('.up-come .info1 .vid3').click(function(){
$('.up-come .r1 .you iframe').attr('src','https://www.youtube.com/embed/RR-GwcGo_44');
});
///////////////////////////
$('.up-come .info2 .vid1').click(function(){
$('.up-come .r2 .you iframe').attr('src','https://www.youtube.com/embed/nHbRCd8yzaw');
});
$('.up-come .info2 .vid2').click(function(){
$('.up-come .r2 .you iframe').attr('src','https://www.youtube.com/embed/aZG_PFZh-HQ');
});
$('.up-come .info2 .vid3').click(function(){
$('.up-come .r2 .you iframe').attr('src','https://www.youtube.com/embed/j9_8250Kndk');
});
////////////////////////////////////////
$('.up-come .info3 .vid1').click(function(){
$('.up-come .r3 .you iframe').attr('src','https://www.youtube.com/embed/Wu1Aii7scBo');
});
$('.up-come .info3 .vid2').click(function(){
$('.up-come .r3 .you iframe').attr('src','https://www.youtube.com/embed/Zbq7BnsQhrw');
});
$('.up-come .info3 .vid3').click(function(){
$('.up-come .r3 .you iframe').attr('src','https://www.youtube.com/embed/Vjyatl3F7d0');
});
////



 });
