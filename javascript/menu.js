// // Toggle menu button
// $(".menu-toggle-btn").click(function () {
//     $(this).toggleClass("fa-times");
//     $(".navigation-menu").toggleClass("active");
//   });
//   // Load more button click event
// $(".load-more").on("click", function() {
//     if (moving === false) {
//       moving = true;
//       $("html, body").animate({ scrollTop: "+=1200px" }, 1600, 'swing', function() {
//         $(".load-more").addClass("active");
//         setTimeout(function() {
//           $(".load-more").one(animationIteration, function() {
//             $(".load-more").removeClass("active");
//             $(".load-more").one(transitionEnd, function() {
//               page++;
//               moving = false;
//             });
//           });
//         }, 2000);
//       });
//     }
//   });

