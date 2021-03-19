


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function () {
        let img = document.getElementById("panorama-0"); 
        let width = img.naturalWidth;//width;//clientWidth;
        let height = img.naturalHeight;//height;//clientHeight;
        console.log(width, height);
    }, 100);

}, false);


// $(document).ready(function(){
//     var img = $("#panorama-0");
//     // Create dummy image to get real width and height
//     $("<img>").attr("src", $(img).attr("src")).load(function(){
//         var realWidth = this.width;
//         var realHeight = this.height;
//         alert("Original width=" + realWidth + ", " + "Original height=" + realHeight);
//     });
// });
