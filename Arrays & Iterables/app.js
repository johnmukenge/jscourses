// Module Content
// Different ways of creating arrays
// Working with Arrays - A Deep Dive!
// Important Array Methods and Operations
// Others Iterables: Maps and Sets

//185. What is an Iterable?
// An iterable is an object that can be iterated over, meaning you can loop through its elements. 
// In JavaScript, arrays, strings, maps, and sets are examples of iterables. They implement the iterable protocol, 
// which allows them to be used in constructs like for...of loops and spread syntax.

// What is "Array-like Object"?
// An array-like object is an object that has a length property and indexed elements, but does not have all the methods of an array.
// For example, the arguments object in a function is an array-like object. It has a length property and can be accessed using indices, 
// but it does not have array methods like push, pop, or forEach.

// 186. Diffents ways of Creating an Arrays
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

const fruits = new Array('apple', 'banana', 'cherry');
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

const emptyArray = new Array(5);
console.log(emptyArray); // Output: [ <5 empty items> ]

const arrayFromString = Array.from('hello'); // converts an iterable or an array-like object into an array
console.log(arrayFromString); // Output: ['h', 'e', 'l', 'l', 'o']

const arrayFromSet = Array.from(new Set([1, 2, 3, 4, 5])); // converts a Set into an array
console.log(arrayFromSet); // Output: [1, 2, 3, 4, 5]

const arrayOf = Array.of(1, 2, 3, 4, 5); // creates a new array with a variable number of arguments
console.log(arrayOf); // Output: [1, 2, 3, 4, 5]

const personalData = [30, 'John Doe', {moreDetails: 'Software Developer'}, ['coding', 'gaming']]; // Mixed data types in an array

const analyticsData = [[1, 1.6], [-5.4, 2.1]]; // Nested arrays (arrays within arrays)

for (const data of analyticsData) {
    for (const dataPoints of data) {
        console.log(dataPoints); // Output: 1, 1.6, -5.4, 2.1
    }
}

console.log(personalData[2].moreDetails); // Output: Software Developer

// 188. push(), pop(), unshift(), shift() methods - Adding and Removing Elements from Arrays
const hobbies = ['coding', 'gaming', 'cooking', 'traveling', 'photography'];
hobbies.push('hiking'); // Adding an element to the end of the array
console.log(hobbies); // Output: ['coding', 'gaming', 'cooking', 'traveling', 'photography', 'hiking']

hobbies.unshift('reading'); // Adding an element to the beginning of the array or move all elements one position to the right
console.log(hobbies); // Output: ['reading', 'coding', 'gaming', 'cooking', 'traveling', 'photography', 'hiking']

const poppedValue = hobbies.pop(); // Removing the last element of the array
console.log(hobbies); // Output: ['reading', 'coding', 'gaming', 'cooking', 'traveling', 'photography']
console.log(poppedValue); // Output: 'hiking'

const shiftedValue = hobbies.shift(); // Removing the first element of the array or move all elements one position to the left
console.log(hobbies); // Output: ['coding', 'gaming', 'cooking', 'traveling', 'photography']
console.log(shiftedValue); // Output: 'reading'

hobbies[1] = 'painting'; // Modifying an element at a specific index
console.log(hobbies); // Output: ['coding', 'painting', 'cooking', 'traveling', 'photography']

// 189. The splice() method
const removedHobbie = hobbies.splice(2, 1, 'dancing'); // Removing elements and/or adding new elements at a specific index
console.log(hobbies); // Output: ['coding', 'painting', 'dancing', 'traveling', 'photography']
console.log(removedHobbie); // Output: ['cooking'] (the removed element)

// 190. Selecting Ranges and Creating copies with slice() method
const slicedHobbies = hobbies.slice(1, 4); // Extracting a portion of the array (from index 1 to index 3)
console.log(slicedHobbies); // Output: ['painting', 'cooking', 'traveling']

// 191. Adding Arrays to Arrays with concat() method
const moreHobbies = ['writing', 'music'];
const allHobbies = hobbies.concat(moreHobbies); // Merging two or more arrays into a new array
console.log(allHobbies); // Output: ['coding', 'painting', 'dancing', 'traveling', 'photography', 'writing', 'music']

