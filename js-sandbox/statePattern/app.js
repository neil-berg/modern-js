const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
}

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
  `;
}

// About state
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About us';
  document.querySelector('#content').innerHTML = `
  <p>This is the about page</p>`
}

// Contact state
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`
}

// Instantiate the pageState
const page = new PageState();

// Init the first state
page.init();

function handleClick(e) {
  e.preventDefault();
  if (e.target.id === 'home') {
    page.change(new homeState);
  } else if (e.target.id === 'about') {
    page.change(new aboutState);
  } else if (e.target.id === 'contact') {
    page.change(new contactState);
  }
}

const nav = document.querySelector('ul.navbar-nav.mr-auto');
nav.addEventListener('click', handleClick);