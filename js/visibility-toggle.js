// Description: Toggles the visibility of the answer to a question when the question is clicked
// It is used on the faq page
//

const questions = Array.from(document.getElementsByClassName("question-link")); //get all the questions
const answers = Array.from(document.getElementsByClassName("question-answer")); //get all the answers
for (let i = 0; i < questions.length; i++) {
    answers[i].style.display = "none"; //set the display style of the answers to none
    questions[i].addEventListener("click", function () { //add an event listener to the questions
        if (answers[i].style.display === "none") { //check if the display style of the answer is none
            answers[i].style.display = "block"; //set the display style of the answer to block
        }
        else {
            answers[i].style.display = "none"; //set the display style of the answer to none
        }
    });
}
