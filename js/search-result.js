// Description: This file contains the code for the search result page.
// It contains the code that loads the content from the indexDB into the search result page.
// It also contains the code that filters the content based on the search input.


// This function helps to parse through the indexDB and find all the pages that are related to the search input.
function findAllRelatedPages(searchInput) {
  let relatedPages = []; // This array will contain all the pages that are related to the search input.

  // Find and store all possible keywords by going over all of the pages' titles and content.
  let allPossibleKeywords = [];
  for (let page of indexDB) {
    if (!allPossibleKeywords.includes(`${page.title.toLowerCase()}`)) { // If the page's title is not already in the array, add it.
      allPossibleKeywords.push(page.title.toLowerCase()); // Add the page's title to the array.
    }
    for (let contentKeyword of page.keywords) {
      if (!allPossibleKeywords.includes(`${contentKeyword}`)) { // If the page's content keyword is not already in the array, add it.
        allPossibleKeywords.push(contentKeyword); // Add the page's content keyword to the array.
      }
    }
  }
  // Find which of these possible keywords our input contains and call them validKeywords.
  let validKeywords = []; // This array will contain all the keywords that are valid.
  for (let possibleKeyword of allPossibleKeywords) { // Go over all the possible keywords.
    if (searchInput.includes(`${possibleKeyword}`)) { // If the input contains the possible keyword, add it to the validKeywords array.
      validKeywords.push(possibleKeyword); // Add the possible keyword to the array.
    }
  }
  if (validKeywords.length === 0) { // If there are no valid keywords, return an empty array.
    return [];
  }
  // Find the pages which have all the validKeywords in their keywords property.
  //  If input has the page's title in it, you don't have to check keywords. Mark it as relatedPage.
  for (let page of indexDB) {
    if (validKeywords.includes(`${page.title.toLowerCase()}`)) { // If the page's title is in the validKeywords array, add it to the relatedPages array.
      relatedPages.push(page); // Add the page to the array.
      continue;
    }

    let hasAllValidKeywords = true;
    for (let validKeyword of validKeywords) {
      if (!page.keywords.includes(`${validKeyword}`)) { // If the page's keywords do not include the valid keyword, set hasAllValidKeywords to false.
        hasAllValidKeywords = false; // Set hasAllValidKeywords to false.
        break;
      }
    }

    if (hasAllValidKeywords) {
      relatedPages.push(page); // Add the page to the array.
    }
  }

  return relatedPages; // Return the array of related pages.
}

function listAllRelatedPages(pages) {
  let searchResultList = document.querySelector(".search-results-list"); // Get the search result list element.
  if (pages.length === 0) { // If there are no related pages, display a message saying so.
    let noResultBox = document.createElement("div");  // Create a div element.
    noResultBox.classList.add("search-no-result-box"); // Add the search-no-result-box class to the div element. 
    noResultBox.textContent = "No result found";     // Set the text content of the div element to "No result found".
    searchResultList.append(noResultBox); // Append the div element to the search result list element.
  } 
  // If there are related pages, display them.
  for (let i = 0; i < pages.length; i++) {
    let pageBox = document.createElement("li"); // Create a li element.
    pageBox.classList.add("search-result-page"); // Add the search-result-page class to the li element.

    let pageTitle = document.createElement("h2"); // Create a h2 element.
    pageTitle.textContent = pages[i].title; // Set the text content of the h2 element to the page's title.

    let pageImage = document.createElement("img"); // Create an img element.
    pageImage.src = pages[i].image; // Set the src attribute of the img element to the page's image.

    let pageDescription = document.createElement("a"); // Create an a element. 
    pageDescription.href = pages[i].url;  // Set the href attribute of the a element to the page's url.
    pageDescription.textContent = pages[i].description; // Set the text content of the a element to the page's description.

    pageBox.append(pageTitle);  // Append the h2 element to the li element.
    pageBox.append(pageImage); // Append the img element to the li element.
    pageBox.append(pageDescription); // Append the a element to the li element.
    searchResultList.append(pageBox); // Append the li element to the search result list element.
  }
}

let searchInput = sessionStorage.getItem("searchInput"); // Get the search input from the session storage.
let pages = findAllRelatedPages(searchInput); // Get all the pages that are related to the search input.
listAllRelatedPages(pages); // Display all the related pages.
