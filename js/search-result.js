//give an alert if the keyword is found, load the url after the user closes the alert
function findAllRelatedPages(keyword) {
  let relatedPages = [];
  //TODO... birden fazla kelime aratılırsa diye split et parametreyi.
  for (let i = 0; i < indexDB.length; i++) {
    if (indexDB[i].keywords.includes(`${keyword}`)) {
      relatedPages.push(indexDB[i]);
    }
  }
  return relatedPages;
}

function listAllRelatedPages(pages) {
  let searchResultList = document.querySelector(".search-results-list");
  for (let i = 0; i < pages.length; i++) {
    let pageBox = document.createElement("li");
    pageBox.classList.add("search-result-page");

    let pageTitle = document.createElement("h2");
    pageTitle.textContent = pages[i].title;

    let pageImage = document.createElement("img");
    pageImage.src = pages[i].image;

    let pageDescription = document.createElement("a");
    pageDescription.href = pages[i].url;
    pageDescription.textContent = pages[i].description;

    pageBox.append(pageTitle);
    pageBox.append(pageImage);
    pageBox.append(pageDescription);
    searchResultList.append(pageBox);
  }
}

let searchTerm = sessionStorage.getItem("keyword");
let pages = findAllRelatedPages(searchTerm);
listAllRelatedPages(pages);
