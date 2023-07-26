const divImg = document.createElement("div");
divImg.id = "img";
document.body.appendChild(divImg);


function fechaData(){
    return new Promise((resolve,reject)=>{
        fetch("https://rickandmortyapi.com/api/character")
.then(response=>response.json())
.then(data=> {
    resolve(data.results);
})
.catch(error=> {reject(error); } );
    })
}