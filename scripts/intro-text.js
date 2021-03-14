
let introTextContainer = document.getElementById("intro-message");
const text = "Hi.           My name is Anatole.";

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function () {
        sequentialDisplay(0, 40); // Sequentially write message
    }, 200);
}, false);


function sequentialDisplay(i, letterTimeOut) {

    let textBegin = "“";
    let textEnd = "”";
    let textCursor = "_";

    setTimeout(function() {

        // Write message up to letter at position i
        introTextContainer.innerHTML = textBegin + text.substring(0, i) + textCursor;

        if (i < text.length) {
            sequentialDisplay(i + 1, letterTimeOut);
        }
        else if (i == text.length) {
            introTextContainer.innerHTML = textBegin + text.substring(0, i) + textEnd;
        }

    }, letterTimeOut);
}
