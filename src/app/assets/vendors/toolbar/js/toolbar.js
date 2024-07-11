(function ($) {
  "use strict";

  // boxed layout switcher
  if ($(".boxed-switcher").length) {
    $(".boxed-switcher").on("click", function () {
      $("body").toggleClass("boxed-wrapper");
    });
  }

  // color switcher

  if ($("#styleOptions").length) {
    $("#styleOptions").styleSwitcher({
      hasPreview: false,
      fullPath: "assets/css/colors/",
      cookie: {
        expires: 999,
        isManagingLoad: true
      }
    });
  }

  // if ($("#colorMode").length) {
  //   $("#colorMode").styleSwitcher({
  //     hasPreview: false,
  //     fullPath: "assets/css/",
  //     defaultThemeId: 'jssMode',
  //     cookie: {
  //       expires: 999,
  //       isManagingLoad: true
  //     }
  //   });
  // }

  // if ($(".style-switcher").length) {
  //   $("#switcher-toggler").on("click", function (e) {
  //     e.preventDefault();
  //     $(".style-switcher").toggleClass("active");
  //   });
  // }

//   if($(".style-switcher").)
//   $(document).ready(function () {
                
//     window.location.href="contact.html#link"
// });
})(jQuery);

function myHash() {
  $(document).ready(function () {
            
              window.location.href="contact.html#link"

  });
}

function ourTeam(){
  $(document).ready(function () {
            
    window.location.href="about.html#team"

});
}