$(document).ready(function(){
  var $prev = $('.previous');
  var mode = "auto";
  $prev.on({
    click: function(e){
      e.preventDefault();
      mode = "manual";
      showPreviousImage();
    }
  });
  
  setInterval(function(){
    if(mode==="auto"){
      showNextImage();
    }
  },5000);
  
  function showNextImage(){
      var $actEl = $('.active');
      var $nextEl = $actEl.next('.slide');
      if($nextEl.length){
        $actEl.removeClass('active');
        $nextEl.addClass('active');
      }else{
        $actEl.removeClass('active');
        $('.slide:first-child').addClass('active');
      }
  }
  

});