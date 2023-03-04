let postDB = [];
 function getPostInfo(database){
     database.forEach(post => {
        let p = {
            title: post.title,
            link: post.url,
        }
        postDB.push(p);
        console.log("postDB populated" + p);
    });
    
}
 function populateList(postData){
     postData.forEach(post => {
        let a = document.createElement("a");
        a.textContent = post.title;
        a.href = post.link;
        document.querySelector(".dropdown-posts").appendChild(a);
        console.log("dropdown populated");
    });
    
}
async function populateDropdown(){
     getPostInfo(indexDB);
     populateList(postDB);
    console.log("dropdown populated");
}
populateDropdown();