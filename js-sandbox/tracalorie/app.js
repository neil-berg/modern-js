// Storage Controller

// Item Controller ---------
const ItemCtrl = (function() {
  // Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  
  // Data Structure / State
  const data = {
    items: [
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300},
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function() {
      return data.items;
    },
    addItem: function(name, calories) {
      // Create ID
      let ID;
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // Calories to number
      calories = parseInt(calories)

      // Create new item and add to items array
      newItem = new Item(ID, name, calories);
      data.items.push(newItem);
      return newItem;
    },
    getItemById: function(id) {
      return data.items.find(item => item.id === id);
    },
    setCurrentItem: function(item) {
      data.currentItem = item;
    },
    getCurrentItem: function() {
      return data.currentItem;
    },
    getTotalCalories: function() {
      data.totalCalories = data.items.reduce((acc, item) => acc + item.calories, 0);
      return data.totalCalories;
    },
    logData: function() {
      return data;
    }
  }
})();


// UI Controller ---------
const UICtrl = (function() {
  
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    deleteBtn: '.delete-btn',
    updateBtn: '.update-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
  }

  // Public methods
  return {
    populateItemList: function(items) {
      const html = items.map(item => {
        return `
        <li class="collection-item" id="item-${item.id}">
          ${item.name}: ${item.calories} Calories
          <a href="#" class="secondary-content">
            <i class="edit-item fas fa-pencil-alt"></i>
          </a>
        </li>`
      }).join('');

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item) {
      // Show list
      document.querySelector(UISelectors.itemList).style.display = "block";
      // Create li element
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`
      li.innerHTML = `${item.name}: ${item.calories} Calories
      <a href="#" class="secondary-content">
        <i class="edit-item fas fa-pencil-alt"></i>
      </a>`
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    clearInput: function() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemtoForm: function() {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
      
    },
    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    showTotalCalories(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function() {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showEditState: function() {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();


// App Controller ---------
const App = (function(ItemCtrl, UICtrl) {

  // Load event listeners
  const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelectors();
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

  // Edit icon click event
  document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
  }

  // Add item submit
  const itemAddSubmit = function(e) {
    e.preventDefault();
    // Get form input from UI controller
    const input = UICtrl.getItemInput();
    
    // Check for name and calories
    if (input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      UICtrl.addListItem(newItem);

      // Update total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }    
  }
  
  // Update itemUpdateSubmit
  const itemEditClick = function(e) {
    if (e.target.classList.contains('edit-item')) {
      // Get list item id 
      const listId = e.target.parentNode.parentNode.id;
      const id = parseInt(listId.split('-')[1]);
      const itemToEdit = ItemCtrl.getItemById(id);
      ItemCtrl.setCurrentItem(itemToEdit);
      UICtrl.addItemtoForm();
      
    }
  }
  // Public methods
  return {
    init: function() {
      // Clear edit state / set initial state
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  }
  
  
})(ItemCtrl, UICtrl);

App.init();