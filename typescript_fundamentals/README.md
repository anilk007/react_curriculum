typescript

(1) npm create vite@latest react-typescript-latest -- --template react-ts

(2) npx create-react-app my-app --template typescript


(3) 
typescript playgraound
https://www.typescriptlang.org/

(4) Typescript (.ts and .tsx)
        |
	Typescript compiler (compiler/transpiling)
	    |
	   .js (vanila javascript)
	   
	   


(5) https://vite.dev/guide/


Vite online on StackBlitz
It runs the Vite-based build setup directly in the browser, so it is almost identical to the local setup 

(6)   "build": "tsc && vite build"

(7) walkthrough main.ts, counter.ts

 sprinkle Typescript
 
 (8) import './tutorial.ts'; in main.ts
 
 console.log("Welcome in Typescript world");

 
 (9) 

interface Book {
    title: string;
    author: string;
    genre?: string;
  }
  
  const deepWork: Book = {
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
  };

  console.log(deepWork);

(10) npm run build

dist folder will be created

\dist\assetsindex-Ddzly4bn has above code

(11)
deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed

(12) you can see all methods associated with deepWork.title.

(13) Type annotations

let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;

(14) let amount: number = 12;
amount = 12 - 1;
// amount = 'pants';

(15)let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake';

(16) 
## Type Inference

The typescript compiler can infer the type of the variable based on the literal value that is assigned 
when it is defined. Just make sure you are working in the typescript file 😄

```ts
let awesomeName = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();

(17) // 1. String
let greeting: string = 'Hello, TypeScript!';
greeting = greeting.toUpperCase(); // This should work fine

(18)
// 2. Number
let age: number = 25;
age = age + 5; // This should work fine

(19)
// 3. Boolean
let isAdult: boolean = age >= 18;
isAdult = !isAdult; // This should work fine

(20) 
## Union Type

In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that a variable can hold one of several specific values. More examples are coming up.

```ts
let tax: number | string = 10;
tax = 100;
tax = '$10';

(21)
// fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';

(22)
## Type - "any"

In TypeScript, the "any" type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks. It means a variable declared with the any type can hold a value of any type. Later will also cover - "unknown" and "never"

```ts
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

(23) Benefits of TypeScript
Static Typing	Reduces bugs and improves developer productivity.
Enhanced Tooling	Provides autocompletion, IntelliSense, and refactoring tools.

(24)
## Practical Application of Type Annotation

```ts
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);
```

The reason to explicitly type foundBook as string | undefined is to make it clear to anyone reading the code (including your future self) that foundBook might be undefined at runtime. This is a good practice in TypeScript because it helps prevent bugs related to undefined values.

(25)
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
// orderStatus = 'cancelled'; // This will result in a TypeScript error

(26)
// 2. Discount
let discount: number | string = 20;
discount = '30%';
// discount = true; // This will result in a TypeScript error

(27)
## Arrays - Fundamentals

In TypeScript, arrays are used to store multiple values in a single variable.
 You can define the type of elements that an array can hold using type annotations.

```ts
let prices: number[] = [100, 75, 42];

let fruit: string[] = ['apple', 'orange'];

console.log(prices);
console.log(fruit);

// fruit.push(1);
// let people: string[] = ['bobo', 'peter', 1];

// console.log(people);
//
// be careful "[]" means literally empty array
// let randomValues: [] = [1];

// be careful with inferred array types (bad practice)
// let names = ['peter', 'susan'];

// let names = ['peter', 'susan', 1];

//Explicitly Define a Union Type (good practice)
// let names: (string | number)[] = ['peter', 'susan', 1];
// let array: (string | boolean)[] = ['apple', true, 'orange', false];

(28)
let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' };

(29)
let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property

(30) let product1 = { title: 'Shirt', price: 20 };
let product2 = { title: 'Pants' };
let products: { title: string; price?: number }[] = [product1, product2];
// products.push({ title: 'Shoes', price: 'expensive' }); // This will result in a TypeScript error

(31)## Functions - Fundamentals

In TypeScript, functions can have typed parameters and return values, which provides static type checking and autocompletion support.

```ts
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
}

sayHi('john');
// sayHi(3)
// sayHi('peter', 'random');

(32)
function calculateDiscount(price: number): number {
  // price.toUpperCase();
  const hasDiscount = true;
  if (hasDiscount) {
    return price;
    // return 'Discount Applied';
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

(33)
// "any" example
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}
const result = addThree(2);
const someValue = result;

(34)
const names: string[] = ['John', 'Jane', 'Jim', 'Jill'];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck: string = 'Jane';
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}

(35) ## Functions - Optional and Default Parameters

function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); // Output: 80

let priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount); // Output: 300

function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); // Output: 80

let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); // Output: 300

(36)
## Function - rest parameter

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message} ${total}`;
}

let result = sum('The total is:', 1, 2, 3, 4, 5); 

  console.log(result);
  
(37)
## Functions - "void" return type

In TypeScript, void is a special type that represents the absence of a value. When used as a function return type, void indicates that the function does not return a value.

```ts
function logMessage(message: string): void {
  console.log(message);
}

logMessage('Hello, TypeScript!'); // Output: Hello, TypeScript!

(38)
## Functions - Using Union Types as Function Parameters

```ts
function processInput(input: string | number) {
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(10); 
processInput('Hello'); 
(39)
## Functions - Using Objects as Function Parameters

```ts
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

(40)

function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: 'anna',
};

createStudent(newStudent);

(41)

## Gotcha - Excess Property Checks

```ts
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com',
};

createStudent(newStudent);
createStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' });
```

TypeScript only performs excess property checks on object literals where they're used, not on references to them.

In TypeScript, when you pass an object literal (like { id: 1, name: 'bob', email: 'bob@gmail.com' }) directly to a function or assign it to a variable with a specified type, TypeScript checks that the object only contains known properties. This is done to catch common errors.

However, when you pass newStudent to createStudent, TypeScript doesn't complain about the email property. This is because newStudent is not an object literal at the point where it's passed to createStudent.


(42)
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(10)); 
console.log(processData('Hello')); 
console.log(processData('Hello', { reverse: true })); 

(43) ## Type Alias
type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

(44)
type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = 'hello'; // This is valid
value = 123; // This is also valid

(45)
type Theme = 'light' | 'dark'; // Type alias for theme

let theme: Theme;
theme = 'light'; // This is valid
theme = 'dark'; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark'); // This will set the theme to 'dark'

(45)
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(bob);

(46)
## Type Alias - Computed Properties

Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects.
This is done by wrapping an expression in square brackets [] that computes the property name when creating an object.


const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };

(47)
## Interface - Fundamentals

- allow to setup shape for objects (only objects)

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
};

deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed

(48)

## Interface - Methods

```ts
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};
deepWork.printAuthor();
const result = deepWork.printTitle('is an awesome book');
console.log(result);
