let imageContainers = document.getElementsByClassName("image-container");

for (var i = 0; i < imageContainers.length; i++) {

    // Get class instances
    let imageContainer = imageContainers[i];
    let imageOverlay = imageContainer.getElementsByClassName("image-overlay");

    // Mouseover event
    imageContainer.addEventListener("mouseover", function(event) {
        imageOverlay[0].classList.add("active");
    });

    // Mouseleave event
    imageContainer.addEventListener("mouseleave", function(event) {
        imageOverlay[0].classList.remove("active");
    });

    // Click event
    imageContainer.addEventListener("click", function(event) {
        imageOverlay[0].classList.remove("active");
    });
    
};
