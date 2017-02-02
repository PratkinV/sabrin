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
     //refreshIntervalId;
     /*setInterval(function(){
        startChangePic();
      }, 7000);*/
  };

  //Calling function for changing banner picture every 7 seconds
  var refreshIntervalId = setInterval(startChangePic, 7000);
  //Adding on Click event to the button for changing the pictures
  $('#forward').on('click', startChangePic);


  //Start of Parallax related script
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.banner-slogan').css({
      'transform': 'translate(0px, ' + wScroll/1.35 + '%)',
      'opacity': 1-wScroll/300
    });

    $('.banner').css({
      'background-position': '50% ' + (-100-wScroll)/2 +'px'
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

    if (wScroll > $('.contacts-footer-container').offset().top - ($(window).height()-410)) {
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



});
