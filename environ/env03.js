// env03.js — Describing the Environment

// 1. A simple text variable
let title = "Anya Forger’s Summer Day";

// 2. An array describing scene elements
let elements = ["beach", "sand castle", "friends", "dog", "sunshine"];

// 3. An object describing the main character
let anya = {
    name: "Anya Forger",
    age: 6,
    ability: "mind reading",
    favoriteThing: "peanuts",
    friends: ["Loid", "Yor", "Bond"]
};

// 4. Create a mega text to describe the environment
let description = "<h2>" + title + "</h2>";
description += "<p>This environment includes: " + elements.join(", ") + ".</p>";
description += "<p>" + anya.name + " is " + anya.age + " years old and can " + anya.ability + ".</p>";
description += "<p>Her favorite snack is " + anya.favoriteThing + 
               " and she often plays with " + anya.friends.join(", ") + ".</p>";

// 5. Print it on the HTML page (to a div you'll add in env03.html)
$("body").append('<div id="output"></div>');
$("#output").append(description);
