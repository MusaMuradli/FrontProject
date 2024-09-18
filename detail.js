const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

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
const getData = async() =>{
    const id = urlParams.get("id");
    
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const film = await response.json();
    const output = document.querySelector(".section2")
    output.innerHTML = `
    <div class="cardDetail">
        <div class="cardDetail2"> <img src="${film.image.original}" alt="${film.name}" class="cardDetail-image"> </div>
        <div class="cardDetail-content">
            <h1 class="cardDetail-title">${film.name}</h1>
            <p class="cardDetail-genres">Genres: ${film.genres.join(', ')}</p>
            <p class="cardDetail-rating">Rating: ${film.rating.average || 'N/A'}</p>
            <p class="cardDetail-summary"><strong>Summary:</strong> ${film.summary}</p>
            <p class="cardDetail-status"><strong>Status:</strong> ${film.status}</p> 
            <p class="cardDetail-schedule"><strong>Aired on:</strong> ${film.network.name} <br> <strong>Time:</strong> ${film.schedule.days.join(', ')} at ${film.schedule.time}</p>
            <a href="${film.officialSite}" class="cardDetail-link">Official Site</a>
        </div>
    </div>
`;
};
getData();
