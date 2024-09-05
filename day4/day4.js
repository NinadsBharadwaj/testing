// Copyright 2024 ninad
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var currency1=100;
var currency2=0;
var exchangeRate=1.2;

function convertCurrency(amount,rate){
    return amount*rate;
}
currency2=convertCurrency(currency1,exchangeRate);
console.log(currency2);

let counter=3;
function example(){
    console.log(counter);
    counter=counter-1;
    if(counter===0) return;
        example();
}
example()

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background:${background};`;
    style += `font-size:${fontSize};`;
    console.log(message,style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday"){
        console.log("%cHappy Birthday", fontStyle);

    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log("%cCelebrate", style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');
// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color,background, fontSize, txt,reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');


/*Exercise 1: Pure Functions
Write a pure function subtract(a, b) that subtracts b from a and returns the result.
Write a function isEven(x) that returns true if x is even and false otherwise.*/
function subtract(a,b){
    return b-a;
}

function isEven(x){
    return x%2==0?true:false;
}
/* Exercise 2: Array Methods
Create a function filterOddNumbers(arr) that uses Array.prototype.filter to return only the odd numbers from an array.
Create a function doubleArray(arr) that uses Array.prototype.map to double each number in an array.*/
const isOdd=num =>num%2!=0;
const array=[1,2,3,4,5]
function filterOddNumbers(arr){
    console.log(arr.filter(isOdd));
}
filterOddNumbers(array);
const double=x=>2*x;
function doubleArray(arr){
    console.log(arr.map(double));
}
doubleArray(array);

/*Exercise 3: Reduce
Write a function product(arr) that uses Array.prototype.reduce to calculate the product of all numbers in an array.*/
const difference=(sum,arrayItem)=>sum-arrayItem;
function product(arr){
    console.log(arr.reduce(difference));
}
product(array)
/*Exercise 4: Higher-Order Functions
Write a higher-order function withErrorHandling(fn) that takes a function fn as an argument and returns a new function that catches and logs any errors thrown by fn.
Create a higher-order function applyFunction(fn) that takes a function fn and an array arr and returns a new array where fn has been applied to each element of arr.*/
function withErrorHandling(fn) {
    return function(...args) {
        try {
            return fn(...args);
        } catch (err) {
            console.log('Error:', err);
        }
    };
}
function applyFunction(fn, arr) {
    return arr.map(fn);
}
function riskyFunction(x) {
    if (x < 0) throw new Error('Negative value!');
    return x * 2;
}
// Wrap riskyFunction with error handling
const safeFunction = withErrorHandling(riskyFunction);
// Apply safeFunction to an array
const numbers = [1, -2, 3];
const results = applyFunction(safeFunction, numbers);
console.log(results); // Output: [2, Error: Negative value!, 6]

/*Exercise 5: Currying
Implement a curried version of a function multiply(a, b) that returns the product of a and b.
Write a curried function greet(greeting)(name) that returns a greeting message like "Hello, name!" where greeting and name are parameters.*/
// Curried multiply function
const multiply = a => b => a * b;

// Correct usage of multiply
const multiplyByTwo = multiply(2); // Call multiply with 2
const result = multiplyByTwo(5);   // Call the returned function with 5
console.log(result); // Output: 10

// Curried greet function
const greet = greeting => name => `${greeting}, ${name}!`;

// Correct usage of greet
const hello = greet("Hello"); // Call greet with 'Hello'
const message = hello("JavaScript"); // Call the returned function with 'JavaScript'
console.log(message); // Output: 'Hello, JavaScript!'


/*Exercise 6: Composition
Implement a function compose(f, g) that takes two functions f and g, and returns a new function that represents the composition of f and g. For example, compose(f, g)(x) should be equivalent to f(g(x)).
Use the compose function to create a function that first converts a string to uppercase and then reverses it.*/
// Function to compose two functions
const compose = (f, g) => x => f(g(x));

// Function to convert a string to uppercase
const toUpperCase = str => str.toUpperCase();

// Function to reverse a string
const reverseString = str => str.split('').reverse().join('');

// Create a composed function that first converts to uppercase and then reverses
const upperCaseThenReverse = compose(reverseString, toUpperCase);

// Test the composed function
const result1 = upperCaseThenReverse('hello world');
console.log(result1); // Output: 'DLROW OLLEH'

