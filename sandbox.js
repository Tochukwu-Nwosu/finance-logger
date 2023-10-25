var displayName = function (myName) { return "My name is " + myName; };
// console.log(displayName(true));    // flagged by typescript but not by javascript
console.log(displayName('Tochi'));
// Arrays
var numbers = [10, 20, 30, 40];
var animals = ['cat', 'dog', 'parrot'];
var mixedTypes = ['Luigi', true, 'black belt', 3];
numbers.push(50);
// numbers.push('60');  // not allowed
animals[2] = 'bird';
// animals[1] = 9;   // not allowed
mixedTypes.push('Antonio');
mixedTypes[1] = false;
