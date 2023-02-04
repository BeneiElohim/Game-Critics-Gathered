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
    day.style.display = "block";
    week.style.display = "none";
    month.style.display = "none";
    console.log("day");
}
function showWeek() {
    week.style.display = "block";
    day.style.display = "none";
    month.style.display = "none";
    console.log("week");
}
function showMonth() {
    month.style.display = "block";
    day.style.display = "none";
    week.style.display = "none";
    console.log("month");
}
period.addEventListener("change",()=>loadPost(period.value));