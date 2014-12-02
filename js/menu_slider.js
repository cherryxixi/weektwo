$(function(){
  $(".category-item").each(function(){
    $(this).hover(mouseIn,mouseOut);
  });

  $(".category").mouseleave(reset);
});

var mouseIn = function(){
  var left = $(this).get(0).offsetLeft;
  $(".slider").animate({left:left}, "normal");
}

var mouseOut = function(){
  $(".slider").stop(true);
}

var reset = function(){
  $(".slider").animate({left:0}, "fast");
}