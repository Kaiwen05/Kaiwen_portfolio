$(function(){

  // hover sun grows and hero walks to center
  $("#sun").hover(
    function(){
      $(this).stop().animate({ width:140, height:140 }, 300);
      $("#hero").stop().animate({ left:260 }, 700);
    },
    function(){
      $(this).stop().animate({ width:100, height:100 }, 300);
      $("#hero").stop().animate({ left:40 }, 700);
    }
  );

  // click cloud toggles tree
  $("#cloud").on("click", function(){
    $("#tree").fadeToggle(500);
  });

  // hero small jump on hover
  $("#hero").hover(
    function(){ $(this).stop().animate({ bottom:42 }, 180); },
    function(){ $(this).stop().animate({ bottom:12 }, 180); }
  );

  // click tree nudges cloud
  $("#tree").on("click", function(){
    $("#cloud").stop().animate({ left: "+=24" }, 250)
                 .animate({ left: "-=24" }, 250);
  });

});