// Using the spread operator to merge arrays
const allHobbiesSpread = [...hobbies, ...moreHobbies]; // Merging arrays using the spread operator
console.log(allHobbiesSpread); // Output: ['coding', 'painting', 'dancing', 'traveling', 'photography', 'writing', 'music']

// 192. Retrieving indexes with indexOf() and lastIndexOf() methods
const indexOfDancing = hobbies.indexOf('dancing'); // Finding the index of the first occurrence of an element
console.log(indexOfDancing); // Output: 2

const lastIndexOfTraveling = hobbies.lastIndexOf('traveling'); // Finding the index of the last occurrence of an element
console.log(lastIndexOfTraveling); // Output: 3

const personData2 = [{ name: 'Max'}, { name: 'Anna' }, { name: 'Max' }];
const indexOfMax = personData2.indexOf({name:'Max'}); // Finding the index of an object in an array (this will not work as expected because objects are compared by reference, not by value)
console.log(indexOfMax); // Output: -1 (not found, because the object reference is different)

// 193. Finding Stuff: find() and findIndex() methods
const foundHobby = hobbies.find(hobby => hobby === 'dancing'); // Finding the first element that satisfies a condition. This is a perfect scenario of an anonymous function, 
// as we are not reusing this function anywhere else in our code. We are just using it once to find the hobby 'dancing' 
// in the hobbies array.
console.log(foundHobby); // Output: 'dancing'

const Anna = personData2.find((personData2, Idx, persons) => {
    return personData2.name === 'Anna'; // Finding the first object that satisfies a condition
});
console.log(Anna); // Output: { name: 'Anna' }

const indexOfAnna = personData2.findIndex((personData2, Idx, persons) => {
    return personData2.name === 'Anna'; // Finding the index of the first object that satisfies a condition
});
console.log(indexOfAnna); // Output: 1

// 194. Is it included?
const isDancingIncluded = hobbies.includes('dancing'); // Checking if an array includes a certain element
console.log(isDancingIncluded); // Output: true

const isSingingIncluded = hobbies.includes('singing');
console.log(isSingingIncluded); // Output: false

// 195. Alternative to for Loops: forEach() method
//      Using forEach() to log hobbies with their indexes
hobbies.forEach((hobby, index, hobbies) => {
    console.log(`${index + 1}. ${hobby}`); // Output: 1. coding, 2. painting, 3. dancing, 4. traveling, 5. photography
});

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

/*for (const price of prices) {
    taxAdjustedPrices.push(price * (1 + tax)); // Calculating tax-adjusted prices using a for loop
}
console.log(taxAdjustedPrices); // Output: [12.9881, 7.1281, 4.7481, 7.8361]
*/

prices.forEach((price, index, prices) => {
    taxAdjustedPrices.push(price * (1 + tax)); // Calculating tax-adjusted prices using the forEach() method
});
console.log(taxAdjustedPrices); // Output: [12.9881, 7.1281, 4.7481, 7.8361, 12.9881, 7.1281, 4.7481, 7.8361]

// 196. Transformation Data: map() method -> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const taxAdjustedPricesMap = prices.map((price, index, prices) => {
    return price * (1 + tax); // Calculating tax-adjusted prices using the map() method
});
console.log(taxAdjustedPricesMap); // Output: [12.9881, 7.1281, 4.7481, 7.8361]

// Exercise: given the following code:
// input [1, 2, 3]
//output [{val: 1}, {val: 2}, {val: 3}]
function transformObjects(numberArray){
    return numberArray.map(num => {
        return {val: num}; // Transforming an array of numbers into an array of objects using the map() method
    });
}

// 197. Sorting and Reversing Arrays: sort() and reverse() methods
const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1; // If a is greater than b, sort a after b
    } else if (a < b) {
        return -1; // If a is less than b, sort a before b
    } else {
        return 0; // If a and b are equal, keep their original order
    }
})
console.log(sortedPrices); // Output: [3.99, 5.99, 6.59, 10.99]

