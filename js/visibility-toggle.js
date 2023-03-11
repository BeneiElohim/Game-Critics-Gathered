const questions = Array.from(document.getElementsByClassName("question-link"));
const answers = Array.from(document.getElementsByClassName("question-answer"));
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        if (answers[i].style.display === "none") {
            answers[i].style.display = "block";
        }
        else {
            answers[i].style.display = "none";
        }
    });
}