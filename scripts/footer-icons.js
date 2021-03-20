let footerIcons = document.getElementsByClassName("footer-icon");

for (var i = 0; i < footerIcons.length; i++) {

    // Get class instances
    let iconContainer = footerIcons[i];
    let iconMono = iconContainer.getElementsByClassName("icon-mono")[0];
    let iconColor = iconContainer.getElementsByClassName("icon-color")[0];

    // Mouseover event
    iconContainer.addEventListener("mouseover", function(event) {
        iconMono.classList.remove("active");
        iconColor.classList.add("active");
    });

    // Mouseleave event
    iconContainer.addEventListener("mouseleave", function(event) {
        iconMono.classList.add("active");
        iconColor.classList.remove("active");
    });
    
};