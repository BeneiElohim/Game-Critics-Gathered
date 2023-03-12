// Description: This file contains the code that loads the content from the indexDB into the content boxes
// It does this by using a shuffle algorithm to randomize the order of the content boxes, then it iterates through the indexDB and populates the content boxes with the data from the indexDB

let contentBoxes = document.getElementsByClassName("content-box"); //get all the content boxes
contentBoxes = Array.from(contentBoxes); //convert the HTMLCollection to an array
let nonActiveBoxes = document.getElementsByClassName("non-active"); //get all the non-active boxes
nonActiveBoxes = Array.from(nonActiveBoxes); //convert the HTMLCollection to an array
nonActiveBoxes.forEach(box => { //iterate through the non-active boxes and push them to the contentBoxes array
    if(box.classList.contains("non-active") && !box.classList.contains("content-box")) { //check if the box is a non-active box and not a content box
    contentBoxes.push(box); //push the box to the contentBoxes array
    }
});
 // [3]Laurens, Holst. How to randomize (shuffle) a JavaScript array?, [Post Answer].
 // https://stackoverflow.com/a/12646864
let randomIndex; //declare a variable to store the random index
function shuffleArray(array) { //shuffle the array using the Durstenfeld shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); //get a random index
        [array[i], array[j]] = [array[j], array[i]]; //swap the elements at the random index with the current index
    }
    return array; //return the shuffled array
} 
let modifiedIndexDB = shuffleArray(indexDB); //shuffle the indexDB and store it in a new variable

function loadContent() { 
// get every element from contentBoxes and modify it with the data from indexDB, iterate through all the elements in indexDB
for (let i = 0; i < contentBoxes.length; i++) {
    contentBoxes[i].querySelector(".title").textContent = modifiedIndexDB[i].title;  
    contentBoxes[i].querySelector(".description").textContent = modifiedIndexDB[i].description;
    contentBoxes[i].querySelector(".link").href = modifiedIndexDB[i].url;
    contentBoxes[i].querySelector("img").src = modifiedIndexDB[i].image;
}
}
//wait for the indexDB to be populated, then run the loadContent function with async/await
async function wait() {
await new Promise((resolve) => setTimeout(resolve, 1000));
loadContent();
}
wait();