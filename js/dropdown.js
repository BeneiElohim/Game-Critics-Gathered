// Description: This script is used to show the dropdown menu and filter the posts by day, week or month
// It is used on the home page

// Getting the elements from the DOM
var day = document.getElementById("day"); //getting the day element
var week = document.getElementById("week"); //getting the week element
var month = document.getElementById("month"); //getting the month element

// Getting the dropdown element
period = document.getElementById("filter"); 

function loadPost(period) {
  if (period == "day") {
    showDay();
  } else if (period == "week") {
    showWeek();
  } else if (period == "month") {
    showMonth();
  }
}
function showDay() {
  day.className = day.className.replace("non-active", ""); //replace the non-active class with an empty string
  week.className = "non-active content-box"; //make the week element non-active
  month.className = "non-active content-box"; //make the month element non-active
}
function showWeek() {
  week.className = week.className.replace("non-active", ""); //replace the non-active class with an empty string
  day.className = "non-active content-box"; //make the day element non-active
  month.className = "non-active content-box"; //make the month element non-active
}  
function showMonth() {
  month.className = month.className.replace("non-active", ""); //replace the non-active class with an empty string
  day.className = "non-active content-box"; //make the day element non-active
  week.className = "non-active content-box"; //make the week element non-active
}
// Adding event listener to the dropdown
period.addEventListener("change", () => loadPost(period.value));
// Running a showDay function on page load to show the default value
showDay();
