$(function () {
    "use strict";
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40) {
            $('.navbar').addClass('menu_fix');
        } else {
            $(".navbar").removeClass('menu_fix');
        }
    });
    
    
    
    
});

$(function(){
  var youtubeUrl = "https://www.youtube.com/embed/" + $('#youtubevideotabs li:first-child').attr('youtubeid') + "?rel=0";
  $('#youtubeplayer iframe').attr('src',youtubeUrl);
  
  $('#youtubevideotabs li').click(function(){
    youtubeUrl = "https://www.youtube.com/embed/"+ $(this).attr('youtubeid') +"?rel=0";
    $('#youtubeplayer iframe').attr('src',youtubeUrl);    
  });  
  
  $("#youtubevideotabs").mCustomScrollbar({
    scrollButtons:{
      enable:true
    },
		theme:"dark"
  });
});