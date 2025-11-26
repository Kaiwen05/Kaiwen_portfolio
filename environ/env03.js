// 1. A simple text variable
let title = "Anya Forger's Summer Day";

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

// 4. Function to generate the description
function generateDescription() {
  let description = "<h2>" + title + "</h2>";
  description += "<p>This environment includes: " + elements.join(", ") + ".</p>";
  description += "<p>" + anya.name + " is " + anya.age + " years old and her favorite snack is " + anya.favoriteThing + ".</p>";
  description += "<p>She often plays with " + anya.friends.join(", ") + ".</p>";
  return description;
}

// 5. Print it on the HTML page
$("#output").append(generateDescription());
