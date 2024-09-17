const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const getData = async() =>{
    const id = urlParams.get("id");
    
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const film = await response.json();
    const output = document.querySelector(".section2")
    output.innerHTML += `
    <div class="section2">
           <a href="detail.html?id=${film.id}" ><img class="detailImg" src="${film.image.original}" alt="Film 3" style="width: 40%; height: 70%;"></a>
           <h2>${film.genres}</h2>
           <h2>${film.status}</h2>
           <p>${film.name}</p>
       </div>    
          `;

};
getData();

