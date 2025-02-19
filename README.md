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


================day 4 - Typescript ============================

// Day - 4 TypeScript
(49)
/*
- Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
- Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
- Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
- Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
- Also inside the interface, define any methods that the object should have. 
- In this case, we have upgradeRam, which is a function that takes a number and returns a number.
- Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
- Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
*/

interface Computer {
  readonly id: number; // cannot be changed once initialized
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number; // optional property
}

const laptop: Computer = {
  id: 1,
  brand: 'random brand',
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256; // assigning value to optional property

console.log(laptop.upgradeRam(4)); // upgrades RAM by 4GB
console.log(laptop);

(50)
/*
- Define the Person interface Start by defining a Person interface with a name property of type string.
- Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
- Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
- Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
- Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
*/

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'john',
    };
  } else if (random < 0.66) {
    return {
      name: 'sarah',
      dogName: 'Rex',
    };
  } else {
    return {
      name: 'bob',
      managePeople: () => console.log('Managing people...'),
      delegateTasks: () => console.log('Delegating tasks...'),
    };
  }
}

(51)

/*
## Enums

Enums in TypeScript allow us to define a set of named constants. 
Using enums can make it easier to document intent, or create a set of distinct cases.

*/
enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

(52)
// Define an enum named UserRole
enum UserRole {
  Admin,
  Manager,
  Employee,
}

// Define a type alias named User
type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // Tuple: [email, phone]
};

// Define a function named createUser
function createUser(user: User): User {
  return user;
}

// Call the createUser function
const user: User = createUser({
  id: 1,
  name: 'John Doe',
  role: UserRole.Admin,
  contact: ['john.doe@example.com', '123-456-7890'],
});

console.log(user);

(53)

/*
## Type - 'unknown'

The unknown type in TypeScript is a type-safe counterpart of the any type.
 It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.

"error instanceof Error" checks if the error object is an instance of the Error class.
*/

let unknownValue: unknown;

// Assign different types of values to unknownValue
unknownValue = 'Hello World'; // OK
unknownValue = [1, 2, 3]; // OK
unknownValue = 42.3344556; // OK

// unknownValue.toFixed( ); // Error: Object is of type 'unknown'

// Now, let's try to use unknownValue
if (typeof unknownValue === 'number') {
  // TypeScript knows that unknownValue is a string in this block
  console.log(unknownValue.toFixed(2)); // OK
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
    console.log('there was an error....');
  }
}

(54)
enum Color {
  Red,
  Blue,
  // Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue';
    default:
      // at build time
      let unexpectedColor: never = color;
      // at runtime
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  }
}

console.log(getColorName(Color.Red)); // Red
console.log(getColorName(Color.Blue)); // Blue

(55)
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

console.log(value);

(56)
type ValueType = string | number | boolean;

function checkValue(value: ValueType) {
  if (typeof value === 'string') {
    console.log(value.toLowerCase());
    return;
  }
  if (typeof value === 'number') {
    console.log(value.toFixed(2));
    return;
  }
  console.log(`boolean: ${value}`);
}

const value: ValueType = 'Hello'; // Example value
checkValue(value);

(57)
/*
Equality Narrowing

In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code


- Define a function named makeSound that takes one parameter animal of type Animal.
- Inside the function, use an if statement to check if animal.type is 'dog'.
- If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
- If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
- Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

*/

type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal.type === 'dog') {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark();
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow();
  }
}

// Create instances of Dog and Cat
const dog: Dog = { type: 'dog', name: 'Rex', bark: () => console.log('Woof!') };
const cat: Cat = { type: 'cat', name: 'Whiskers', meow: () => console.log('Meow!') };

// Call makeSound with dog and cat
makeSound(dog);  // Outputs: Woof!
makeSound(cat);  // Outputs: Meow!

(58)
//  "Truthy"/"Falsy" guard

function printLength(str: string | null | undefined) {
  if (str) {
    // In this block, TypeScript knows that `str` is a string
    // because `null` and `undefined` are falsy values.
    console.log(str.length);
  } else {
    console.log('No string provided');
  }
}

printLength('Hello'); // Outputs: 5
printLength(null); // Outputs: No string provided
printLength(undefined); // Outputs: No string provided

(59)
/*
## - "instanceof" type guard

The instanceof type guard is a way in TypeScript to check the specific class or constructor function of an object at runtime. It returns true if the object is an instance of the class or created by the constructor function, and false otherwise.
*/

try {
  // Some code that may throw an error
  throw new Error('This is an error');
} catch (error) {
  if (error instanceof Error) {
    console.log('Caught an Error object: ' + error.message);
  } else {
    console.log('Caught an unknown error');
  }
}

(60)
function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random = checkInput('2020-05-05');
console.log(year);
console.log(random);

(61)
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };
};

const person = randomPerson();

// Type guard to identify if person is Student or User
if ('study' in person) {
  console.log('This person is a Student');
} else {
  console.log('This person is a User');
}

