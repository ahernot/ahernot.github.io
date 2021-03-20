let footerIcons = document.getElementsByClassName("footer-icon");

let darkMode = false;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode = true;
}

for (var i = 0; i < footerIcons.length; i++) {

    // Get class instances
    let iconContainer = footerIcons[i];

    // Get elements
    let iconMonoLight = iconContainer.getElementsByClassName("icon-mono-light")[0];
    let iconMonoDark = iconContainer.getElementsByClassName("icon-mono-dark")[0];
    let iconColor = iconContainer.getElementsByClassName("icon-color")[0];

    // Check if wrong icon for current theme
    console.log(iconMonoLight.classList);
    if ((darkMode) && (iconMonoLight.classList.contains("active") >= 0)) {
        iconMonoLight.classList.remove("active");
        iconMonoDark.classList.add("active");
    }
    else if (!(darkMode) && (iconMonoDark.classList.contains("active") >= 0)) {
        iconMonoLight.classList.add("active");
        iconMonoDark.classList.remove("active");
    }

    // Mouseover event
    iconContainer.addEventListener("mouseover", function(event) {
        iconMonoLight.classList.remove("active");
        iconMonoDark.classList.remove("active");
        iconColor.classList.add("active");
    });

    // Mouseleave event
    iconContainer.addEventListener("mouseleave", function(event) {
        if (darkMode) {
            iconMonoDark.classList.add("active");
        } else { // light mode or media queries unsupported
            iconMonoLight.classList.add("active");
        }
        iconColor.classList.remove("active");
    });
    
};
