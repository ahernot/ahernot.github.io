function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}




// read screen resolution too

// have an ordered list of imagePaths & overlayPaths in a JSON file
// load the first 10 images with load(0, 10) function
// if more requested, load(10, 20) (will stop at 17 if only 17 imgs available)
// etc


let container = document.getElementById("main-container");
let col1 = container.getElementsByClassName("col-left") [0];
let col2 = container.getElementsByClassName("col-right") [0];

let albumDir = '../../resources/albums/_tests/_sampleAlbum/'

function loadImage (imageDir) {
    console.log('Loading image');

    let imageSize = 'high';

    // Get paths
    let imagePath = imageDir + 'image-' + imageSize + '.png';
    let maskPath1 = imageDir + 'mask-' + imageSize + '-1.png';
    let maskPath2 = imageDir + 'mask-' + imageSize + '-2.png';
    let maskPath3 = imageDir + 'mask-' + imageSize + '-3.png';
    let jsonPath = imageDir + 'info.json';

    // Read JSON
    readTextFile(jsonPath, function(text) {
        let dataDict = JSON.parse(text);
    });
    
    let dataDict = {'location': 'xx'}; // fix

    var elem = `<div class="content-container" id="image-1-1">
    <div class="image-container w2-h3">
        <img src="${imagePath}" alt=""></img>
        <div class="image-overlay" style="background-image: url('${maskPath1}'); background-size: cover;"></div>
        <div class="image-overlay" style="background-image: url('${maskPath2}'); background-size: cover;"></div>
        <div class="image-overlay" style="background-image: url('${maskPath3}'); background-size: cover;"></div>
    
    
        <div class="info-overlay">
            <div class="info-header">${dataDict['location']}</div>
            <div class="info-date">Date</div>
    
            <div class="info-camera">
                <div class="setting-icon-container">
                    <img src="../../resources/icons/icon-camera.svg" class="info-icon"></img>
                </div>
                <div class="val">Camera</div>
            </div>
    
            <ul class="info-settings">
                <li>
                    <div class="setting-icon-container">
                        <img src="../../resources/icons/icon-iso-black.png" class="info-icon" alt="ISO">
                    </div>
                    <div class="val">0</div>
                </li>
                <li>
                    <div class="setting-icon-container">
                        <img src="../../resources/icons/icon-shutterspeed-black.png" class="info-icon" alt="Shutter Speed">
                    </div>
                    <div class="val">0</div>
                </li>
                <li>
                    <div class="setting-icon-container">
                        <img src="../../resources/icons/icon-aperture-black.png" class="info-icon" alt="Aperture">
                    </div>
                    <div class="val">f/0</div>
                </li>
            </ul>
        </div>
    
    </div>
    </div>
    `;

    // Add element
    col1.innerHTML += elem;



};


let imageDir = '../../resources/albums/_tests/_sampleAlbum/2019-08-02_montmartre-batignolles_original/'
    loadImage(imageDir);


// Run script
// window.addEventListener('DOMContentLoaded', (event) => {
//     let imageDir = '../../resources/albums/_tests/_sampleAlbum/2019-08-02_montmartre-batignolles_original/'
//     loadImage(imageDir);

//     // Trigger finished-loading event
//     var ev = new CustomEvent("finished-loading", { "detail": "Example of an event" });
//     document.dispatchEvent(ev);
// });
