$(".menu-toggle-btn").click(function () {
  $(this).toggleClass("fa-times");
  $(".navigation-menu").toggleClass("active");
});
var page = 1,
    moving = false;
var animationIteration = "animationiteration webkitAnimationIteration mozAnimationIteration oAnimationIteration oanimationiteration",
  transitionEnd      = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd";
$(".load-more").on("click", function() {
  $("html, body").animate({ scrollTop: 1200 }, 1600,'swing');
  if ( moving == false ) {
    moving = true;
    $(".load-more").addClass("active");
    setTimeout(function() {
      $(".load-more").one(animationIteration, function() {
        $(".load-more").removeClass("active");
        $(".load-more").one(transitionEnd, function() {
          page++;
          moving = false;
        });
      });

    }, 2000);
  }
});