console.log(person);

// challenge - 24-01-2025  - how to identify if person is Student or User

(62)
/*
## Generics - Fundamentals

Generics in TypeScript are a way to create reusable code components that work with a variety of types as opposed to a single one.

In other words, generics allow you to write a function or a class that can work with any data type. You can think of generics as a kind of variable for types.

*/
// In TypeScript, you can declare an array using two syntaxes:

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];

console.log(array1);
console.log(array2);
console.log(array3);


(63)


// ## Generics - Create Generic Function and Interface

// Define a generic function
//genericFunction is a generic function, allowing you to 
// pass any type as its parameter and return the same type.

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello World');
const someNumberValue = genericFunction<number>(2);

console.log(someStringValue);
console.log(someNumberValue);

// Define a generic interface
// The <T> in GenericInterface<T> introduces a generic type variable named T
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value;
  },
}

// Use the getValue method
console.log(genericString.getValue()); // Outputs: Hello World


=========================================
Advantages of Generics in the Interface:
Type-Safe:

The type of value and the return type of getValue are enforced by TypeScript based on the specified type T.
This prevents runtime errors due to type mismatches.
Reusable:

You can use the same GenericInterface for multiple types (string, number, boolean, custom types, etc.) without duplicating code.
Flexible:

The interface can adapt to the needs of different use cases dynamically by specifying different types for T.

=============================================================

(64) 
/*
## Generics - Promise Example

// A Promise in JavaScript (and thus TypeScript)
//  is an object representing the eventual completion or failure of an asynchronous operation.
*/

async function someFunc(): Promise<string> {
  return 'Hello World';
}

const result = someFunc();

console.log(result);

// challenge - 24-01-2025 - at present output is Promise which is in fullfilled status
// can u make minimum changes in above code to show Prmise status as pending.


(65)
// generate an array of strings
function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateStringArray(3, 'hello'));

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(3, 'hello'); // ["hello", "hello", "hello"]
let arrayNumbers = createArray<number>(4, 100); // [100, 100, 100, 100]

console.log(arrayStrings);
console.log(arrayNumbers);

(66)
function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// Usage
let result = pair<number, string>(123, 'Hello');
console.log(result); // Output: [123, "Hello"]



===================day 5========================================================
(1) 
//# Generics - Inferred Type and Type Constraints

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// Usage
let result = pair(123, 'Hello');


//  const [products,setProducts] = useState<Product[]>([])

console.log(result);

(2) function processValue<T extends number | string>(value: T): T {
  console.log(value);
  return value; // Ensure the function returns the value
}

processValue('hello');
processValue(12);
//processValue(true)

// T extends number | string means that T is restricted to be either number or string

(3) Type Constraints

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'peter',
  age: 20,
};



function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}


printName(student);
printName(product);

// extends { name: string } is a constraint on T.
//  It ensures that T can only be an object type that has a name property of type string.


(3) .gitignore

(4) tsconfig.json

(5) tsx v/s ts

(6) \src\final\01-return

function Component(): JSX.Element | null | string 

(7) import Component from './final/02-props'

 <Component name="Bob" id={33} >wah</Component>
 
 ==========================
 // import { type PropsWithChildren } from 'react';

type ComponentProps = {
  name: string;
  id: number;
  children?: React.ReactNode;
};


function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>ID : {id}</h2>
      {children}
    </div>
  );
}
export default Component;
 
 
(8)  function Component(props: ComponentProps)

function Component(props: ComponentProps) {
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <h2>ID : {props.id}</h2>
      {props.children}
    </div>
  );
}
export default Component;

(9) npm i zod axios @tanstack/react-query

(10) context API

import React from "react";

// Create a context for the user
const AuthContext = React.createContext({
    isLoggedIn : false
	
	
});

export default AuthContext;

=========================================

 <AuthContext.Provider value={
      {isLoggedIn : isLoggedIn}
    }>
	=============
	=============
	==============
	
 </AuthContext.Provider>	
 
=======================================
import AuthContext from './../../../common/context/auth-context';

let authCtx = useContext(AuthContext);
console.log("authCtx.isLoggedIn");
console.log(authCtx.isLoggedIn);

