window.onload = function() {
  count = $(".slide2").length;
p = count - 1;
n = count - 2;
// Sets the slide-container and individual slide size
$(".slide2-container").css("width", 100*count+"%");
$(".slide2").css("width", 100/count + "%");

// Conditional statement for clicking next
var curr = 0;
$( ".next" ).click(function(e) {
  e.preventDefault();
  if (curr > n){
    curr = 0;
  } else {
    curr++;
  }
  $(".slide2-container").css({
    marginLeft: curr*-100 + "%"
  });
});

// Conditional statement for clicking prev
$( ".prev" ).click(function(e) {
  e.preventDefault();
  if (curr < 1){
    curr = p;
  } else {
    curr--;
  }
  $(".slide2-container").css({
    marginLeft: curr*-100 + "%"
  });
});

    
  };