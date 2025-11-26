// Filter logic for artwork categories
const filterButtons = document.querySelectorAll(".art-filter-btn");
const artCards = document.querySelectorAll(".art-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    // update active state
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // show / hide cards
    artCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
