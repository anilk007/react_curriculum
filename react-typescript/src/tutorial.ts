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