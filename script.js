const API="http://localhost:5000/posts";

function loadPosts(){

fetch(API)
.then(res=>res.json())
.then(data=>{

let output="";

data.forEach(post=>{

output+=`
<div class="post">

<h2>${post.title}</h2>

<p>${post.content}</p>

<input placeholder="Comment">

<button>Comment</button>

</div>
`;

});

document.getElementById("posts").innerHTML=output;

});

}

function addPost(){

fetch(API,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

title:document.getElementById("title").value,

content:document.getElementById("content").value

})

}).then(()=>loadPosts());

}

loadPosts();
