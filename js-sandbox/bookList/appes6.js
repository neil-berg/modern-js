class Book {
  constructor(author, title, isbn) {
    this.author = author;
    this.title = title;
    this.isbn = isbn;
  }
}

class UI {  
  addBookToList(book) {
    const list = document.getElementById('book-list');
  
    // Create tr element
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>`;
  
    // And append this row to the table
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Display message for 3 seconds
    const messageEl = document.querySelector('#message');    
    messageEl.className = className; 
    messageEl.textContent = message;
    setTimeout(() => {
      messageEl.textContent = '';
      messageEl.style.backgroundColor = 'white';
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('book-form').reset();
  }
}

function handleSubmit(e) {
  e.preventDefault();

  // Form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
 
  // Validate
  const textInputs = document.querySelectorAll('input[type=text]');
  const emptyInputs = [...textInputs].some(input => input.value === '');

  const ui = new UI(); 
  if (emptyInputs) {
    ui.showAlert('Please enter all fields', 'error');
  } else {
    const book = new Book(title, author, isbn);
    ui.addBookToList(book);
    ui.showAlert('Book Added!', 'success');
    ui.clearFields();
  }
  
}

// Event Listeners
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

bookForm.addEventListener('submit', handleSubmit);
bookList.addEventListener('click', function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Book removed', 'success');
  e.preventDefault();
})