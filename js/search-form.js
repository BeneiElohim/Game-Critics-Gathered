//event listener for search form
//when the form is submitted, the event listener will push it to session storage
//user is then redirected to the searchpage.html page
let buttonClicked = false;
let searchLogo = document.getElementById("search-logo");
let searchBar = document.getElementById("search-bar");
function search(e) {
  if (e.keyCode == 13 || buttonClicked == true) {
    sessionStorage.setItem("searchInput", searchBar.value.toLowerCase());
    window.location.href = "../searchpage.html";
  }
}
let allPosts = document.getElementById("all-posts");
function showAllPosts() {
  sessionStorage.setItem("searchInput", "mmorpg");
  window.location.href = "../searchpage.html";
}

