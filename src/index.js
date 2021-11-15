const API = ("https://distinct-vaulted-freesia.glitch.me/image")



fetch (API)
.then((res) => res.json())
.then(flata)


function flata(flataGram){
    document.querySelector("#fg-title").textContent = flataGram.title;
    document.querySelector("#fg-image").src = flataGram.image;
    document.getElementById("fg-likes").textContent = `${flataGram.likes} likes`;
    
    

    const comentarios = document.querySelector("#fg-comments");
   comentarios.innerHTML = "";
    
   flataGram.comments.forEach((comments) => {
    const li = document.createElement("li");
    li.textContent = comments.content
    comentarios.append(li);

   })

  

}
