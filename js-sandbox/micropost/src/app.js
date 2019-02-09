import { http } from './http';
import { ui } from './ui';

function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  const data = {
    title,
    body
  }

  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger')
  } else {
    if (id === '') {
      // Create post
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post added', 'alert alert-success');
          ui.clearFields();
          getPosts()
        })
        .catch(err => console.log(err));
      } else {
        // Put post
        http.put(`http://localhost:3000/posts/${id}`, data)
          .then(data => {
            ui.showAlert('Post updated', 'alert alert-success');
            ui.changeFormState('add');
            getPosts();
          })
          .catch(err => console.log(err));

    }
  
  }
}

// Delete post
function deletePost(e) {
  e.preventDefault();
  if (e.target.classList.contains('fa-remove')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
  
}

// Edit function
function enableEdit(e) {
  if (e.target.classList.contains('fa-pencil')) {
    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    }
    
    // Fill form with current post
    ui.fillForm(data);    
  }
}

function cancelEdit(e) {
  e.preventDefault();
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
}

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);