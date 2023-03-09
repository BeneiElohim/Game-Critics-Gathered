const input = {
    postTitle: "Post 1",
}
const template = Handlebars.compile(document.querySelector('#post-template').innerHTML);
const html = template({ input });
document.getElementById("titleOfPost").innerHTML = html;