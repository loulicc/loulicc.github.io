$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".marquee-1").addClass("fade-out");
    } else {
      $(".marquee-1").removeClass("fade-out");
    }
  });

  var originalTop = $(".marquee").offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".marquee").addClass("fixed");
    } else {
      $(".marquee").removeClass("fixed");
    }
  });
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".marquee.fixed").animate({ top: "0" }, 200);
    } else {
      $(".marquee.fixed").stop().css("top", "5vh");
    }
    
    if ($(window).scrollTop() == 0) {
      $(".marquee").animate({ top: originalTop + "px" }, 200);
    }
  });
  
  
  
  

        $(document).ready(function () {
            $('.col-4').animate({
                'right': '0'
            }, 1500);
        });


