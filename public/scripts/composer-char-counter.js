$(document).ready(function() {

  $("#tweet-text").on("input", function(event) {
    const charsLeft = 140 - $(this).val().length; //val is getting the text from text area - not setting new value

    let counter = $(this).siblings().children(".counter").text(charsLeft);
    
    if (charsLeft < 0) {
      counter.addClass("add-color");
    } else {
      counter.removeClass("add-color");
      $("#error").slideUp();
      $("#empty").slideUp();
    }
  });
});



// $("#tweet-text").keyup(function(){
//   $(".counter").text((140 - $(this).val().length));
// });