(11) JSX rules

	(a)
	JSX Must Have One Parent Element
	
	return (
	  <div>
		<h1>Hello</h1>
		<p>Welcome to JSX</p>
	  </div>
	);
	
	invalid
	
	return (
		<h1>Hello</h1>
		<p>Welcome to JSX</p>
	);
	
	<>
	    <h1>Hello</h1>
		<p>Welcome to JSX</p>
	</>
	
	
	(b) JSX includes JavaScript expressions within curly braces {}.
	
	const name = "John";
	return <h1>Hello, {name}!</h1>;
	
	(c) Attribute Naming Follows CamelCase
	
	 <button onClick={handleClick} className="btn">Click Me</button>
	 
    (d) className Instead of class
	
	<div className="container">Hello World</div>
	
	(e) JSX Attributes Can Take JavaScript Expressions
	
	const isActive = true;
	return <div className={isActive ? "active" : "inactive"}>Status</div>;
	
	(f) Self-Closing Tags
	
	Tags without children must be self-closed.

	<img src="image.jpg" alt="example" />
	<input type="text" />
	
	(g) JavaScript Reserved Words
	
	Certain JavaScript reserved words like class, for, etc., must be replaced with JSX-friendly names like className, htmlFor, etc.
	
	<label htmlFor="name">Name:</label>
	<input id="name" type="text" />
	
	(h) Use ternary operators for conditional rendering.
	
	const isLoggedIn = true;
	return (
	  <div>
		{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Sign In</h1>}
	  </div>
	);
	
	(i)	Comments in JSX
	
	return (
	  <div>
		{/* This is a comment */}
		<h1>Hello World</h1>
	  </div>
	);
	
	(j) Use React.Fragment or shorthand <>...</> to group elements without adding extra nodes to the DOM.
	
	return (
	  <>
		<h1>Title</h1>
		<p>Paragraph</p>
	  </>
	);
	
	(k)  Avoid Injection Attacks
	
	<div dangerouslySetInnerHTML={{ __html: "<h1>Injected</h1>" }}></div>
	
	(l) Functions and Components in JSX
	
	You can use custom components like regular JSX tags, starting with an uppercase letter.
	
	function Welcome() {
	  return <h1>Welcome!</h1>;
	}

	return <Welcome />;
	
(12) rendering List in JSX

import React from 'react';

function List() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;

(13) conditional rendering with &&

import React from 'react';

function MyComponent() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Welcome to My App</h1>
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
  );
}

export default MyComponent;

(14) write a JSX example for conditional rendering with turneries

import React from 'react';

