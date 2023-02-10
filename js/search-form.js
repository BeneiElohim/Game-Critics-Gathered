//event listener for search form
//when the form is submitted, the event listener will push it to session storage
//user is then redirected to the searchpage.html page
let searchBar = document.getElementById("search-bar");
function search(e) {
  if (e.keyCode == 13) {
    console.log(searchBar.value);
    sessionStorage.setItem("keyword", searchBar.value);
    window.location.href = "searchpage.html";
  }
}
