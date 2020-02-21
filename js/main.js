// CHECKBOX
$("button.checkbox").click(function(){
  if ($(this).hasClass("selected") == true){
    $(this).removeClass("selected");
  } else {
    $(this).addClass("selected");
  }
});

  //RADIO
$(".radio").click(function(){
  if ($(this).hasClass("selected") == true){
    $(this).removeClass("selected");
  }else{
    $(this).addClass("selected");
  }
});

$(document).ready(function() {
  $('.drawer').drawer();
});

$(function() {
    $('ul.o-list-ui li a').on('click', function(e){
        var $link = $(this);
        var $parentNode = $link.parent();
        var linkLeavesPage = $link.attr('href');
        if (!linkLeavesPage) {
            $parentNode.toggleClass('nav-tree-node-is-open');
        }
    });
});
