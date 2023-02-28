let contentBoxes = document.getElementsByClassName("content-box");
let randomIndex;
let databaseContent;

indexDB.forEach((content) => {
    if (content.usedContent === false) {
        databaseContent.push(content);
    }
});
Array.from(contentBoxes).forEach(box => {
    randomIndex = Math.floor(Math.random() * 10);
    try {
        if (databaseContent[randomIndex].usedContent === false) {
            box.querySelector(".title").textContent = databaseContent[randomIndex].title;
            box.querySelector(".description").textContent = databaseContent[randomIndex].description;
            box.querySelector("img").src = databaseContent[randomIndex].image;
            box.querySelector(".link").href = databaseContent[randomIndex].url;
            databaseContent[randomIndex].usedContent = true;
        } else {
            randomIndex = Math.floor(Math.random() * databaseContent.length);
        }
    } catch (error) {
        console.log(error);
    }
});