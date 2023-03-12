//description: #ffffff
//content box background: 635985
//body background color 18122b
//title color: #ffffff
//scoring background 635985
//table color #ffffff
//question bacground color 635985
//question title color #ffffff
const description = [...document.getElementsByClassName("description")];
const contentBox = [...document.getElementsByClassName("content-box")]; 
const body = document.getElementsByTagName("body")[0];
const title = [...document.getElementsByClassName("title")];
const scoring = [...document.getElementsByClassName("scoring")];
const table = [...document.getElementsByTagName("table")];
const question = [...document.getElementsByClassName("question")];
const questionTitle = [...document.getElementsByClassName("question-title")];
const titleId = document.getElementById("title");
const review = document.getElementsByClassName("review")[0];
const postInfo = document.getElementsByClassName("post-info")[0];
const sectionTitle = [...document.getElementsByClassName("section-title")];
const h1 = document.getElementById("submission-title");
const submissionText = document.getElementById("submission-text");

if (localStorage.getItem("darkMode") === "true") {
    darkMode();
}

function darkModeToggle() {
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    localStorage.setItem("darkMode", !darkModeEnabled);
    if (!darkModeEnabled) {
        darkMode()
    } else {
        document.location.reload();
    }
}
function darkMode() {
    try {
        description.forEach(element => {
            element.style.color = "#ffffff";
        });
    } catch (error) {
        console.log(error);
    }
    try {
        contentBox.forEach(element => {
            element.style.backgroundColor = "#635985";
        });
    } catch (error) {
        console.log(error);
    }
    try {
        body.style.backgroundColor = "#18122b";
    } catch (error) {
        console.log(error);
    }
    try {
        title.forEach(element => {
            element.style.color = "#ffffff";
        });
    } catch (error) {
        console.log(error);
    }
    try {
        scoring.forEach(element => {
            element.style.backgroundColor = "#635985";
        });
    } catch (error) {
        console.log(error);
    }
    try {
        table.forEach(element => {
            element.style.color = "#ffffff";
        });
    } catch (error) {
        console.log(error);
    }
    try {
        question.forEach(element => {
            element.style.backgroundColor = "#635985";
        });
    } catch (error) {
        console.log(error);
    }
    try {
        questionTitle.forEach(element => {
            element.style.color = "#ffffff";
        });
    } catch (error) {
        console.log(error);
    }
    try {
        titleId.style.color = "#ffffff";
    } catch (error) {
        console.log(error);
    }
    try {
        review.style.backgroundColor = "#635985";
    } catch (error) {
        console.log(error);
    }
    try {
        postInfo.style.color = "#ffffff";
    } catch (error) {
        console.log(error);
    }
    try {
        sectionTitle.forEach(element => {
            element.style.color = "#ffffff";
        });
    } catch (error) {
        console.log(error);
    }
    try {
        h1.style.color = "#ffffff";
    } catch (error) {
        console.log(error);
    }
    try {
        submissionText.style.color = "#ffffff";
    }
    catch (error) {
        console.log(error);
    }
    
}