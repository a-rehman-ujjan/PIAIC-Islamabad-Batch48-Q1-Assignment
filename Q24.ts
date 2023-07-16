// Q24 - More Conditional Test

const string1: string = "Hello";
const string2: string = "World";
console.log(string1 === string2); // false
console.log(string1 !== string2); // true

const text = "UJJAN";
const lowercaseText = text.toLowerCase();
console.log(lowercaseText === "ujjan"); // true
console.log(lowercaseText === "UJJAN"); // false

const number1: number = 5;
const number2: number = 10;
console.log(number1 === number2); // false
console.log(number1 !== number2); // true
console.log(number1 > number2); // false
console.log(number1 < number2); // true
console.log(number1 >= number2); // false
console.log(number1 <= number2); // true

const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2); // false (true and false)
console.log(condition1 || condition2); // true (true or false)

const array = [1, 2, 3, 4, 5];
console.log(array.indexOf(3) != -1); // true
console.log(array.indexOf(6) != -1); // false // if == -1 means value doesn't includes in the array
