/*
   Code Filename: ComplexApplication.js
   Description: A sophisticated and elaborate JavaScript application that demonstrates advanced concepts and techniques.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to introduce the person
  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  displayDetails() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

// Array of person objects
const people = [
  new Person("John Doe", 25),
  new Person("Jane Smith", 30),
  new Person("Mike Johnson", 35)
];

// Loop through each person and introduce them
for (let person of people) {
  person.introduce();
  console.log("---");
}

// Create car objects
const car1 = new Car("Toyota", "Corolla", 2019);
const car2 = new Car("Honda", "Civic", 2020);
const car3 = new Car("Ford", "Mustang", 2018);

// Display car details
console.log("Car 1 Details:");
car1.displayDetails();

console.log("Car 2 Details:");
car2.displayDetails();

console.log("Car 3 Details:");
car3.displayDetails();

// Example of a complex mathematical calculation
function calculateFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log("Factorial of 5:", calculateFactorial(5));

// More complex functionality can be added here...

// ...

// ...

// ...

// The code in this file is just a demonstration and can be extended or modified further as required.