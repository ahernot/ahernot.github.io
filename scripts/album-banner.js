
// Initial values
let albumMarginPx = 5;
let albumWidthPx = 450;

// Initial elements
let albumBanners = document.getElementsByClassName("album-banner");
let albumsMain = document.getElementById("albums-main");


function resizeBanner () {
    // Get width of album container
    let containerWidthPx = albumsMain.clientWidth;

    // Calculate number of albums currently displayed
    let nbAlbumsWide = 1;
    if (containerWidthPx > 750) {
        nbAlbumsWide = Math.floor( (containerWidthPx - albumMarginPx) / (albumWidthPx + albumMarginPx + 4) ); // 4 or 5???
    }


    // Calculate banner width
    let bannerWidth = containerWidthPx; // remove margins here too
    if (nbAlbumsWide == 1) {
    }
    else {
        bannerWidth = nbAlbumsWide * albumWidthPx + (nbAlbumsWide + 1) * albumMarginPx;
    }

    // Update banner width
    for (var i = 0; i < albumBanners.length; i++) {
        albumBanners[i] .style.width = bannerWidth.toString() + "px";
    }
};


document.addEventListener('DOMContentLoaded', function() {
    resizeBanner();
}, false);

window.addEventListener('resize', function(event) {
    resizeBanner();
});

// add an overlay for hover as well
