// Switch between the three panels
const navButtons = document.querySelectorAll(".nav-btn");
const panels = document.querySelectorAll(".panel");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");

    // Active button style
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show the correct panel
    panels.forEach((panel) => {
      panel.classList.toggle("show", panel.id === target);
    });
  });
});

// rainbow sparkles on click
document.addEventListener("click", (event) => {
  const colors = ["#ff9cf5", "#ffd37b", "#9fd8ff", "#b1ffb9", "#ffb3c1"];

  const sparkle = document.createElement("div");
  sparkle.classList.add("click-sparkle");

  const size = 8 + Math.random() * 10;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  sparkle.style.left = event.clientX + "px";
  sparkle.style.top = event.clientY + "px";

  sparkle.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 700);
});


