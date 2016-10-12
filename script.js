$(document).ready(function(){

  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
  ];
  var html = jQuery('html');
  html.data('scroll-position', scrollPosition);
  html.data('previous-overflow', html.css('overflow'));
  html.css('overflow', 'hidden');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);

  $(document).keydown(function (e)
  {
      var keycode1 = (e.keyCode ? e.keyCode : e.which);
      if (keycode1 == 0 || keycode1 == 9) {
          e.preventDefault();
          e.stopPropagation();
      }
  });

  $(".contact-image").hover(function(){
    $(this).css("backgroundColor", "white");
  }, function(){
    $(this).css("backgroundColor", "transparent");
  });

  //HOME PAGE LEFT
  $("#arrow-left-home").click(function(){
    $(".section-two").animate({right: "0%"}, 600);
    $("#home-tab").css("background-position", "0 -100%");
    $("#experience-tab").css("background-position", "-100% 100%");
  });

  //HOME PAGE RIGHT
  $("#arrow-right-home").click(function(){
    $(".section-four").animate({left: "0%"}, 600);
    $("#home-tab").css("background-position", "0 -100%");
    $("#personal-tab").css("background-position", "-100% 100%");
  });


  //EXPERIENCE LEFT
  $("#arrow-left-experience").click(function(){
    $(".section-three").animate({right: "0%"}, 600);
    $("#experience-tab").css("background-position", "0 0");
    $("#creations-tab").css("background-position", "-100% 100%");
  });
  //EXPERIENCE RIGHT
  $("#arrow-right-experience").click(function(){
    $(".section-two").animate({right: "150%"}, 600);
    $("#home-tab").css("background-position", "100% 0%");
    $("#experience-tab").css("background-position", "0 0");

  });

  //CREATIONS LEFT -- RETURN TO HOME
  $("#arrow-left-creations").click(function(){
    $(".section-three").animate({right: "150%"}, 600);
    $(".section-two").delay(50).animate({right: "150%"}, 600);
    $("#home-tab").css("background-position", "100% 0%");
    $("#creations-tab").css("background-position", "0 0");

  });
  //CREATIONS RIGHT
  $("#arrow-right-creations").click(function(){
    $(".section-three").animate({right: "150%"}, 600);
    $("#experience-tab").css("background-position", "-100% 100%");
    $("#creations-tab").css("background-position", "0 0");
  });

  //PERSONAL LEFT
  $("#arrow-left-personal").click(function(){
    $(".section-four").animate({left: "150%"}, 600);
    $("#home-tab").css("background-position", "100% 0%");
    $("#personal-tab").css("background-position", "0 0");

  });
  //PERSONAL RIGHT
  $("#arrow-right-personal").click(function(){
    $(".section-five").animate({left: "0%"}, 600);
    $("#contact-tab").css("background-position", "-100% 100%");
    $("#personal-tab").css("background-position", "0 0");
  });

  //CONTACT LEFT
  $("#arrow-left-contact").click(function(){
    $(".section-five").animate({left: "150%"}, 600);
    $("#personal-tab").css("background-position", "-100% 100%");
    $("#contact-tab").css("background-position", "0 0");
  });
  //CONTACT RIGHT
  $("#arrow-right-contact").click(function(){
    $(".section-five").animate({left: "150%"}, 600);
    $(".section-four").delay(50).animate({left: "150%"}, 600);
    $("#home-tab").css("background-position", "100% 0%");
    $("#contact-tab").css("background-position", "0 0");
  });

  //************************* TAB SELECT *************************

  $("#creations-tab").click(function(){
    $("#creations-tab").css("background-position", "-100% 100%");
    $("#personal-tab").css("background-position", "0 0");
    $("#experience-tab").css("background-position", "0 0");
    $("#contact-tab").css("background-position", "0 0");
    $("#home-tab").css("background-position", "0 -100%");
    $(".section-four").animate({left: "150%"}, 600);
    $(".section-five").animate({left: "150%"}, 600);

    $(".section-three").animate({right: "0%"}, 600);
    $(".section-two").animate({right: "0%"}, 600);

  });
  $("#experience-tab").click(function(){
    $("#experience-tab").css("background-position", "-100% 100%");
    $("#personal-tab").css("background-position", "0 0");
    $("#creations-tab").css("background-position", "0 0");
    $("#contact-tab").css("background-position", "0 0");
    $("#home-tab").css("background-position", "0 -100%");
    $(".section-five").animate({left: "150%"}, 600);
    $(".section-four").animate({left: "150%"}, 600);
    $(".section-three").animate({right: "150%"}, 600);

    $(".section-two").animate({right: "0%"}, 600);

  });
  $("#personal-tab").click(function(){
    $("#personal-tab").css("background-position", "-100% 100%");
    $("#experience-tab").css("background-position", "0 0");
    $("#creations-tab").css("background-position", "0 0");
    $("#contact-tab").css("background-position", "0 0");
    $("#home-tab").css("background-position", "0 -100%");
    $(".section-five").animate({left: "150%"}, 600);
    $(".section-three").animate({right: "150%"}, 600);
    $(".section-two").animate({right: "150%"}, 600);

    $(".section-four").animate({left: "0%"}, 600);

  });
  $("#contact-tab").click(function(){
    $("#contact-tab").css("background-position", "-100% 100%");
    $("#personal-tab").css("background-position", "0 0");
    $("#creations-tab").css("background-position", "0 0");
    $("#experience-tab").css("background-position", "0 0");
    $("#home-tab").css("background-position", "0 -100%");
    $(".section-three").animate({right: "150%"}, 600);
    $(".section-two").animate({right: "150%"}, 600);

    $(".section-four").animate({left: "0%"}, 600);
    $(".section-five").animate({left: "0%"}, 600);


  });
  $("#home-tab").click(function(){
    $("#personal-tab").css("background-position", "0 0");
    $("#creations-tab").css("background-position", "0 0");
    $("#experience-tab").css("background-position", "0 0");
    $("#contact-tab").css("background-position", "0 0");
    $("#home-tab").css("background-position", "100% 0%");
    $(".section-four").animate({left: "150%"}, 600);
    $(".section-five").animate({left: "150%"}, 600);
    $(".section-three").animate({right: "150%"}, 600);
    $(".section-two").animate({right: "150%"}, 600);

  });
});
