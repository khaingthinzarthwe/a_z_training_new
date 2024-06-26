//class
class Car {
    #hp = 150
    color = "Red"
    wheels = 4
    drive() {
        console.log("This car is driving")
        console.log(`Horse Power: ${this.#hp}`);
    }
}
let toyota = new Car;
console.log(toyota.color);
console.log(toyota.wheels);
toyota.drive();

//static property & static method
class Calculator {
    static PI = 3.14
    static add(a, b) {
    return a + b
    }
}
console.log(Calculator.PI);
console.log(Calculator.add(2,3));

//constructor method with constructor name
class Dog1 {
    constructor(name) {
        this.name = name
    }
    run() {
        console.log(`${this.name} is running...`)
    }
}
let dog1 = new Dog1("Bobby")
let dog2 = new Dog1("Rambo")
dog1.run()
dog2.run()

//inheritance
class Animal {
    constructor(name) {
        this.name = name
    }
    run() {
        console.log(`${this.name} is running...`)
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name}: Woof.. woof..`)
    }
}
let milo = new Dog("Milo")
milo.bark()
class Cat extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }
    meow() {
        console.log(`${this.name}: Meow.. meow..`)
    }
}
let cat = new Cat("Shwe War", "Yellow")
cat.meow()