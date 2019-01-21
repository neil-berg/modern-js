// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

function getTasks(e) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  taskList.innerHTML = tasks.map(function(task) {
    return `<li class="collection-item">${task}
              <a class="delete-item secondary-content">
                <i class="fas fa-trash"></i>
              </a>  
            </li>`
  }).join('');  
}

function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    alert('Add a task');
  }

  taskList.innerHTML += `
    <li class="collection-item">${taskInput.value}
      <a class="delete-item secondary-content">
        <i class="fas fa-trash"></i>
      </a>  
    </li>`

  storeTask(taskInput.value);

  this.reset();
}

function storeTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
  
  // Remove tasks from local storage
  removeFromStorage(e.target.parentElement.parentElement)
}

function removeFromStorage(element) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  taskToDelete = element.textContent.trim();
  updatedTasks = tasks.filter(task => task !== taskToDelete);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function clearTasks(e) {
  taskList.innerHTML = '';
  localStorage.clear();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  const items = document.querySelectorAll('.collection-item');
  items.forEach(item => {
    if (item.firstChild.textContent.toLowerCase().includes(text)) {
      item.style.display = "block"
    } else {
      item.style.display = "none";
    }
  })
  
}

document.addEventListener('DOMContentLoaded', getTasks);
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);
filter.addEventListener('keyup', filterTasks);
