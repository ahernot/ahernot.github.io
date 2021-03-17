let nbItems = 2;


document.addEventListener('DOMContentLoaded', function() {

    for (itemId = 0; itemId < nbItems; itemId++) {
        let itemContainer = document.getElementById("item-" + itemId);
    }

    setTimeout(function () {
        itemDisplay(0, 200); // Sequentially write message
    }, 1600);

}, false);






function itemDisplay(itemId, itemTimeout) {

    setTimeout(function() {

        let itemContainer = document.getElementById("item-" + itemId);
        console.log(itemId);
        itemContainer.classList.add("active");

        if (itemId < nbItems - 1) {
            itemDisplay(itemId + 1, itemTimeout);
        }
        // else if (i == nbItems) {
        //     introTextContainer.innerHTML = textBegin + text.substring(0, i) + textEnd;
        // }

    }, itemTimeout);
}









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
