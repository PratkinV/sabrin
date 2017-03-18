$(document).ready(function() {
  //alert('Welcome!');
    var $i = 2;

  $('.logo').hover(function() {
    $(this).children('#dot').toggleClass('animated bounce');
  });


  function startChangePic() {
     var $timeOut = 500;


     function changePic(iterator) {
       $('.banner').css({"background-image": "url(PIcs/" + iterator +".jpg)"});
       $i=$i+1;
     }

     if ($i < 4) {
       $('.banner').fadeOut($timeOut).fadeIn($timeOut);
       setTimeout(function() {changePic($i)}, $timeOut);
     } else {
       $i = 1;
       $('.banner').fadeOut($timeOut).fadeIn($timeOut);
       setTimeout(function() {changePic($i)}, $timeOut);
     };

     clearInterval(refreshIntervalId);
     refreshIntervalId = setInterval(startChangePic, 7000);

  };

  //Calling function for changing banner picture every 7 seconds
  var refreshIntervalId = setInterval(startChangePic, 7000);
  //Adding on Click event to the button for changing the pictures
  $('#forward').on('click', startChangePic);


  //Start of Parallax related script
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
      
    var winH = $(window).height(),
    winW = $(window).width(),
    speedPar = 2;
      
      console.log(speedPar);
      
    if (winW <= 530) {
        speedPar = -2;
    }
    console.log(speedPar);

    $('.banner-slogan').css({
      'transform': 'translate(0px, ' + wScroll/1.35 + '%)',
      'opacity': 1-wScroll/300
    });

    $('.banner').css({
      'background-position': '50% ' + (-100-wScroll)/speedPar +'px'
    });


    $('.round-window').css({
      'background-position': '50% ' + ($('.round-window').offset().top-wScroll)/2 +'px'
    });


    if (wScroll > $('.container').offset().top - ($(window).height()/1.3)) {

      $('.container img').each(function(i) {
        setTimeout(function() {
          $('.container img').eq(i).addClass('is-showing');
        }, 300 * (i+1));
      })

    }

    if (wScroll > $('.contacts-footer-container').offset().top - ($(window).height()-490)) {
      $('footer').css({
        'display': 'block'
      });
    } else {
      $('footer').css({
        'display': 'none'
      });
    }

  });

  //Scroll smoothly when clicking on anchor tags script
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });

  $('.awesome-form .input-group textarea, .awesome-form .input-group input').focusout(function() {
    var text_val = $(this).val();
    if (text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }

  });


/*
  $('.container div img').click(function(){
    //$(this).css({'transform': 'scale(1.7)'});
    $(this).parents('.container div').css({'z-index': '3'});
  //  $(this).parents('.container div').css({'transform': 'translateY(-50%) translateX(-50%)'});
    $(this).parents('.container div').css({'position': 'fixed'});
    $(this).parents('.container div').css({'top': '0'});
    $(this).parents('.container div').css({'left': '0'});
    $(this).parents('.container div').css({'right': '0'});
    $(this).parents('.container div').css({'bottom': '0'});
      $(this).parents('.container div').css({'width': '100%'});
    //$(this).css({'transform': 'scale(1.7)'});
    //$(this).parents('.container div').css({'transform': 'translateY(-50%)'});

  });
*/





});
