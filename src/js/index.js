$(document).ready(function(){

  if(location.search == "?thanks") {
    var thanksHtml = "<div class=\"thanks\">Thanks! I'll be in touch as soon as I can!</div>";
    $(".js-thanks").append(thanksHtml);
  };
});


