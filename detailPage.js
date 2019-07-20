
var posts = []
var comments = []

window.onload = () => {
    var messageId = new URLSearchParams(document.location.search).get("id");

    fetch("https://jsonplaceholder.typicode.com/posts/" + messageId)
        .then((resp) => resp.json())
        .then((json) => {
            posts = json;
            console.log(posts)
            getComments(messageId)
        });

    getComments = (messageId) => {
        fetch("  https://jsonplaceholder.typicode.com/posts/1/comments")
            .then((resp) => resp.json())
            .then((json) => {
                comments = json;
                console.log(comments)

                comments.forEach((comments) => {
                    var commentId = comments.postId;
                    if (messageId == commentId) {
                        document.querySelector(".row").innerHTML += `
                
                        <div class = "col-sm-12 colstyle">
                        <h6>
                            <small class="text-muted">Name: ${comments.name}</small>
                        </h6>
                        <h6>
                             <small class="text-muted">Email: ${comments.email}</small>
                        </h6>
                         <div>
                         <p>"${comments.body}"</p>
                         </div>
                         </div>
                      

                        `
                    }
                })
            });
    }
}



    //name,email, body


//post.id/comments.postId


