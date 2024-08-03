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
document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  const target = document.querySelector('.demolitionText');
  observer.observe(target);
});