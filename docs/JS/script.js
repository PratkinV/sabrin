$(document).ready(function() {
  //alert('Welcome!');
    var $i = 1;

  $('.logo').hover(function() {
    $(this).children('#dot').toggleClass('animated bounce');
  });
  
  $('footer a').on('click', function(){
    return false;
  });


  function startChangePic() {
     var $timeOut = 500,
     picForMobile = "",
     that = this;
     
     // Mobile screen pictures scenario
     if ($(window).width() <= 530) {
        picForMobile = "-s";
     }          
     
     // Back button pressed scenario
     if (that.id == "back") {           
       $i=$i-2; 
       if ($i === -1) {$i = 2;}          
     } 
      
     if ($i <= 2) {
       $('.banner').fadeOut($timeOut).fadeIn($timeOut);
       setTimeout(function() {changePic($i)}, $timeOut);
     } else {
       $i = 0;
       $('.banner').fadeOut($timeOut).fadeIn($timeOut);
       setTimeout(function() {changePic($i)}, $timeOut);
     };

     clearInterval(refreshIntervalId);
     refreshIntervalId = setInterval(startChangePic, 7000);
      
     function changePic(iterator) {      
       $('.banner').css({"background-image": "url(PIcs/" + iterator + picForMobile +".jpg)"});
       $i++;        
     }

  };

  //Calling function for changing banner picture every 7 seconds
  var refreshIntervalId = setInterval(startChangePic, 7000);
  //Adding on Click event to the button for changing the pictures
  $('#forward').on('click', startChangePic);
  $('#back').on('click', startChangePic);


  //Start of Parallax related script
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    //$('.symbol').text(wScroll.toString());
    //console.log(wScroll);
    var speedPar = {
        speed: -2,
        adjustment: 300,
        speedSlogan: 1.35
    };

    if ($(window).width() <= 530) {
        //speedPar.speed = -2;
        speedPar.adjustment = 100;
        //speedPar.speedSlogan = 1.35;
    }

    $('.banner-slogan').css({
      'transform': 'translate(0px, ' + wScroll/speedPar.speedSlogan + '%)',
      'opacity': 1-wScroll/300
    });

    $('.banner').css({
      'background-position': '50% ' + (speedPar.adjustment-wScroll)/speedPar.speed +'px'
    });


    $('.round-window').css({
      'background-position': '50% ' + ($('.round-window').offset().top-wScroll)/speedPar.speed +'px'
    });

/*
    if (wScroll > $('.container').offset().top - ($(window).height()/1.3)) {

      $('.container img').each(function(i) {
        setTimeout(function() {
          $('.container img').eq(i).addClass('is-showing');
        }, 300 * (i+1));
      })

    }
*/
    if (wScroll > $('.container').offset().top - ($(window).height()/1.3)) {

      $('.container img').filter(":onScreen")
      .each(function(i) {
        setTimeout(function() {
          $('.container img').filter(":onScreen").eq(i).addClass('is-showing');
          //console.log(i);
        }, 500 * (i+1));
      })

    }

    if (wScroll > $('.contacts-footer-container').offset().top - ($(window).height()-500)) {
      $('footer').css({
        'display': 'block'
      });
    } else {
      $('footer').css({
        'display': 'none'
      });
    }

  });

  // Scroll smoothly when clicking on anchor tags script
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
    
  // Contacts Form scripts
  $('.awesome-form .input-group textarea, .awesome-form .input-group input').focusout(function() {
    var text_val = $(this).val();
    if (text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }

  });


  // Prevent resizing the background pictures when Chrome Android URL bar hides
  function mobileUrlHideFix() {
      var HEIGHT_CHANGE_TOLERANCE = 70; // Approximately URL bar height in Chrome on tablet

      var jumbotron = $(this);
      var viewportHeight = $(window).height();

      $(window).resize(function () {
          if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
              viewportHeight = $(window).height();
              update();
          }
      });

      function update() {
          jumbotron.css('height', (viewportHeight + HEIGHT_CHANGE_TOLERANCE) + 'px');
      }

      update();
  }

  if ($(window).width() <= 530) {
      $('.mobile-url-hide-fix').each(mobileUrlHideFix);
  }

});
