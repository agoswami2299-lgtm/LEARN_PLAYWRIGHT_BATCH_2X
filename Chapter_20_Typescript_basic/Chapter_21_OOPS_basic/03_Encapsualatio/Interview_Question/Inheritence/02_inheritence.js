class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking!");
    }
}

// Create object
let dog1 = new Dog("Tommy", "Labrador");

dog1.eat();
dog1.sleep();
dog1.bark();

console.log("Breed:", dog1.breed);