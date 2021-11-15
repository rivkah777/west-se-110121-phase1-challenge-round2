const API = ("https://distinct-vaulted-freesia.glitch.me/image")



fetch (API)
.then((res) => res.json())
.then(flata)


function flata(flataGram){
    document.querySelector("#fg-title").textContent = flataGram.title; //image title
    document.querySelector("#fg-image").src = flataGram.image; //image card 
    
   
    document.getElementById("like-button").addEventListener("click", cb);//
      
    document.getElementById("fg-likes").textContent = '0 Likes';// likes counter
    likesCounter = 0;
    
        
    function cb(){
        ++ likesCounter;
        document.getElementById("fg-likes").textContent = `${likesCounter} Likes`;
    }
   
   
   
    const comentarios = document.querySelector("#fg-comments");//select comments id 
   comentarios.innerHTML = ""; // remove old comments
    
   flataGram.comments.forEach((comments) => { //go thrue each line 
    const li = document.createElement("li");//creating a new elemnt list
    li.textContent = comments.content
    comentarios.append(li);// add new comments to the DOM

   })

 } 
   

    let formaDeComentarios = document.getElementById("comment-form");// select the id 
    formaDeComentarios.addEventListener("submit", agregarComentarios);//add comment


    const comentarios = document.querySelector("#fg-comments");

     function agregarComentarios(event){
        event.preventDefault();
        let commentText = event.target.comment.value;
        
        let comentario = document.createElement("li");// crater a list element
        comentario.textContent = commentText;// add text comments
        comentarios.appendChild(comentario);
        formaDeComentarios.reset();// remove what ever you write on the search bar
   
                
     }