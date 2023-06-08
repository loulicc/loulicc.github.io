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

  var t1 = new TimelineMax({ paused: true });

            t1.to(".menu-container", 0.4, {
                left: "0%",
            });

            t1.staggerFrom(".link", 0.4, { opacity: 0 }, 0.1, "-=0.2");

            t1.reverse();
            $(document).on("click", ".open-menu", function () {
                t1.reversed(!t1.reversed());
            });
            $(document).on("click", ".close-menu", function () {
                t1.reversed(!t1.reversed());
            });

            function scrollToTop() {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }

        $(document).ready(function () {
            $('.col-4').animate({
                'right': '0'
            }, 1500);
        });



