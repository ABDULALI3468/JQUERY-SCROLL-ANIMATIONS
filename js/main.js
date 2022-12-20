jQuery(window).load(function () {
  // console.log("BISMILLAH");

  var windowHeight;
  var windowScrollPosTop;
  var windowScrollPosBottom;

  jQuery.fn.revealOnScroll = function (direction, speed) {
    return this.each(function () {
      if (!jQuery(this).hasClass("hidden")) {
        if (direction == "right") {
          jQuery(this).css({
            // opacity: 0,
            right: "700px",
            position: "relative",
          });
        } else {
          jQuery(this).css({
            // opacity: 0,
            right: "-700px",
            position: "relative",
          });
        }
        jQuery(this).addClass("hidden");
      }

      windowHeight = jQuery(window).height();
      windowScrollPosTop = jQuery(window).scrollTop();
      windowScrollPosBottom = windowHeight + windowScrollPosTop;

      var offset = jQuery(this).position();
      var offsetTop = offset.top;

      if (!jQuery(this).hasClass("animation-complete")) {
        if (windowScrollPosBottom > offsetTop) {
          console.log("BISMILLAH");
          jQuery(this).animate({ right: "0" }, speed).addClass("animation-complete");
        }
      }
    });
  };

  function revealCommands() {
    jQuery("img:nth-of-type(1)").revealOnScroll("right", 800);
    jQuery("img:nth-of-type(2)").revealOnScroll("left", 400);
    jQuery("img:nth-of-type(3)").revealOnScroll("right", 1200);
    jQuery("ul li:even").revealOnScroll("left", 800);
    jQuery("ul li:odd").revealOnScroll("right", 800);
    jQuery(".sidebar").revealOnScroll("left", 1500);
  } // end reveal commands

  revealCommands();
  jQuery(window).scroll(function () {
    revealCommands();
  });

  jQuery(".EMPTY").click(function () {
    // jQuery(".mas").empty();
    jQuery(".mas").innerWidth("350px");
  });
  jQuery(".REMOVE").click(function () {
    jQuery(".mas").remove();
  });
});


$('p').toggle(3000, function() {
  console.log("I AM A CALLBACK AND WILL RUN ONCE THE ABOVE OPERATION HAS BEEN COMPLETED INSHALLAH")
})
