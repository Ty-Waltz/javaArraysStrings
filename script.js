
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

fruits.push('mango');
console.log(fruits); 

let removedFruit = fruits.pop();
console.log(removedFruit); 
console.log(fruits); 

let numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a - b);
console.log(numbers);

let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); 

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 

let message = "Hello, World!";
console.log(message.length);

let text = "Hello, World!";

let upperText = text.toUpperCase();
console.log(upperText);

let lowerText = text.toLowerCase();
console.log(lowerText);

let sentence = "The quick brown fox jumps over the lazy dog";
let substring = sentence.substring(16, 19);
console.log(substring);

let sentenceTwo = "The quick brown fox";
let words = sentenceTwo.split(" ");
console.log(words); 