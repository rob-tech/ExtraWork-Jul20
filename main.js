
var posts = []

window.onload = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resp) => resp.json())
        .then((json) => {
            posts = json;
            console.log(posts)
            createPosts(posts)
        });
}

createPosts = (listOfPosts) => {

    listOfPosts.forEach((post) => {
        var row = document.querySelector(".row");
        var div = document.createElement("div");
        div.classList.add("col-sm-12");
        div.innerHTML += `
         <button class="collapsible "><b>Query: ${post.title}</b></button>
         <div class="content">
         <a href="detailPage.html?id=${post.id}">${post.body}</a>
        </div>
        `;
        row.appendChild(div);

        let coll = div.querySelector(".collapsible")

        coll.addEventListener("click", () => {
            coll.classList.toggle("active")
            let content = coll.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "40px";
            }
       });

    })
}

