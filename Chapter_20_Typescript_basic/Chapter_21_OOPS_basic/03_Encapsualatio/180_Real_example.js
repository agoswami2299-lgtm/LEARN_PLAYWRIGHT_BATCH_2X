class Person {
    // Hide your child

    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getChild1() {
        return this.#child1;
    }

    setChild1(changed_name) {
        this.#child1 = changed_name;
    }
}

let p = new Person("abhishek", "prabhu", "swami");
console.log(p.name);
//console.log(p.#child1); //private couldn,t call

console.log(p.getChild1);