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
// function* createIDs() {
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIDs();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// Symbols 
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');
// // console.log(sym2);

// // UNique object keys
// const key1 = Symbol();
// const key2 = Symbol('sym2');

// const obj = {};
// obj[key1] = 'Prop1';
// obj[key2] = 'Prop2';

// Destructuring Assignment


let a,b;
// Array destructuring
[a, b] = [100, 200];
[a, b, ...rest] = [100, 200, 300, 400, 500];
// console.log(rest);

// Object destructuring
({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;
// console.log(person2);

// Parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// let peson1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person3);

// Object Destructuring
const person1 = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}

const {name, age, city} = person1;


// Maps 
const map1 = new Map();
const key1 = 'some string';
const key2 = {};
const key3 = function() {};

// Set map values by key
map1.set(key1, 'value of key 1')
map1.set(key2, 'value of key 2')
map1.set(key3, 'value of key 3')

console.log(map1.get(key1));
