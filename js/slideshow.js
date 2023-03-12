// This script is used to show the slideshow on the home page
// It does this by using the setInterval function to change the slide every 5 seconds
// It also uses the showSlides function to show the slide with the index of the slideIndex variable
// The changeSlide function is used to change the slideIndex variable
// It is used on the home page

let slideIndex = 1; //set the slideIndex variable to 1
let intervalInMiliseconds = 5000; //set the interval to 5 seconds
let slides = document.getElementsByClassName("slide"); //get all the slides
function showSlides(n) {
    for (let i = 0; i < slides.length; i++) { //iterate through the slides
        if (slides[i].className.includes("content-box")) { //check if the slide is a content box
            slides[i].className = slides[i].className.replace("content-box", "non-active"); //replace the content-box class with the non-active class
        }
    }
    slides[n-1].className = slides[n-1].className.replace("non-active", "content-box"); //replace the non-active class with the content-box class
}
function changeSlide(n) {
    slideIndex += n; //change the slideIndex variable
    if (slideIndex > slides.length) { //check if the slideIndex variable is greater than the number of slides
      slideIndex = 1; //set the slideIndex variable to 1
    } else if (slideIndex < 1) { //check if the slideIndex variable is less than 1
      slideIndex = slides.length; //set the slideIndex variable to the number of slides
    } 
    showSlides(slideIndex); //show the slide with the index of the slideIndex variable
  }
setInterval(changeSlide, intervalInMiliseconds, 1);   //change the slide every 5 seconds
showSlides(slideIndex); //show the slide with the index of the slideIndex variable