function findAllRelatedPages(searchInput) {
  let relatedPages = [];

  // Find and store all possible keywords by going over all of the pages' titles and content.
  let allPossibleKeywords = [];
  for (let page of indexDB) {
    if (!allPossibleKeywords.includes(`${page.title.toLowerCase()}`)) {
      allPossibleKeywords.push(page.title.toLowerCase());
    }
    for (let contentKeyword of page.keywords) {
      if (!allPossibleKeywords.includes(`${contentKeyword}`)) {
        allPossibleKeywords.push(contentKeyword);
      }
    }
  }
  // Find which of these possible keywords our input contains and call them validKeywords.
  let validKeywords = [];
  for (let possibleKeyword of allPossibleKeywords) {
    if (searchInput.includes(`${possibleKeyword}`)) {
      validKeywords.push(possibleKeyword);
    }
  }
  if (validKeywords.length === 0) {
    return [];
  }
  // Find the pages which have all the validKeywords in their keywords property.
  //  If input has the page's title in it, you don't have to check keywords. Mark it as relatedPage.
  for (let page of indexDB) {
    if (validKeywords.includes(`${page.title.toLowerCase()}`)) {
      relatedPages.push(page);
      continue;
    }

    let hasAllValidKeywords = true;
    for (let validKeyword of validKeywords) {
      if (!page.keywords.includes(`${validKeyword}`)) {
        hasAllValidKeywords = false;
        break;
      }
    }

    if (hasAllValidKeywords) {
      relatedPages.push(page);
    }
  }

  return relatedPages;
}

function listAllRelatedPages(pages) {
  let searchResultList = document.querySelector(".search-results-list");
  if (pages.length === 0) {
    let noResultBox = document.createElement("div");
    noResultBox.classList.add("search-no-result-box");
    noResultBox.textContent = "No result found";
    searchResultList.append(noResultBox);
  }
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

let searchInput = sessionStorage.getItem("searchInput");
let pages = findAllRelatedPages(searchInput);
listAllRelatedPages(pages);
