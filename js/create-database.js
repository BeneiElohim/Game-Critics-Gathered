let indexDB = [];
let htmlFiles = ["../posts/post1.html",
 "../posts/post2.html", 
 "../posts/post3.html", 
 "../posts/post4.html",
 "../posts/post5.html",
 "../posts/post6.html",
 "../posts/post7.html",
 "../posts/post8.html",
 "../posts/post9.html",
 "../posts/post10.html",
 "../posts/post11.html",];

async function indexHTML(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      let keywords = doc.querySelector('meta[name="keywords"]').content;
      let description = doc.querySelector('meta[name="description"]').content;
      let title = doc.querySelector("#title").textContent;
      let image = doc.querySelector("#main-image").src;
      keywords = keywords.split(",");
      let indexObj = {
        keywords,
        title,
        url,
        image,
        description,
        usedContent: false,
      };
      indexDB.push(indexObj);
    });
}

htmlFiles.forEach((file) => {
  indexHTML(file);
});
