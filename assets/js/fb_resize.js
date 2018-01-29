$(document).ready(function() {
  
  changeFBPagePlugin = function () {
      //getting parent box width
      let container_width  = (Number($('.fb-container').width()) - Number($('.fb-container').css('padding-left').replace("px", ""))).toFixed(0); 
      //getting parent box height
      let container_height = (Number($('.fb-container').height()) + Number(($('.fb-container').css('padding-top').replace("px", "")*2))).toFixed(0); 

      if( !isNaN( container_width ) && !isNaN( container_height )) 
      {
          $(".fb-page").attr("data-width", container_width).attr("data-height", container_height);
      } else {
        console.log("it's not a number");
      }

      if( typeof FB !== 'undefined' ) 
      {
          FB.XFBML.parse();
      }
  }

  $(window).on('resize', function() {
      setTimeout(function(){changeFBPagePlugin()}, 500);
  });

  $(window).on('load', function() {
      setTimeout(function(){changeFBPagePlugin()}, 500);
  });
});