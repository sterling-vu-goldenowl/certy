$(document).ready(function() {
  /* show tooltip arrow */
  $('[data-toggle="tooltip"]').tooltip({ placement: "right" });

  /* window scroll */
  $(window).scroll(function() {
    if ($(document).scrollTop() > 80) {
      $("div.left-content").addClass("scroll-content");
      $("div.right-side-bar").addClass("scroll-right-content");
    } else {
      $("div.left-content").removeClass("scroll-content");
      $("div.right-side-bar").removeClass("scroll-right-content");
    }
  });

  /* show share-icon */
  $("#btn-share").hover(
    function() {
      $(".share-icon").css('display','flex');
    },
    function() {
      $(".share-icon").css('display','none');
    }
  );

  $(".share-icon").hover(
    function() {
      $(".share-icon").show();
    },
    function() {
      $(".share-icon").hide();
    }
  );

  /* animate at middle */
  $("div.portfolio-img-wrap").hover(function() {
    $("h4.text").slideDown("slow");
  });

  var $isotopeContainer = $(".portfolio-wrap").isotope({
    itemSelector: ".portfolio-img-wrap"
  });

  $(".portfolio-button-wrap button").click(function() {
    $(".portfolio-button-wrap .active").removeClass("active");
    $(this).addClass("active");

    var filterValue = $(this).attr("data-filter");
    $isotopeContainer.isotope({
      filter: filterValue
    });
    return false;
  });
});
