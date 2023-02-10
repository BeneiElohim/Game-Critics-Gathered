let indexDB = [];
let htmlFiles = ["post1.html", "post2.html", "post3.html", "post4.html"];

async function indexHTML(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      // Parse the HTML string as described in the previous answer
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
      };
      indexDB.push(indexObj);
    });
}

htmlFiles.forEach((file) => {
  indexHTML(file);
});
