// Basic structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions
//   }
// })

// STANDARD MODULE PATTERN
// const UIctrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
      
//     }
//   }
// })();

// UIctrl.callChangeText();

// REVEALING MODULE PATTERN
const itemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added');
  }

  function get(id) {
    return data.find(item => item.id === id);
  }

  // "reveal" methods in the returned object literal
  return {
    add: add,
    get: get
  }
})();

itemCtrl.add({id: 1, name: 'John'});
itemCtrl.add({id: 2, name: 'Jim'});
itemCtrl.add({id: 3, name: 'James'});