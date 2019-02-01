// Book consutrctor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  
  // Create tr element
  const row = document.createElement('tr');
  
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;

  // And append this row to the table
  list.appendChild(row);

}

UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function() {
  document.getElementById('book-form').reset();
}

// Event Listeners
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

function handleSubmit(e) {
  e.preventDefault();

  // Form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiating a new book
  const book = new Book(title, author, isbn);
  
  // Instantiate UI
  const ui = new UI();  

  // Validate
  const textInputs = document.querySelectorAll('input[type=text]');
  const emptyInputs = [...textInputs].some(input => input.value === '');
  if (emptyInputs) {
    ui.showAlert('Please enter all fields', 'error');
  }
  
  // Add book to list
  ui.addBookToList(book);

  // Show success
  ui.showAlert('Book Added!', 'success');

  // Clear the list
  ui.clearFields();
}

bookForm.addEventListener('submit', handleSubmit);
bookList.addEventListener('click', function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('book remove', 'success');
  e.preventDefault();
})