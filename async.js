const divImg= document.createElement("div");
divImg.id ="img";
document.body.appendChild(divImg);

async function fetchAndDisplayImagen(){
    try {
       const response =await fetch("https://rickandmortyapi.com/api/character");
       const data =await response.json();
       for(const result of data.results){
        const imageUrl= result.image;
        const imgElement = document.createElement("img");
        imgElement.src =imageUrl;
        divImg.appendChild(imgElement);
       }
.catch (error){ console.log (error);}
    }
}
fetchAndDisplayImagen();
