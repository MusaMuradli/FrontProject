const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const getData = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");
  const json = await response.json();
  const list = document.querySelector(".movies");
  page = 1;
  for (let i = 0; i < page * 10; i++) {
    const film = json[i];
    
    list.innerHTML += `
        <div class="movie">
               <a href="detail.html?id=${film.id}" ><img src="${film.image.original}" alt="Film 3" style="width: 40%; height: 70%;"></a>
               <h2>${film.genres}</h2>
               <h2>${film.status}</h2>
               <p>${film.name}</p>
           </div>    
              `;
  }
  const btn = document.querySelector(".load-more");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    page++;
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      const film2 = json[i];
      list.innerHTML += `
        <div class="movie">
               <a href="detail.html?id=${film2.id}" ><img src="${film2.image.original}" alt="Film 3" style="width: 40%; height: 70%;"></a>
               <h2>${film2.genres}</h2>
               <h2>${film2.status}</h2>
               <p>${film2.name}</p>
           </div>    
              `;
    }
  });
};

getData();
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const leftButton = document.querySelector('.slider-btn.left');
const rightButton = document.querySelector('.slider-btn.right');

let currentIndex = 0;

function updateSliderPosition() {
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = sliderItems.length - 1; 
    }
    updateSliderPosition();
});

rightButton.addEventListener('click', () => {
    if (currentIndex < sliderItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateSliderPosition();
});