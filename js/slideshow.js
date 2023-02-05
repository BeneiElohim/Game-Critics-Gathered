let slideIndex = 1;
console.log("slideIndex: " + slideIndex);
let slides = document.getElementsByClassName("slide");
function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].className.includes("content-box")) {
            slides[i].className = slides[i].className.replace("content-box", "non-active");
        }
    }
    slides[n-1].className = slides[n-1].className.replace("non-active", "content-box");
    console.log("showSlides"+slideIndex);
}
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length || slideIndex < 1) {
        slideIndex = 1;
        showSlides(slideIndex);
    }
    else if (slideIndex < 1 && n == -1) {
        slideIndex = slides.length;
        showSlides(slideIndex);
    }
    else {
        showSlides(slideIndex);
    }

}
showSlides(slideIndex);
// TODO - add a timer to change slides automatically
// TODO Fix back button problem