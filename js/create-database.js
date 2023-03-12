// Description: This file creates the database for the website by looking at all the posts and extracting the data from the meta tags and storing it in an array of objects
// It does this by using the fetch API to get the html files, then it parses the html files and extracts the data from the meta tags and stores it in an object
// It then pushes the object to an array of objects
// This document is used for creating a search engine for the website and loading the content into the content boxes

let indexDB = []; //create an empty array to store the indexDB in
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
 "../posts/post11.html",];  //create an array with all the html files

async function indexHTML(url) {
  fetch(url) //fetch the html file
    .then((response) => response.text()) //convert the response to text
    .then((html) => { //parse the html file
      let parser = new DOMParser(); //create a new DOMParser object
      let doc = parser.parseFromString(html, "text/html"); //parse the html file to a document
      let keywords = doc.querySelector('meta[name="keywords"]').content; //get the keywords from the meta tag
      let description = doc.querySelector('meta[name="description"]').content; //get the description from the meta tag
      let title = doc.querySelector("#title").textContent; //get the title from the h1 tag
      let image = doc.querySelector("#main-image").src; //get the image from the img tag
      keywords = keywords.split(","); //split the keywords string into an array
      let indexObj = { //create an object with all the data
        keywords,
        title,
        url,
        image,
        description,
        usedContent: false,
      };
      indexDB.push(indexObj); //push the object to the indexDB array
    });
}

htmlFiles.forEach((file) => {
  indexHTML(file); //call the indexHTML function for every file in the htmlFiles array
});
