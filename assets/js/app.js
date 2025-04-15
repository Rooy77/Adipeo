window.onscroll = function() {myFunction()};
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
// When the user clicks anywhere outside of the modal, close it
// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02')
// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == modal && modal2) {
      modal.style.display = "none"
      modal2.style.display = "none"
  }
}


/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
    $(modal2).removeClass("hover")
  }
);

//scrol bard

$(window).on("scroll", function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
      $("#site-header").addClass("nav-fixed");
  } else {
      $("#site-header").removeClass("nav-fixed");
  }
});

//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function() {
  $("header").toggleClass("active");
});
$(document).on("ready", function() {
  if ($(window).width() > 991) {
      $("header").removeClass("active");
  }
  $(window).on("resize", function() {
      if ($(window).width() > 991) {
          $("header").removeClass("active");
      }
  });
});

//MENU-JS -->

  //  <!-- disable body scroll which navbar is in active -->
    
$(function() {
    $('.navbartoggler').click(function() {
        $('body').toggleClass('noscroll');
    })
});

