let imageContainers = document.getElementsByClassName("image-container");

for (var i = 0; i < imageContainers.length; i++) {

    // Get class instances
    let imageContainer = imageContainers[i];
    let infoOverlay = imageContainer.getElementsByClassName("info-overlay")[0];

    // Continue loop if no matching subclass
    if (infoOverlay == undefined) {
        continue;
    }

    // Mouseover event
    imageContainer.addEventListener("mouseover", function(event) {
        var windowWidth = window.innerWidth;
        infoOverlay.classList.add("active");
    });

    // Mouseleave event
    imageContainer.addEventListener("mouseleave", function(event) {
        infoOverlay.classList.remove("active");
    });

    // Click event (with timeout)
    // imageContainer.addEventListener("click", function(event) {
    //     setTimeout(function () {
    //         infoOverlay.classList.remove("active");
    //     }, 300);
    // });
    
};