const sortedHobbies = hobbies.sort(); // Sorting an array in place (mutates the original array)
console.log(sortedHobbies); // Output: ['coding', 'dancing', 'painting', 'photography', 'traveling']

const reversedHobbies = hobbies.reverse(); // Reversing the order of elements in an array in place (mutates the original array)
console.log(reversedHobbies); // Output: ['traveling', 'photography', 'painting', 'dancing', 'coding']

// 198. 199. Filtering Arrays: filter() method -> The filter() method creates a new array with all elements that pass the test 
// implemented by the provided function.
const filteredPrices = prices.filter(price => price > 6); // Filtering an array based on a condition using the filter() method
console.log(filteredPrices); // Output: [10.99, 6.59]

const longHobbies = hobbies.filter(hobby => hobby.length > 6); // Filtering an array of strings based on their length using the filter() method
// Filtering an array of strings based on their length using an arrow function and It's where Arrow functions shine!
console.log(longHobbies); // Output: ['traveling', 'photography']

// 200. The importance of reduce method: reduce() method -> The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in a single output value.
const totalPrice = prices.reduce((prevValue, currentValue, currentIndex, array) => {
    return prevValue + currentValue; // Calculating the total price by summing all elements in the array using the reduce() method
}, 0); // The second argument (0) is the initial value for the accumulator (prevValue). If you don't provide an initial value,
// the first element of the array will be used as the initial value, and the iteration will start from the second element.
console.log(totalPrice); // Output: 27.56

// 202. Arrays & Strings - split() and join() methods
const sentence = 'JavaScript is a versatile language';
const words = sentence.split(' '); // Splitting a string into an array of substrings based on a delimiter (in this case, a space)
console.log(words); // Output: ['JavaScript', 'is', 'a', 'versatile', 'language']

const joinedSentence = words.join(' '); // Joining an array of strings into a single string with a specified separator (in this case, a space)
console.log(joinedSentence); // Output: 'JavaScript is a versatile language'

// 203. The Spread Operator with Arrays
const persons = [{ name: 'Max', age: 30}, { name: 'Anna', age: 25 }, { name: 'John', age: 40 }];
const copiedPersons = [ ...persons.map(person => ({ name: person.name, age: person.age })) ]; // Creating a deep copy of 
// an array of objects using the spread operator and map() method
persons.push({ name: 'Sara', age: 35 }); // Modifying the original array to demonstrate that the copied array is not affected
console.log(copiedPersons); // Output: [{ name: 'Max', age: 30}, { name: 'Anna', age: 25 }, { name: 'John', age: 40 }]
console.log(persons); // Output: [{ name: 'Max', age: 30}, { name: 'Anna', age: 25 }, { name: 'John', age: 40 }, { name: 'Sara', age: 35 }]

const morePrices = [2.99, 4.99];
const allPrices = [...prices, ...morePrices]; // Merging two arrays using the spread operator
console.log(allPrices); // Output: [10.99, 5.99, 3.99, 6.59, 2.99, 4.99]

const copiedPrices = [...prices]; // Creating a shallow copy of an array using the spread operator
console.log(copiedPrices); // Output: [10.99, 5.99, 3.99, 6.59]

const maxPrice = Math.max(...prices); // Finding the maximum value in an array using the spread operator
console.log(maxPrice); // Output: 10.99

const minPrice = Math.min(...prices); // Finding the minimum value in an array using the spread operator
console.log(minPrice); // Output: 3.99

const newHobbies = ['swimming', 'biking'];
hobbies.push(...newHobbies); // Adding multiple elements to an array using the spread operator
console.log(hobbies); // Output: ['traveling', 'photography', 'painting', 'dancing', 'coding', 'swimming', 'biking']

// 204. Understanding Array Destructing
const [firstHobby, secondHobby, ...otherHobbies] = hobbies; // Destructuring an array into individual 
// variables and the rest operator to collect remaining elements
console.log(firstHobby); // Output: 'traveling'
console.log(secondHobby); // Output: 'photography'
console.log(otherHobbies); // Output: ['painting', 'dancing', 'coding', 'swimming', 'biking']
