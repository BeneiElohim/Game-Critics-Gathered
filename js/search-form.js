//event listener for search form
//when the form is submitted, the event listener will push it to session storage
//user is then redirected to the searchpage.html page
//the searchpage.html page will then get the search input from session storage and use it to search the indexDB
//the searchpage.html page will then display the results

let buttonClicked = false;
let searchLogo = document.getElementById("search-logo");
let searchBar = document.getElementById("search-bar");
function search(e) {
  if (e.keyCode == 13 || buttonClicked == true) {
    sessionStorage.setItem("searchInput", searchBar.value.toLowerCase()); //set the search input to the value of the search bar
    window.location.href = "../searchpage.html"; //redirect to the searchpage.html page
  }
}
//Give the user all posts when Posts is clicked
let allPosts = document.getElementById("all-posts"); //get the all posts element
function showAllPosts() { 
  sessionStorage.setItem("searchInput", "game"); //set the search input to game
  window.location.href = "../searchpage.html"; //redirect to the searchpage.html page
}

