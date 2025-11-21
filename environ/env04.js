const title = "Anya Forger's Summer Day";

const elements = ["beach", "sand castle", "friends", "dog", "sunshine"];

const anya = {
  name: "Anya Forger",
  age: 6,
  ability: "mind reading",
  favoriteThing: "peanuts",
  friends: ["Loid", "Yor", "Bond"]
};

const environmentEl = $("#environment");
const outputEl = $("#output");
let isNight = false;

function remixEnvironment(timeOfDay, missionMood, snackCount, guestName) {
  const isNightMode = timeOfDay === "night";
  environmentEl.removeClass("day night").addClass(isNightMode ? "night" : "day");

  const featureList = isNightMode ? elements.slice(0, 2) : elements.slice(0, 3);
  const missionStatus =
    missionMood === "mission"
      ? `${anya.name} is on a quiet mission with ${guestName}.`
      : `${anya.name} plays with ${guestName}.`;

  const snackStatus =
    snackCount > 2
      ? `Snack bags: ${snackCount}. Plenty to share.`
      : `Snack bags: ${snackCount}. She keeps them safe.`;

  const abilityLine = `Skill: ${anya.ability}.`;

  outputEl.html(`
    <h2>${isNightMode ? "Moonlit Mission" : title}</h2>
    <p>Scene items: ${featureList.join(", ")}.</p>
    <p>${missionStatus}</p>
    <p>${snackStatus}</p>
    <p>${abilityLine}</p>
  `);
}

function nextSceneConfig() {
  isNight = !isNight;
  if (isNight) {
    return ["night", "mission", 1, anya.friends[2]];
  }
  return ["day", "play", 4, anya.friends[1]];
}

$(function () {
  remixEnvironment("day", "play", 4, anya.friends[0]);

  $("#toggle-scene").on("click", function () {
    const config = nextSceneConfig();
    remixEnvironment(...config);
  });
});
