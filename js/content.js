let contentBoxes = document.getElementsByClassName("content-box");
let randomIndex;

function loadContent() {
Array.from(contentBoxes).forEach(box => {
    randomIndex = Math.floor(Math.random() * 10);
    try {
        if (indexDB[randomIndex].usedContent == false) {
            console.log("used content");
            box.querySelector(".title").textContent = indexDB[randomIndex].title;
            box.querySelector(".description").textContent = indexDB[randomIndex].description;
            box.querySelector("img").src = indexDB[randomIndex].image;
            box.querySelector(".link").href = indexDB[randomIndex].url;
            indexDB[randomIndex].usedContent = true;
        } else {
            randomIndex = Math.floor(Math.random() * indexDB.length);
        }
    } catch (error) {
        console.log(error);
    }
});
}
//wait for the indexDB to be populated, then run the loadContent function with async/await
async function wait() {
await new Promise((resolve) => setTimeout(resolve, 1000));
loadContent();
}
wait();