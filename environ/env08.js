$("#creature").click(function() {
  $("#status").text("You clicked me! 🐾");
  $("#creature").css("background", "lavender");
});

$("#creature").hover(
  function() { $("#status").text("You’re close... 👀"); },
  function() { $("#status").text("You left me :("); }
);

$("#creature").dblclick(function() {
  $("#status").text("You woke me up!! 😳");
  $("#creature").css("transform", "scale(1.2)");
});

$(document).keydown(function(event) {
  $("#status").text("You pressed: " + event.key);
});

let follow = false;

$("#creature").mousedown(function () {
    follow = true;
});

$(document).mouseup(function () {
    follow = false;
});

$(document).mousemove(function (event) {
    if (follow) {
        $("#creature").css({
            left: event.pageX - 60,
            top: event.pageY - 60,
            position: "absolute"
        });
    }
});

$("#name-input").focus(function () {
    $("#status").text("You are giving me a name!");
    $("#creature")
        .stop(true, true) // 防止动画排队
        .animate(
            {
                width: "160px",
                height: "160px",
                borderRadius: "40px"
            },
            300
        )
        .css("box-shadow", "0 0 25px hotpink");
});

$("#name-input").blur(function () {
    $("#status").text("I am back to normal.");
    $("#creature")
        .stop(true, true)
        .animate(
            {
                width: "120px",
                height: "120px",
                borderRadius: "20px"
            },
            300
        )
        .css("box-shadow", "none");
});