class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    global.nameForIntro = this.name + 1;
    console.log(
      `My name is ${nameForIntro}, and I will be your ${this.teaches} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade, `for ${paper}`);
    console.log(nameForIntro);
  }
}

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf();

walsh.grade("my paper");
// Encapsulation: Using a closure to keep variables private
class BankAccount {
  balance;
  amount;
  constructor(balance, amount) {
    this.balance = balance;
    this.amount = amount;
  }
//   setBalance = () => (balance = this.balance);
  getBalance = () => this.balance;

  deposit(amount) {
    this.balance += amount;
    return true
  }

  withdraw(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        return true
    }
    else{
        return false
    }
  }
}

// Inheritance: Creating child classes that inherit from a parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows`);
  }
}

// Polymorphism: Using the same interface for different types of objects
const animals = [new Dog("Fido"), new Cat("Whiskers")];

animals.forEach((animal) => {
  animal.speak();
});

// Using the BankAccount class
const account = new BankAccount(50);

console.log(account.getBalance()); // Output: 0

account.deposit(100);
console.log(account.getBalance()); // Output: 100

const success = account.withdraw(50);
console.log(success); // Output: true
console.log(account.getBalance()); // Output: 50

const failure = account.withdraw(200);
console.log(failure); // Output: false
console.log(account.getBalance()); // Output: 50


// The function constructor can take in multiple statements separated by a semicolon. Function expressions require a return statement with the function's name

// Observe that new Function is called. This is so we can call the function we created directly afterwards
const sumOfArray = new Function('const sumArray = (arr) => arr.some((previousValue, currentValue) => previousValue.a === currentValue.c); return sumArray')();

// call the function
console.log(sumOfArray([{a:'b'} , {b:'t'}, {n:'r'}, {f:'d'}]),'aaaa');
// 10

// If you don't call new Function at the point of creation, you can use the Function.call() method to call it
const findLargestNumber = new Function('function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber');

// call the function
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// Function declarations do not require a return statement
const sayHello = new Function('return function (name) { return `Hello, ${name}` }')();

// call the function
sayHello('world');
// Hello, world
