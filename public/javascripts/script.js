$(document).ready(function() {
  $(".ui.dropdown").dropdown({
    onChange: function(val) {
      if (val === "profile") {
        window.location = "/profile";
      } else {
        window.location = "/logout";
      }
    }
  });
});
