const movie = new Movie;
const ui = new UI;

const form = document.querySelector('.search')
// const btn = document.querySelector('.search__button');
const userSearch = document.querySelector('.search__input');


function handleClick(e) {
  e.preventDefault();

  if (e.target.className === 'search__button') {
   
    // Clear previous messages if they exist
    const priorMessage = document.querySelector('.alert');
    if (priorMessage) {
      ui.clearMessage();
    }
    
    // Call the OMDB API with this movie title
    const userInput = userSearch.value;  
    if (userInput !== '') {
      movie.getMovie(userInput)
        .then(data => {
          if (data.Response === 'True') {
            ui.displayData(data);
          } else {
            ui.displayMessage(`Sorry! ${userInput} not found. Try another movie.`);
            ui.clearData();
          }
        });
    } else {
      ui.clearMessage();
      ui.displayMessage('Enter a movie below!');
    }
 
  } else if (e.target.className === 'search__input') {
    // Clear alert
    ui.clearMessage();
    
  }
  
}

form.addEventListener('click', handleClick);