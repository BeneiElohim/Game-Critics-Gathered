let contentBoxes = document.getElementsByClassName("content-box");
contentBoxes = Array.from(contentBoxes);
let nonActiveBoxes = document.getElementsByClassName("non-active");
nonActiveBoxes = Array.from(nonActiveBoxes);
nonActiveBoxes.forEach(box => {
    if(box.classList.contains("non-active") && !box.classList.contains("content-box")) {
    contentBoxes.push(box);
    }
});
let randomIndex;
function shuffleArray(array) {
    //Durstenfeld shuffle algorithm - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let modifiedIndexDB = shuffleArray(indexDB);

function loadContent() {
// get every element from contentBoxes and modify it with the data from indexDB, iterate through all the elements in indexDB
for (let i = 0; i < contentBoxes.length; i++) {
    contentBoxes[i].querySelector(".title").textContent = modifiedIndexDB[i].title;
    contentBoxes[i].querySelector(".description").textContent = modifiedIndexDB[i].description;
    contentBoxes[i].querySelector(".link").href = modifiedIndexDB[i].url;
    contentBoxes[i].querySelector("img").src = modifiedIndexDB[i].image;
    console.log("content loaded");
}
}
//wait for the indexDB to be populated, then run the loadContent function with async/await
async function wait() {
await new Promise((resolve) => setTimeout(resolve, 1000));
loadContent();
}
wait();