let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts(){
let feed = document.getElementById("feed");
feed.innerHTML = "";

posts.forEach(post => {
let div = document.createElement("div");
div.className = "post";
div.innerText = post;
feed.appendChild(div);
});
}

function addPost(){

let input = document.getElementById("postInput");

if(input.value.trim() === "") return;

posts.unshift(input.value);

localStorage.setItem("posts", JSON.stringify(posts));

input.value = "";

renderPosts();
}

renderPosts();
