//Scroll to top button for the user
// When the user scrolls down 20px from the top of the document, show the button
// [1]W3Schools.com, How TO - Scroll Back To Top Button.Date Unknown. [Online]. Available:https://www.w3schools.com/howto/howto_js_scroll_to_top.asp[Accessed:10.03.2023]
//Changed code to fit my element names
let scrollButton = document.getElementById("scrollbutton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}