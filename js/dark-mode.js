//Dark Mode Toggle Button Code 

// This code takes all the elements that need to be changed when dark mode is enabled and stores them in variables
// It does this by using different methods to get the elements, such as getElementsByClassName, getElementsByTagName and getElementById and then storing them in an array by using the spread operator.
// It then checks if dark mode is enabled, if it is, it runs the darkMode function, if not, it reloads the page

const description = [...document.getElementsByClassName("description")]; //get all the elements with the class description and store them in an array
const contentBox = [...document.getElementsByClassName("content-box")];  //get all the elements with the class content-box and store them in an array
const body = document.getElementsByTagName("body")[0]; //get the body element
const title = [...document.getElementsByClassName("title")]; //get all the elements with the class title and store them in an array
const scoring = [...document.getElementsByClassName("scoring")]; //get all the elements with the class scoring and store them in an array
const table = [...document.getElementsByTagName("table")]; //get all the elements with the tag table and store them in an array
const question = [...document.getElementsByClassName("question")]; //get all the elements with the class question and store them in an array
const questionTitle = [...document.getElementsByClassName("question-title")]; //get all the elements with the class question-title and store them in an array
const titleId = document.getElementById("title"); //get the element with the id title
const review = document.getElementsByClassName("review")[0]; //get the element with the class review
const postInfo = document.getElementsByClassName("post-info")[0]; //get the element with the class post-info
const sectionTitle = [...document.getElementsByClassName("section-title")]; //get all the elements with the class section-title and store them in an array
const h1 = document.getElementById("submission-title"); //get the element with the id submission-title
const submissionText = document.getElementById("submission-text"); //get the element with the id submission-text

//check if dark mode is enabled, if it is, run the darkMode function.
if (localStorage.getItem("darkMode") === "true") {
    darkMode();
}

//this function toggles dark mode on and off
function darkModeToggle() {
    const darkModeEnabled = localStorage.getItem("darkMode") === "true"; //check if dark mode is enabled
    localStorage.setItem("darkMode", !darkModeEnabled); //set dark mode to the opposite of what it is currently
    if (!darkModeEnabled) { //if dark mode is not enabled, run the darkMode function
        darkMode()
    } else {
        document.location.reload(); //if dark mode is enabled, reload the page to disable dark mode
    }
}


//this function changes the elements to dark mode
//it does this by changing the background color and text color of the elements
//it does this by looping through the arrays and changing the style of each element
// every element is wrapped in a try catch block to prevent errors if the element is not found
// this is done because some pages do not have all the elements that are being changed
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