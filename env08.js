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
        .stop(true, true) 
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

const renameMessages = [
    "Nice to meet you, NAME! 🌟",
    "NAME? That's legendary. 🚀",
    "From now on, call me NAME the Brave. 🛡️",
    "NAME unlocked a secret dance move! 💃",
    "Bow to NAME, ruler of pixels. 👑"
];

$("#rename-btn").click(function () {
    const inputName = $("#name-input").val().trim();
    const $creature = $("#creature");
    const $status = $("#status");

    if (!inputName) {
        $status.text("Give me a cool name first! 🤔");
        $creature.addClass("shake");
        setTimeout(() => $creature.removeClass("shake"), 450);
        return;
    }

    $("#name-display").text(`Now I am ${inputName}!`);
    $creature.text(inputName);

    const message =
        renameMessages[Math.floor(Math.random() * renameMessages.length)].replace("NAME", inputName);
    $status.text(message);

    $creature
        .css("background", "linear-gradient(135deg, #ffd1dc, #c2b3ff)")
        .css("transform", "scale(1.12) rotate(-2deg)");

    setTimeout(() => {
        $creature.css("transform", "scale(1)");
    }, 300);
});
