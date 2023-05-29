$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".folder").addClass("fade-out");
    } else {
      $(".folder").removeClass("fade-out");
    }
  });

  var originalTop = $(".header").offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".header.fixed").animate({ top: "0" }, 200);
    } else {
      $(".header.fixed").stop().css("top", "5vh");
    }
    
    if ($(window).scrollTop() == 0) {
      $(".header").animate({ top: originalTop + "px" }, 200);
    }
  });
  
  
  
  

        $(document).ready(function () {
            $('.col-4').animate({
                'right': '0'
            }, 1500);
        });


