class UI {
  constructor() {
    this.output = document.querySelector('.output')
  }

  displayData(data) {
    
    // Calculate the number of stars to display
    const rating = Number(data.Ratings[0].Value.split('/')[0]) // IMDB score
    const numFull = Math.floor(rating);
    const numHalf = Math.ceil(rating % 1)
    const numEmpty = 10 - numFull - numHalf;
    
    const fullStarHtml = Array.from(Array(numFull)).map(item => '<i class="fas fa-star"></i>');
    const halfStarHtml = Array.from(Array(numHalf)).map(item => '<i class="fas fa-star-half-alt"></i>');
    const emptyStarHtml = Array.from(Array(numEmpty)).map(item => '<i class="far fa-star"></i>');
    
    const starHtml = ['<div class="stars">', ...fullStarHtml, ...halfStarHtml, ...emptyStarHtml,
                      `<span>${rating} / 10</span>`, '</div>'].join('');
   
    document.querySelector('.title').textContent = `${data.Title}`;
    
    document.querySelector('.stars').innerHTML = starHtml;
    
    document.querySelector('.output__specs').innerHTML = `
      <li class="specsItem rating">${data.Rated}</li>
      <li class="specsItem runtime">${data.Runtime}</li>
      <li class="specsItem genre">${data.Genre}</li>
      <li class="specsItem release">${data.Released}</li>`
    
    document.querySelector('.output__poster').src = `${data.Poster}`;
    
    document.querySelector('.output__details').innerHTML = `
      <li class="detailsItem plot">${data.Plot}</li>
      <li class="detailsItem director"><span class="bold">Director: </span>${data.Director}</li>
      <li class="detailsItem writer"><span class="bold">Writer: </span>${data.Writer}</li>
      <li class="detailsItem starring"><span class="bold">Starring: </span>${data.Actors}</li>
      <li class="detailsItem awards"><span class="bold">Awards: </span>${data.Awards}</li>
      <li class="detailsItem earnings"><span class="bold">Earnings: </span>${data.BoxOffice}</li>`
  }

  clearData(data) {
    this.output.innerHTML = '';
  }

  displayMessage(message){
    const header = document.querySelector('.header');
    const html = `<p class="alert">${message}</p>`;
    header.insertAdjacentHTML('afterend', html);
  }

  clearMessage() {
    const alert = document.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  }
}