// Call to the OMDB API

class Movie {
  constructor() {
    this.client_key = 'fcbb7b3b';
  }

  async getMovie(movie) {
    const movieFormatted = movie.split('+');
    const res = await fetch(`http://www.omdbapi.com/?t=${movieFormatted}&apikey=${this.client_key}`);
    const data = await res.json();
    return data;
  }
}