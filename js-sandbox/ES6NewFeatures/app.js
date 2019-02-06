// Iterators
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < names.length
//         ? {value: names[nextIndex++], done: false}
//         : {done: true}  
//     }
//   }
// }

// Array of names
// const namesArr = ['neil', 'jack', 'nancy'];

// Init iterator
// const names = nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

// Generators
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

// ID creator
function* createIDs() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIDs();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

