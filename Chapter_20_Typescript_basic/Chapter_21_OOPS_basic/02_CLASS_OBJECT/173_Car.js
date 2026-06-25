class Car {
    //CAB
    //constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;

    }
    //Attribute
    //Behaviour
    drive() {
        console.log("i am driving", this.name);
    }
}
let tesla = new Car("Model S");
tesla.drive();

let BMW = new Car("BMW");
BMW.drive();