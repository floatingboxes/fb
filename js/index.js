$(document).ready(function(){

  // Contact form Thank You
  if(location.search == "?thanks") {
    var thanksHtml = "<div class=\"thanks\">Thanks! I'll be in touch as soon as I can!</div>";
    $(".js-thanks").append(thanksHtml);
  };




  // Live filter on resources page
  $(".js-filter-input").keyup(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $(".resource").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
 
    });
});


