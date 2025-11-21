const addImageBtn = document.getElementById("add-image-btn");
const imageContainer = document.getElementById("image-container");
const IMAGE_SOURCE = "mee.png";

addImageBtn.addEventListener("click", () => {
  // Clone one more image into the gallery on each click.
  const img = document.createElement("img");
  img.src = IMAGE_SOURCE;
  img.alt = `Gallery item ${imageContainer.children.length + 1}`;
  img.loading = "lazy";
  imageContainer.appendChild(img);
});