function MyComponent() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Welcome to My App</h1>
      {isLoggedIn ? <p>You are logged in!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default MyComponent;

(15) write a JSX example for setting classes conditionally

Here is an example of conditionally setting classes in JSX:

```jsx
import React from 'react';

function MyComponent() {
  const isActive = true;

  return (
    <div>
      <h1 className={isActive ? 'active' : 'inactive'}>Welcome to My App</h1>
    </div>
  );
}

(16) 
You can also apply multiple classes conditionally like this:

import React from 'react';

function MyComponent() {
  const isActive = true;
  const isSpecial = false;

  return (
    <div>
      <h1 className={`${isActive ? 'active' : 'inactive'} ${isSpecial ? 'special' : ''}`}>
        Welcome to My App
      </h1>
    </div>
  );
}

export default MyComponent;

(17) Styling

Inline Styles: Quick, but no support for pseudo-classes or media queries.
CSS Stylesheets: Simple, but might lead to global styles that can conflict.
CSS Modules: Scoped styles, better than global styles, but requires a bit of setup.
Styled Components: Dynamic styling, scoped, and great for modern applications.
Tailwind CSS: Utility-first CSS framework for composing classes directly in JSX.

(17)
Using CSS Modules in React

.container {
  background-color: lightblue;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.heading {
  color: darkblue;
  font-size: 2rem;
}

.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: darkblue;
}


import React from 'react';
import styles from './MyComponent.module.css'; // Importing the CSS Module

function MyComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello, CSS Modules!</h1>
      <button className={styles.button}>Click Me</button>
    </div>
  );
}

export default MyComponent;



(18)Tailwind CSS

import React from 'react';

function MyComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-blue-600 mb-4">Welcome to My App</h1>
        <p className="text-gray-700 mb-6">
          This is an example of using Tailwind CSS with React to create styled components.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default MyComponent;



(19)

Button

PaymentButton

ReceiptButton	

=============================day - 6=============================================
(1)  npm install && npm run start

 npm install && npm run dev
 
(2)
#### SPA

SPA stands for Single-Page Application, which is a web application that dynamically updates its content without requiring a full page reload. It achieves this by loading the initial HTML, CSS, and JavaScript resources and then dynamically fetching data and updating the DOM as users interact with the application.

React Router is a JavaScript library used in React applications to handle routing and navigation. It provides a declarative way to define the routes of an application and render different components based on the current URL. React Router allows developers to create a seamless, client-side navigation experience within a SPA by mapping URLs to specific components and managing the history and URL changes.
 
 
(3) 

import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>home page</h2>,
  },
  {
    path: '/about',
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

export default App

(3 a)

http://localhost:5173/
http://localhost:5173/about


(4) vs code dfault terminal -command prompt

(5)
App.jsx

import './App.css'

import {
  HomeLayout,
  About,
  Landing,
  Newsletter,
  Cocktail,
} from './pages';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

function App() {
 
  return <RouterProvider router={router} />;
}

export default App

(6) HomeLayout


import { Link, Outlet } from 'react-router-dom';

/*
In React Router, the parent route (HomeLayout in this case) must include 
the <Outlet /> component. This is where the child routes will be rendered.
 Without this, the child routes won't display.
*/

const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <nav>
        <ul>
          <li>
            <Link to="landing">Landing</Link>
          </li>
          <li>
            <Link to="cocktail">Cocktail</Link>
          </li>
          <li>
            <Link to="newsletter">Newsletter</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
export default HomeLayout;


(7) Add dynamic route parameter
 {
        // path: 'cocktail',
        path: 'cocktail/:id', // Added dynamic route parameter
        element: <Cocktail />,
      }
	  
==============================
\src\pages\Cocktail.jsx	  


import { useParams } from 'react-router-dom';

function Cocktail() {
  const { id } = useParams();

  return <h2>Cocktail Details for ID: {id}</h2>;
}

export default Cocktail;
	  
	  
	  
(8) Display error if Missing Cocktail ID

http://localhost:5173
http://localhost:5173/cocktail/244


 {
        path: 'cocktail',
        element: <h2>Error: Missing Cocktail ID</h2>, // Show error when ID is missing
 }	  
	  

(9) router_practice\src\assets\wrappers\Navbar.js

import styled from 'styled-components';

const Wrapper = styled.nav

(10)  {
        path: 'cocktail',
        element: <Navigate to="/landing" />, // Redirect to landing if no ID is provided
      }
	  
(11)
import { useNavigate } from 'react-router-dom';

const ExampleComponent = () => {
  const navigate = useNavigate();
  
  const goToAboutPage = () => {
    navigate('/about');
  };

  return <button onClick={goToAboutPage}>Go to About</button>;
};

(12)
import { useLocation } from 'react-router-dom';

const LocationExample = () => {
  const location = useLocation();

  return (
    <div>
      <p>Current URL: {location.pathname}</p>
      <p>Search query: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <p>State: {JSON.stringify(location.state)}</p>
    </div>
  );
};

(13)
import { useMatch, Link } from 'react-router-dom';

  const matchHome = useMatch('/');
  const matchAbout = useMatch('/about');
  const matchContact = useMatch('/contact');


====day - 7 ===============================

(1) https://redux-toolkit.js.org/

(2) npm install @reduxjs/toolkit react-redux

(3) Create a file named counterSlice.js in your project.

(4) how to clean vscode terminal logs?

 
(5)  ReduxToolkit_Overview.ppt

redux_diagram.jpg


store -> slice -> actions -> reducers -> diapatch


(6) redux_diagram

(7) 
  // useSelector is a React-Redux hook to access the Redux store's state.
  // state represents the entire Redux store.
  // state.counter refers to the counter slice in the store.
  // state.counter.value gets the value from the counter slice.
  
  const count = useSelector((state) => state.counter.value);

  // useDispatch is a React-Redux hook to send actions to the store.
  
  const dispatch = useDispatch();
  
 (8)  ReduxToolkit challenge 
 
 C:\anil\training\react\jan_2025\redux_tool_kit_practice
 
 (9)Zustand - other state management library


(10) ticket system

trello
notion
clickup


(7) examples - share

(8)  npm run dev


Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

(9) code review in group

(9)  Example of an Uncontrolled Component

import React, { useRef } from "react";

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Entered Value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;

(10)
The useMemo hook in React is used to optimize performance by memoizing expensive computations 
so they don't re-run on every render unless dependencies change.

import React, { useState, useMemo } from "react";

const FactorialCalculator = () => {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  // Expensive factorial calculation memoized
  const factorial = useMemo(() => {
    console.log("Calculating Factorial...");
    const calculateFactorial = (num) => {
      if (num <= 1) return 1;
      return num * calculateFactorial(num - 1);
    };
    return calculateFactorial(number);
  }, [number]); // Recalculates only when `number` changes

  return (
    <div>
      <h2>Factorial of {number}: {factorial}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
      />
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
};

export default FactorialCalculator;

========================================================
(10-a) Derived State in React

Avoid redundant calculations: Derived state can be useful when you need to calculate values
based on existing state or props but want to avoid recalculating on every render.

Simplify logic: Instead of manually calculating derived values in render or useEffect, 
you can rely on useMemo or other techniques to keep the code clean and efficient.
=================

import React, { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // Derived state: double of count
  const doubleCount = useMemo(() => count * 2, [count]);

  return (
    <div>
      <h1>Derived State Example</h1>
      <p>Count: {count}</p>
      <p>Double of Count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default App;







========================================================

(11) The useCallback hook in React is used to memoize functions so they don't get re-created on every render, 
unless dependencies change. This is useful for optimizing performance, especially when 
passing functions as props to child components.

import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }) => {
  console.log("Button re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // useCallback ensures the function is memoized and does not change on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button handleClick={increment} />
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Update Other Count ({otherCount})
      </button>
    </div>
  );
};

export default Counter;

(12)
React.memo is a higher-order component that memoizes the rendered output of a component. 
It prevents unnecessary re-renders when the component’s props haven't changed.

import React, { useState } from "react";

// This component will only re-render if the `name` prop changes
const Greeting = React.memo(({ name }) => {
  console.log("Greeting re-rendered");
  return <h2>Hello, {name}!</h2>;
});

const App = () => {
  const [name, setName] = useState("Alice");
  const [count, setCount] = useState(0);

  return (
    <div>
      <Greeting name={name} />
      <button onClick={() => setName(name === "Alice" ? "Bob" : "Alice")}>
        Toggle Name
      </button>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default App;

(13)
A Higher-Order Component (HOC) is a function that takes a component and returns a
new component with additional props or logic. HOCs are used to add common functionality to multiple components.

Code Reusability: Adding common behavior (like logging, authentication checks, data fetching, etc.)
to different components without changing their internal logic.

import React from "react";

// Custom HOC that logs the component's name on render
const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log(`${WrappedComponent.name} rendered`);
    return <WrappedComponent {...props} />;
  };
};

// Regular component
const Button = ({ label }) => {
  return <button>{label}</button>;
};

// Wrapped component with additional logging functionality
const ButtonWithLogging = withLogging(Button);

const App = () => {
  return (
    <div>
      <ButtonWithLogging label="Click Me" />
    </div>
  );
};

export default App;

(14) Custom Hook for Data Fetching

Advantages of Using This Custom Hook:
Reusability: You can use this useFetch hook in any component where you need to fetch data.
Clean Component Code: The data-fetching logic is abstracted away in the hook, making the component code more readable and maintainable.


import { useState, useEffect } from "react";

// Custom hook to fetch data
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run when URL changes

  return { data, loading, error };
};

export default useFetch;

=======================================
import React from "react";
import useFetch from "./useFetch"; // Import the custom hook

const UserList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UserList />
    </div>
  );
};

export default App;
===============================================
(15) Delete All Items example

import React, { useState } from "react";

const App = () => {
  // State holding an array of items
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  // Function to delete all items
  const deleteAll = () => {
    setItems([]); // Clear the items array
  };

  return (
    <div>
      <h1>List of Items</h1>
      {/* Displaying the items */}
      <ul>
        {items.length === 0 ? (
          <li>No items to display</li>
        ) : (
          items.map((item, index) => <li key={index}>{item}</li>)
        )}
      </ul>
      {/* Button to delete all items */}
      <button onClick={deleteAll}>Delete All</button>
    </div>
  );
};

export default App;



(15) reducer to clear cart

reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    }
	
	
==============================
Day-8 

(1) Why Redux Middleware?

diagram
C:\anil\training\react\jan_2025\diagram_react_redux_middleware

(2) C:\anil\training\react\jan_2025\my-react-saga-app

(2-A) npm install redux react-redux redux-saga @reduxjs/toolkit axios --save

(2-B) 
ES6 Generator Functions

function* myGenerator() {
    console.log("Start");
    yield 1;  // Pauses here
    console.log("Middle");
    yield 2;  // Pauses here
    console.log("End");
}

const gen = myGenerator(); // Creates generator object

console.log(gen.next()); // "Start" -> { value: 1, done: false }
console.log(gen.next()); // "Middle" -> { value: 2, done: false }
console.log(gen.next()); // "End" -> { value: undefined, done: true }



(3) Redux-Saga implementation for handling asynchronous API calls in a Redux-based React application

userSaga.js

// takeLatest - Listens for dispatched actions
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure} from './../actions/userActions';

// API function
const fetchUserApi = () => axios.get('https://jsonplaceholder.typicode.com/users/1');

// Worker saga
/*
fetchUserSaga is a generator function that handles the API request.
call(fetchUserApi) calls the API function.
The * after function indicates that this is a generator function, which can pause and resume execution.
it can pause and resume execution using the yield keyword.
*/

function* fetchUserSaga() {
  try {
    const response = yield call(fetchUserApi);
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

// Watcher saga
/*
The watcher saga listens for the fetchUserRequest action.
takeLatest ensures that if multiple requests are dispatched, only the latest one is processed.
When fetchUserRequest is dispatched, fetchUserSaga runs to handle the API call.
*/
export default function* userSaga() {
   yield takeLatest(fetchUserRequest().type, fetchUserSaga);
}


(4) C:\anil\training\react\jan_2025\react-thunk-example-app

(4-A) npm install @reduxjs/toolkit react-redux redux-thunk axios --save

(5) C:\anil\training\react\jan_2025\react-thunk-example-app\src\actions\userActions.js

import axios from "axios";

// Thunk function to fetch users
export const fetchUsers = () => async (dispatch) => {

  // Before making the API call, it dispatches an action of type "FETCH_USERS_REQUEST".
  // This is useful for setting a loading state in the Redux store.

  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
  }
};

(6) C:\anil\training\react\jan_2025\router_practice\src\components\greetings\Greeting.test.jsx

import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

import '@testing-library/jest-dom';


describe('Greeting Component', () => {
  test('renders greeting with provided name', () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText(/Hello, Alice!/i)).toBeInTheDocument();
    
  });

  test('renders default greeting when no name is provided', () => {
    render(<Greeting />);
    expect(screen.getByText(/Hello, Guest!/i)).toBeInTheDocument();
  });
});

(7) C:\anil\training\react\jan_2025\router_practice\src\components\userprofile\UserProfile.test.jsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from './UserProfile';

describe('UserProfile Component', () => {
  test('renders user details when user data is provided', () => {
    const mockUser = { name: 'John Doe', email: 'john.doe@example.com' };
    
    render(<UserProfile user={mockUser} />);
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('John Doe');
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  test('renders fallback message when no user data is provided', () => {
    render(<UserProfile user={null} />);
    
    expect(screen.getByText('No user data available')).toBeInTheDocument();
  });
});

(8) C:\anil\training\react\jan_2025\router_practice\src\components\checkbox-example\CheckboxExample.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxExample from './CheckboxExample';

describe('CheckboxExample Component', () => {
  test('toggles checkbox and displays confirmation message', () => {
    render(<CheckboxExample />);
    
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Accept Terms & Conditions');

    // Ensure checkbox is initially unchecked
    expect(checkbox).not.toBeChecked();

    // Click to check the checkbox
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(screen.getByText('You have accepted the terms.')).toBeInTheDocument();

    // Click to uncheck the checkbox
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(screen.queryByText('You have accepted the terms.')).not.toBeInTheDocument();
  });
});

(9) mock function 

describe('LoginForm Component', () => {
    test('calls submitLogin with the correct arguments when form is submitted', () => {
        const mockSubmitLogin = vi.fn(); // Create a mock function for submitLogin

        render(<LoginForm submitLogin={mockSubmitLogin} />);

        const usernameInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByText('Login');

        // Simulate user input
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        // Simulate form submission
        fireEvent.click(submitButton);

        // Assert submitLogin is called with the correct username and password
        expect(mockSubmitLogin).toHaveBeenCalledWith('testuser', 'password123');
    });


});


(10)
npm install --save-dev @vitest/coverage-v8

npm test -- --coverage


show code which is not covered
file:///C:/anil/training/react/jan_2025/router_practice/coverage/index.html

(11) vitest_matchers_list

C:\anil\training\react\jan_2025\vitest_matchers_list

(11) // cypress/integration/login.spec.js
describe('Login Page', () => {
  it('should log in successfully', () => {
    cy.visit('/login'); // Navigate to the login page
    cy.get('input[name="username"]').type('myusername'); // Type username into input field
    cy.get('input[name="password"]').type('mypassword'); // Type password into input field
    cy.get('button[type="submit"]').click(); // Click on the submit button
    
    // Assert that the user is redirected to the dashboard page after login
    cy.url().should('include', '/dashboard'); 
    cy.get('h1').should('contain', 'Welcome'); // Check if "Welcome" text appears on the page
  });
});


(12) enzyme

// src/User.test.js
import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User Component', () => {
  it('should render the initial name correctly', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('p').text()).toBe('John Doe');
  });

  it('should update the name when the button is clicked', () => {
    const wrapper = shallow(<User />);
    
    // Initially, the name should be 'John Doe'
    expect(wrapper.find('p').text()).toBe('John Doe');
    
    // Simulate the button click to change the name
    wrapper.find('button').simulate('click');
    
    // After the click, the name should be updated to 'Jane Smith'
    expect(wrapper.find('p').text()).toBe('Jane Smith');
  });
});



(5) your examples

(1)

https://trello.com/invite/b/679a2e6c04a9cb3c573e8214/ATTI5eb2fe891986384ded1c18b45d8bec712667B61C/training-react-js

https://trello.com/b/K8rJ1nyD/training-react-js


(2) React Custom Hooks

Custom hooks are not just a convenience in React — 
they’re a game-changer for modular, reusable and maintainable code. 
They allow developers to encapsulate logic, manage state, and streamline 
complex functionalities.

(3) useDebounce

Optimize Performance ⏳ Handling frequent user input, such as search or form fields, 
is made efficient with a debounce hook, reducing unnecessary renders and API calls.

import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

==========================
Usage:

const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 500);

useEffect(() => {
  if (debouncedSearch) {
    // Trigger API or other actions
  }
}, [debouncedSearch]);

======================================
Abovw code defines a custom React Hook called useDebounce, which is used to delay updates to a 
value until a specified time (delay) has passed without further changes. 
This is useful for optimizing performance in cases like search input handling, 
where frequent changes could trigger unnecessary API calls.

(4) useToggle

 Manage Boolean States Easily “Managing toggle states for modals, dropdowns,
 or theme switches is effortless with a custom useToggle hook, keeping your code clean and reusable.
 ====
 
 import { useState } from "react";

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState(prev => !prev);

  return [state, toggle] as const;
}

export default useToggle;

=================================
const [isModalOpen, toggleModal] = useToggle();

return (
  <div>
    <button onClick={toggleModal}>Toggle Modal</button>
    {isModalOpen && <p>Modal Content</p>}
  </div>
);



==================================
(5) useLocalStorage

Persist Data Locally 📂 Storing and retrieving data from localStorage becomes
 seamless and reusable with a custom useLocalStorage hook.
 
 import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;

============================
Usage:

const [theme, setTheme] = useLocalStorage('theme', 'light');

return (
  <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    Toggle Theme
  </button>
);

===================================================

(6) usePrevious

Track Previous State Tracking a value’s previous state is essential for 
comparisons and animations, easily achieved with a custom usePrevious hook.

import { useEffect, useRef } from "react";

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;


============
Usage:

const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

return (
  <p>
    Now: {count}, Before: {prevCount}
  </p>
);


(7) useClickOutside

Detect Outside Clicks Perfect for closing modals or dropdowns when clicking outside,
using a custom useClickOutside hook for better user experience.

import { useEffect, useRef } from "react";

function useClickOutside(handler: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handler]);

  return ref;
}

export default useClickOutside;

=============
Usage:

const ref = useClickOutside(() => setDropdownOpen(false));

return (
  <div ref={ref}>
    {dropdownOpen && <p>Dropdown Content</p>}
  </div>
);

=================
trello

https://trello.com/b/K8rJ1nyD/training-react-js


===== day-9 ============= Advance React patterns ==========================
(1) HOC
UserListWithData

C:\anil\training\react\jan_2025\router_practice\src\components\HOC\with_data\WithData.jsx

const UserListWithData = WithData(UserList, dataURL); 

(2) 
Example  Authentication (Protecting Routes)

This is a classic use case. Imagine you have several routes in your application that should only be accessible
to authenticated users.  Instead of repeating authentication checks and logic in each component, you can create an withAuth HOC.
 

How it works: withAuth takes a component (WrappedComponent) as an argument and returns a new component (AuthenticatedComponent). AuthenticatedComponent checks the authentication status. If the user is authenticated, it renders the original WrappedComponent; 
otherwise, it renders a login message or redirects.
Benefits: You can now easily protect any component by wrapping it with withAuth. The authentication logic is centralized and reusable.

const withAuth = (WrappedComponent) => {
  return (props) => {
    if (isAuthenticated()) {
      return <WrappedComponent {...props} />;
    } else {
      // Redirect or display a message if not authenticated
      return (
        <div>
          <h1>Unauthorized</h1>
          <p>Please log in to access this page.</p>
          {/* You could add a login button/link here */}
        </div>
      );
    }
  };
};

(3) 

import React, { lazy, Suspense } from 'react';

const About = lazy(() => import('./pages/About')); // Dynamic import

<Suspense fallback={<div>Loading...</div>}> 
   <About />
</Suspense>

(4)
React Query, a data-fetching library from Tanstack. React Query helps you handle data-fetching in a super easy way.
You get access to hooks such as...

Imagine you’re working on a project where you need to fetch data from an API, cache it for better performance,
and synchronize it in the background. You might also need to handle pagination, infinite loading, and 
other complex scenarios. 
Doing all of this manually can be a daunting task and can lead to a lot of boilerplate code.

import { useQuery } from "@tanstack/react-query";

C:\anil\training\react\react_query_example_diagram

===========================================================================

(5)Creating a React portal component outside the `root` div is useful in scenarios like:

1.  Modals & Dialogs   
   - Prevents issues with parent `overflow: hidden` or `z-index`.
   - Ensures the modal appears above all other content.

2.  Tooltips & Popovers   
   - Helps avoid clipping inside containers with `overflow: hidden`.

3.  Dropdowns & Menus   
   - Ensures the dropdown is rendered above other elements.

4.  Notifications & Toast Messages   
   - Allows global notifications to be displayed outside the main React tree.

=====================================================================================	
(6)
 C:\anil\training\react\jan_2025\router_practice\src\components\react-portal-example\PortalComponent.jsx

import React, { useState } from "react";
import ReactDOM from "react-dom";

const PortalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Portal</button>
      {isOpen &&
        ReactDOM.createPortal(
          <div style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"
          }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
              <h2>Portal Content</h2>
              <p>This is rendered using React Portal.</p>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </div>,
          document.body // document.getElementById('portal-root') // Place to mount the portal container
        )}
    </div>
  );
};
export default PortalComponent;

//=========================================
(7)
button:nth-child(1) {
    background-color: red;
  }

  button:nth-child(2) {
    background-color: blue;
  }

  button:nth-child(3) {
    background-color: green;
  }

  button:nth-child(4) {
    background-color: yellow;
  }

  button:nth-child(5) {
    background-color: purple;
  }

	
=========================================================================
==== day-10 =============Next.js 

(1) npm i create-next-app --save

(2) https://codesandbox.io/

React.new in browser tab

(3) SSR, server components

(4) Next.js Resources

https://codedrivendevelopment.com/posts/rarely-known-nextjs-features

How React server components work: an in-depth guide
https://www.plasmic.app/blog/how-react-server-components-work

A nice way of visualizing the RSC payload right in Chrome's DevTools
https://www.alvar.dev/blog/creating-devtools-for-react-server-components

 Image Component: In-Depth Tutorial
https://www.fullstackfoundations.com/blog/nextjs-image-component-tutorial

Finally Master Next.js's Most Complex Feature - Caching
https://blog.webdevsimplified.com/2024-01/next-js-app-router-cache/

(5) Explain Server side rendering diagram

PHP
Wordpress

Next.js
Remix

(6) npx create-next-app device_management_app

(7) next js documentation
https://nextjs.org/docs

(8) Hyderation

(9) <a href="   ">

<Link href="   "

<Link to="  "

(10) SSR (Server side routing) , File base routing

(11) Full stack web devlopment

(12) client side rendering (CSR) v/s Server side rendering (SSR)

	(a) 
	JS Bundle (HTML, JS, CSS)
	
	Slow
	
	(b) fetch data after bundle load in CSR - Spinner		Server side rendering (SSR) is fast.
	    Request waterfall - slow
		
	(c) CSR - highly interactive 						- Server side rendering (SSR) less interactive
	 
	(d) CSR -  SEO performs poorly in CSR.				Server side rendering (SSR) - SEO sines 
														Largest Contentful Paint (LCP) and 
														First Contentful Paint (FCP) are faster in Server side rendering (SSR) 
	


(13) Hyderation - SSR sends bundle also along with HTML for interactivity
	Water dry demo
	
(14) Next js by Vercel
		Meta framework over React js
		
(15) Next js follow best practices
  Routing
  Data fetching
  Optimization techniques
  SEO - Preloading
  Layouts
  error boundry
  Loading 
  Parallel routing
  Caching
  
(16) \my-next-app\next.config.ts  
  
(16) app router

app/page.js

(17)
/cabins
/about
/contact

(18) VS Code ===> Custom Labels
**/page.js				PAGE : ${dirname}

(19) Navigation.js


import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className='z-10 text-xl'>
        <ul className="flex gap-16 items-center">
          <li> <Link href="/cabins">Cabins</Link> </li>
          <li> <Link href="/account">Account</Link> </li>
          <li> <Link href="/about">About</Link> </li>
          <li> <Link href="/contact">Contact</Link> </li>
        </ul>
      </nav>
    </>

  );
}

Link only loads require part on page (SPA)
Out of box optimization - 
	Pre fetch
	optimize chunk rendering
	caching
	
(19) Micro front end architecture - 
     React Mobile App   - Vijay
	 React Application deployment - netify, vercel, firebase - Mayank Sunder
	 
===== day 11 ============= Micro Front end Architecture =============

(1) npm install react react-dom webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-react

(2) Vite uses Rollup as its bundler.

(3) npm install webpack webpack-cli webpack-dev-server --save

(4) vite

remote_app
===========
npm create vite@latest remote_app -- --template react
npm install
npm install @module-federation/enhanced
vite.config.js
npm run build

\remote_app\dist\assets\remoteEntry.js file will be created

npm run preview



host app
=========
npm create vite@latest host_app -- --template react
npm install
npm install @module-federation/enhanced
vite.config.js
npm run build
npm run preview




npm create vite@latest host_app -- --template react


npm install @module-federation/enhanced

vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@module-federation/enhanced';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "headerApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header.jsx",
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: {
    port: 5001,
  },
});


(5) Setup Container App

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@module-federation/enhanced';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "containerApp",
      remotes: {
        headerApp: "headerApp@http://localhost:5001/remoteEntry.js",
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: {
    port: 5000,
  },
});

(6) npm i @originjs/vite-plugin-federation --save


===== day 12 ============= CI CD Pipeline =============

	 React Application deployment - netify, vercel, firebase
	 
	 
	AWS Amplify	Simple static React apps with CI/CD
	S3 + CloudFront	Static apps needing CDN & HTTPS
	EC2 + Nginx	Apps needing more control & backend
	Elastic Beanstalk	Full-stack apps (React + Node.js)
	
	Method	Best For
	Azure Static Web Apps	Simple static React apps with CI/CD
	Azure App Service	React apps needing Node.js backend
	Azure Blob Storage + CDN	Static hosting with CDN speed
	Azure Kubernetes Service	Scalable, containerized apps
	
	
	Gitlab CI/CD