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

//usage:
// readTextFile("resources/albums/_tests/_sampleAlbum/myFile.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });


let testContainer = document.getElementById("test-msg");

document.addEventListener('DOMContentLoaded', function() {

    readTextFile("../../resources/albums/_tests/_sampleAlbum/myFile.json", function(text) { // "resources/albums/_tests/_sampleAlbum/myFile.json
        var data = JSON.parse(text);
        for (key in data) {
            console.log(key);
            // val = data[key]
            // testContainer.innerHTML += key + ": " + val + "<br>";
        }
    });
}, false);







// read screen resolution too

// have an ordered list of imagePaths & overlayPaths in a JSON file
// load the first 10 images with load(0, 10) function
// if more requested, load(10, 20) (will stop at 17 if only 17 imgs available)
// etc






var elem = `<div class="content-container" id="image-1-1">
<div class="image-container w2-h3">
    <img src="../../resources/albums/urban-photography/2019-08-02_montmartre-batignolles_original-watermarked.png" alt=""></img>
    <div class="image-overlay" style="background-image: url('../../resources/albums/urban-photography/2019-08-02_montmartre-batignolles_original-watermarked-mask0.png'); background-size: cover;"></div>
    <div class="image-overlay" style="background-image: url('../../resources/albums/urban-photography/2019-08-02_montmartre-batignolles_original-watermarked-mask1.png'); background-size: cover;"></div>
    <div class="image-overlay" style="background-image: url('../../resources/albums/urban-photography/2019-08-02_montmartre-batignolles_original-watermarked-mask2.png'); background-size: cover;"></div>


    <div class="info-overlay">
        <div class="info-header">Location</div>
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

let container = document.getElementById("main-container");
let col1 = container.getElementsByClassName("col-left") [0];
let col2 = container.getElementsByClassName("col-right") [0];
col1.innerHTML += elem;
