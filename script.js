const modelViewer = document.querySelector("model-viewer");

// Set modelViewer dimensions
modelViewer.style.width = "100%";
modelViewer.style.height = "100vh";

document.addEventListener('DOMContentLoaded', () => {
  // Upload model functionality
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
      modelViewer.onload = () => {
        URL.revokeObjectURL(modelViewer.src);
      }
      modelViewer.src = URL.createObjectURL(this.files[0]);
    }
  });

  // Choose model functionality
  window.switchSrc = (element, name) => {
    modelViewer.src = `./glb/${name}.glb`;
    modelViewer.poster = `./slider/${name}.webp`;
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => slide.classList.remove("selected"));
    element.classList.add("selected");
  };

  // Slider interaction
  document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
    ev.preventDefault();
  });
});
