class UI {
  constructor() {
    this.output = document.querySelector('.output')
  }

  displayData(data) {
    const html = `
      <img class="output__poster" src=${data.Poster} alt="Movie poster for ${data.Title}">
      <ul class="output__list">
        <li class="output__listItem title"> Title: ${data.Title}</li>
        <li class="output__listItem released"> Released: ${data.Released}</li>
        <li class="output__listItem rating"> Rating: ${data.Rated}</li>
        <li class="output__listItem director"> Director: ${data.Director}</li>
        <li class="output__listItem actors"> Starring: ${data.Actors}</li>
        <li class="output__listItem earnings"> Earnings: ${data.BoxOffice}</li>
      </ul>
      <p class="output__plot">${data.Plot}</p>
    `
    this.output.innerHTML = html;
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