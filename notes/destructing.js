// Basic Array Destructuring (position based)
const fruits = ["apple", "banana", "cherry"];
const [first, second, third] = fruits;
console.log(first); // 'apple'
console.log(second); // 'banana'
console.log(third); // 'cherry'

// Basic Object Destructuring (key based)
const person = { name: "Soli", age: 37, job: "developer" };
const { name, age, job } = person;
console.log(name); // 'Soli'
console.log(age); // 37
console.log(job); // 'developer'

// Skipping Items in Array Destructuring
const colors = ["red", "blue", "green"];
const [, secondColor] = colors; // skipping first item by using a comma (,)
console.log(secondColor); // 'blue'

// Default Values in Destructuring (useful for incomplete or partially populated data)
const numbers = [1]; // there is no b
// const numbers = [1,4]; // there is b
const [a, b = 10] = numbers;
console.log(numbers);
console.log(a);
console.log(b);

const car = { brand: "Toyota", model: "Supra" };
const { brand, model = "Corolla" } = car;

console.log(car);
console.log(brand);
console.log(model);

const sentence = { words: "This is the sentence Im destructuring." };
const { words: sentenceWords } = sentence; // renaming 'words' to 'sentenceWords'
console.log(sentence);
console.log(sentenceWords);

const sentenceTwo =
	"some words i wrote in a variable and now im destructuring it";
console.log(sentenceTwo);

//Renaming Variables in Object Destructuring
const user = { username: "soli", password: "1234" };
const { username: uName, password: pass } = user; // renaming 'username' to 'userName' and 'password' to 'userPassword'.
console.log(user); // { username: 'soli', password: '1234' }
console.log(uName); // 'soli'
console.log(pass); // '1234'

//Nested Destructuring
const employee = {
	anotherName: "SOLINYC",
	details: { role: "manager", salary: 5000 },
}; // 'details' is an object nested within 'employee'
const {
	anotherName, // renaming 'anotherName' to 'employeeName'
	details: { role, salary }, // destructuring 'details' object to extract 'role' and 'salary'
} = employee; // renaming 'details' to 'employeeDetails' and then destructuring 'role' and 'salary' from 'employeeDetails'
console.log(anotherName); // 'Jane'
console.log(role); // 'manager'
console.log(salary); // 5000

// Destructuring Arrays in Function Parameters
function sum([a, b]) {
	// destructuring the input array directly in the function parameters to extract 'a' and 'b'
	return a + b; // returning the sum of 'a' and 'b'
} // Example usage:
console.log(sum([5, 10])); // Expected Output -> 15

//Destructuring Objects in Function Parameters
function displayUser({ name, age }) {
    // destructuring the input object directly in the function parameters to extract 'name' and 'age'
    console.log(`Name: ${name}, Age: ${age}`); // logging the user's name and age to the console
} // Example usage: 

function greet({ name, age }) { // destructuring the input object directly in the function parameters to extract 'name' and 'age'
  return `Hello, ${name}. You are ${age} years old.`; // returning a greeting message that includes the user's name and age
}  // Example usage:
console.log(greet({ name: 'Soli', age: 37 }));
// Expected Output -> 'Hello, Soli. You are 37 years old.'
