
const maxBlurPx = 6;
const blurStart = 80;
const blurStop = 500;

function setBodyBackgroundBlur (blurValuePx) {
    // console.log(blurValuePx);
    document.body.style.backdropFilter = "blur(" + blurValuePx + "px)";
}


function setBackgroundBlur(posY, blurStart, blurStop) {
    let blurValuePx = maxBlurPx * (1 - Math.exp( -3 * posY / (blurStop - blurStart) ));
    setBodyBackgroundBlur(blurValuePx);
}

document.body.addEventListener('scroll',()=>{
    var posY = document.documentElement.scrollTop || document.body.scrollTop;
    setBackgroundBlur(posY, blurStart, blurStop);
    // if (posY >= blurStart && posY < blurStop) {
    //     let blurPercent = (posY - blurStart) / (blurStop - blurStart);
    //     let blurValue = blurPercent * maxBlurPx;
    //     setBodyBackgroundBlur(blurValue);
    // }
    // else if (posY < blurStart) {
    //     setBodyBackgroundBlur(0);
    // }
    // else {
    //     setBodyBackgroundBlur(maxBlurPx);
    // }
});