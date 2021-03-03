
// let imageContainer = document.getElementsByClassName("image-container");
let imageContainer = document.getElementById("image-container")
let imageOverlay = document.getElementById("image-overlay");  // transparent image overlay (appear on hover)

console.log('done');

imageContainer.addEventListener("mouseover", function(event) {
    imageOverlay.classList.add("active");
});

imageContainer.addEventListener("mouseleave", function(event) {
    imageOverlay.classList.remove("active");
});

// Transition must last .2s
