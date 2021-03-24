let footerIcons = document.getElementsByClassName("footer-icon");

function isDarkMode () {
    let darkMode = false;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkMode = true;
    }
    return darkMode;
}

// Change icons on theme update (revert to mono icons)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    for (var i = 0; i < footerIcons.length; i++) {
        let darkMode = e.matches;

        // Get class instances
        let iconContainer = footerIcons[i];
    
        // Get elements
        let iconMonoLight = iconContainer.getElementsByClassName("icon-mono-light")[0];
        let iconMonoDark = iconContainer.getElementsByClassName("icon-mono-dark")[0];
        let iconColor = iconContainer.getElementsByClassName("icon-color")[0];
    
        // Check if wrong icon for current theme
        if ((darkMode) && (iconMonoLight.classList.contains("active") >= 0)) {
            iconMonoLight.classList.remove("active");
            iconMonoDark.classList.add("active");
        }
        else if (!(darkMode) && (iconMonoDark.classList.contains("active") >= 0)) {
            iconMonoLight.classList.add("active");
            iconMonoDark.classList.remove("active");
        }
        iconColor.classList.remove("active");
    }
});

for (var i = 0; i < footerIcons.length; i++) {

    // Get class instances
    let iconContainer = footerIcons[i];

    // Get elements
    let iconMonoLight = iconContainer.getElementsByClassName("icon-mono-light")[0];
    let iconMonoDark = iconContainer.getElementsByClassName("icon-mono-dark")[0];
    let iconColor = iconContainer.getElementsByClassName("icon-color")[0];

    // Check if wrong icon for current theme (without theme update)
    darkMode = isDarkMode();
    if ((darkMode) && (iconMonoLight.classList.contains("active") >= 0)) {
        iconMonoLight.classList.remove("active");
        iconMonoDark.classList.add("active");
    }
    else if (!(darkMode) && (iconMonoDark.classList.contains("active") >= 0)) {
        iconMonoLight.classList.add("active");
        iconMonoDark.classList.remove("active");
    }

    // Add mouseover event
    iconContainer.addEventListener("mouseover", function(event) {
        darkMode = isDarkMode();

        iconMonoLight.classList.remove("active");
        iconMonoDark.classList.remove("active");
        iconColor.classList.add("active");
    });

    // Add mouseleave event
    iconContainer.addEventListener("mouseleave", function(event) {
        darkMode = isDarkMode();

        if (darkMode) {
            iconMonoDark.classList.add("active");
        } else { // light mode or media queries unsupported
            iconMonoLight.classList.add("active");
        }
        iconColor.classList.remove("active");
    });



    // Add click event (https://stackoverflow.com/questions/8291517/disable-hover-effects-on-mobile-browsers) with timeout
    iconContainer.addEventListener("click", function(event) {
        setTimeout(function () {
        
            darkMode = isDarkMode();
            if (darkMode) {
                iconMonoDark.classList.add("active");
            } else { // light mode or media queries unsupported
                iconMonoLight.classList.add("active");
            }
            iconColor.classList.remove("active");
        
        }, 300); 
    });
    
};
