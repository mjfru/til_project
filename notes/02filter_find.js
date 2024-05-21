//! .filter() and .find() Practice

//* Filter will check if the condition we give it returns true or false. If it's true, it will be included in the new array.
//! It needs to return a boolean in all cases.

console.log([7, 64, 6, -23, 11].filter((number) => number > 10)); 
// [ 64, 11 ]

//* The find method returns the first element of an array that it finds to be true.
//! It returns only -1- element!

console.log([7, 64, 6, -23, 11].find((number) => number > 10));
// 64