var indexDB = [];
var htmlFiles = [
    'index.html',
    'post1.html',
]
async function indexHTML(url) {
   fetch(url) 
  .then(response => response.text())
  .then(html => {
    // Parse the HTML string as described in the previous answer
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    var keywords = doc.querySelector('meta[name="keywords"]').content;
    keywords = keywords.split(',');
    for (var i = 0; i < keywords.length; i++) {
        let indexObj = {
            keyword: keywords[i],
            url: url
        }
        indexDB.push(indexObj);
    }
  })
  .catch(error => {
    console.error(error);
  });
}
htmlFiles.forEach(file => {
    indexHTML(file);
});
//give an alert if the keyword is found, load the url after the user closes the alert
function searchAndLoad(keyword) {
    for (var i = 0; i < indexDB.length; i++) {
        if (indexDB[i].keyword == keyword) {
            alert('Found!');
            window.location.href = indexDB[i].url;
        }
    }
}
let searchText = sessionStorage.getItem("keyword");
searchAndLoad(searchText);