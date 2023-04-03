$(document).ready(function () {
  // --- our code goes here ---
  $("#tweet-text").on('input', function () {
    const value = $(this).val();
    console.log(value.length);
    const diff = 140 - value.length;
    $("#counter").text(diff);
    $("#counter").css("color", (diff < 0 ? "#ff0000" : "#000"));
 
  });

});