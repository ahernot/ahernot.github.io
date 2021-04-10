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

    readTextFile("resources/albums/_tests/_sampleAlbum/myFile.json", function(text){
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
