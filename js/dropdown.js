var day = document.getElementById("day");
var week = document.getElementById("week");
var month = document.getElementById("month");

period = document.getElementById("filter");
function loadPost(period) {
    // Hide all posts
    if (period == "day") {
        showDay();
    } else if (period == "week") {
        showWeek();
    } else if (period == "month") {
        showMonth();
    }
    console.log(period);
}
function showDay() {
    day.className = day.className.replace("non-active", "");
    week.className = "non-active content-box";
    month.className = "non-active content-box";
}
function showWeek() {
    week.className = week.className.replace("non-active", "");
    day.className = "non-active content-box";
    month.className = "non-active content-box";
}
function showMonth() {
    month.className = month.className.replace("non-active", "");
    day.className = "non-active content-box";
    week.className = "non-active content-box";
}
// Adding event listener to the dropdown
period.addEventListener("change",()=>loadPost(period.value));
// Running a loadPost function on page load to show the default value
showDay();