let imgContenedor= document.createElement("div");
divImg.id="img";
document.body.appendChild(divImg);

fetch("https://rickandmortyapi.com/api/character");
.then(response=> response.json())
.then(data=>  
    console.log(data)) 
    data.results.forEach(result=> {
       const imageUrl= result.image;
    })

.cacht(error=>console.log.error(error),)