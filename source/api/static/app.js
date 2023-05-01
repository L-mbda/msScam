 $(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '/static/alert-en.wav');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
   
     $('.map').click(function() {
        audioElement.play();
        
    });

      $('.black').click(function() {
        audioElement.play();
        
    });
      

       $('#footer').click(function() {
        audioElement.play();
        
    });

        $('#yteuwqtudggsajdgjahs').click(function() {
        audioElement.play();
        
    });
       
     
   
    
    
});

 $("#footer").fadeIn('slow')
.css({top:752,position:'absolute'})
.animate({top:685}, 800, function() {
    //callback
});
$(document).ready(function() {
    $(".arow-div").delay(1000).fadeIn(500);
});

    $(document).ready(function(){
  $("#yteuwqtudggsajdgjahs").click(function(){
    $('#yteuwqtudggsajdgjahs').hide('fast');
  });
});
    $(document).ready(function(){
  $(".alert_popup").click(function(){
    $('.alert_popup').hide('fast');
  });
});
    


           $(document).ready(function(){
  $("#footer").click(function(){
    $('#yteuwqtudggsajdgjahs').hide('fast');
  });
});

   $(document).ready(function(){
  $(".black").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});

  


