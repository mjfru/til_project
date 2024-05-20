//! Extra forEach & .map Practice

const array = [2, 4, 6, 8]

// Reminder: 'element' or whatever you want to call it, is a single value from the array.
array.forEach(function(element) {
  console.log(element); // 2 4 6 8
})

const timesTen = array.map(function(element) {
  return element * 10;
})

console.log(timesTen) // [ 20, 40, 60, 60 ]

// Now with an arrow function:
const timesFive = array.map((el) => el * 5);
console.log(timesFive); // [ 10, 20, 30, 40 ]