$(document).ready(function() {
  $("#animal1").click(function() {
    $("#animal-name").text("Dolphin");
    $("#animal-description").text("This is a fantastic Dolphin!");
    $("#animal-image").attr("src","img/dolphin.jpg");
    $("#animal-image").show();
  });


  $("#animal2").click(function() {
    $("#animal-name").text("Penguin");
    $("#animal-description").text("This is a legit Penguin!");
    $("#animal-image").attr("src", "img/penguin.jpg");
    $("#animal-image").show();
  });
});
