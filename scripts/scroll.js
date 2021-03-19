
const maxBlurPx = 10;
const blurStart = 80;
const blurStop = 300;

function setBodyBackgroundBlur (blurValuePx) {
    // console.log(blurValuePx);
    document.body.style.backdropFilter = "blur(" + blurValuePx + "px)";
}

document.body.addEventListener('scroll',()=>{
    var posY = document.documentElement.scrollTop || document.body.scrollTop;

    if (posY >= blurStart && posY < blurStop) {
        let blurPercent = (posY - blurStart) / (blurStop - blurStart);
        let blurValue = blurPercent * maxBlurPx;
        setBodyBackgroundBlur(blurValue);
    }
    else if (posY < blurStart) {
        setBodyBackgroundBlur(0);
    }
    else {
        setBodyBackgroundBlur(maxBlurPx);
    }
});