// let nbItems = 2;

// document.addEventListener('DOMContentLoaded', function() {

//     for (itemId = 0; itemId < nbItems; itemId++) {
//         let itemContainer = document.getElementById("item-" + itemId);
//     }

//     setTimeout(function () {
//         itemDisplay(0, 200);
//     }, 1600);

// }, false);


// function itemDisplay(itemId, itemTimeout) {

//     setTimeout(function() {

//         let itemContainer = document.getElementById("item-" + itemId);
//         console.log(itemId);
//         itemContainer.classList.add("active");

//         if (itemId < nbItems - 1) {
//             itemDisplay(itemId + 1, itemTimeout);
//         }
//         // else if (i == nbItems) {
//         //     introTextContainer.innerHTML = textBegin + text.substring(0, i) + textEnd;
//         // }

//     }, itemTimeout);
// }

var sheets = window.document.styleSheets;
var sheet = sheets[2];
// sheet.insertRule('strong { color: red; }', sheet.cssRules.length);


let items = document.getElementsByClassName("item");

for (var i = 0; i < items.length; i++) {

    // Get class instances
    let item = items[i];
    let itemText = item.getElementsByClassName("item-text")[0];
    

    // Mouseover event
    item.addEventListener("mouseover", function(event) {
        // imageOverlay.classList.add("active");
        //sheet.insertRule('body { backdrop-filter: blur(2px); }', sheet.cssRules.length);
        // document.body.style.backdropFilter = "blur(3px)";
        itemText.style.color = "black";

    });

    // Mouseleave event
    item.addEventListener("mouseleave", function(event) {
        // imageOverlay[0].classList.remove("active");
        // sheet.insertRule('body { backdrop-filter: blur(0px) !important; }', sheet.cssRules.length);
        // document.body.style.backdropFilter = "";
        itemText.style.color = "white";
    });
    
};









// let introTextContainer = document.getElementById("intro-message");
// const text = "Hi.           My name is Anatole.";

// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(function () {
//         sequentialDisplay(0, 40); // Sequentially write message
//     }, 200);
// }, false);


// function sequentialDisplay(i, letterTimeOut) {

//     let textBegin = "“";
//     let textEnd = "”";
//     let textCursor = "_";

//     setTimeout(function() {

//         // Write message up to letter at position i
//         introTextContainer.innerHTML = textBegin + text.substring(0, i) + textCursor;

//         if (i < text.length) {
//             sequentialDisplay(i + 1, letterTimeOut);
//         }
//         else if (i == text.length) {
//             introTextContainer.innerHTML = textBegin + text.substring(0, i) + textEnd;
//         }

//     }, letterTimeOut);
// }
