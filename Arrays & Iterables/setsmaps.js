// 205. Arrays, Maps & Sets - Differences
// Arrays are ordered collections of elements that can contain duplicates and can be accessed by their index.
// Maps are collections of key-value pairs where keys can be of any type, and values can also be of any type. 
// Sets are collections of unique values, where each value can only occur once in the set.

// 206. Working with Sets: Sets are data structure which help manage unique data
const emptySet = new Set(); // Creating an empty set
console.log(emptySet); // Output: Set {}

const uniqueNumbers = new Set([1, 2, 3, 4, 5, 5, 6]); // Creating a set with duplicate values (duplicates will be ignored)
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5, 6 }

for (const entry of uniqueNumbers){
    console.log(entry);
}

uniqueNumbers.has(3); // Checking if a value exists in the set
console.log(uniqueNumbers.has(3)); // Output: true

uniqueNumbers.add(7); // Adding a new value to the set
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5, 6, 7 }

uniqueNumbers.delete(2); // Removing a value from the set
console.log(uniqueNumbers); // Output: Set { 1, 3, 4, 5, 6, 7 }

uniqueNumbers.clear(); // Removing all values from the set
console.log(uniqueNumbers); // Output: Set {}

// 207. Working with Maps

const person1 = { name: 'Max'};
const person2 = { name: 'Manuel'};

const personData = new Map([[person1, [{ date: 'yesterday', price: 10}]]]);

personData.set(person2, [{ date: 'two weeks ago', price: 100}]);

console.log(personData);
console.log(personData.get(person1));

for( const [key, value] of personData.entries()){
    console.log(key, value);
}

for (const key of personData.keys()){
    console.log(key);
}

for (const value of personData.values()){
    console.log(value);
}

console.log(personData.size);

// 208. Maps vs Objects
// Maps can use any values (and types) as keys - Better performance for large quantities of data - Better performance when adding + removing data frequently
// Objects Only use strings, numbers or symbols as keys - Perfect for small/medium-sized sets of data - Easier/quicker to create (tipically also with better performance)

// 209. Understanding WeakSet
let person = {name: 'Max'}
const persons1 = new WeakSet();
persons1.add(person);

console.log(persons1.has(person)); // Output: true

person = null; // Removing the reference to the person object

// At this point, the person object can be garbage collected, and the entry in the WeakSet will be automatically removed.

// 210. Understanding WeakMap
const personsData = new WeakMap();

personsData.set(person, 'Extra info');

console.log(personsData.get(person)); // Output: 'Extra info'

person = null; // Removing the reference to the person object

// At this point, the person object can be garbage collected, and the entry in the WeakMap will be automatically removed.

