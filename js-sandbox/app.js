// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


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
  this.reset();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
  
}

function clearTasks(e) {
  taskList.innerHTML = '';
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

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);
filter.addEventListener('keyup', filterTasks);
