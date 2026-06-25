class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() {
        console.log(this.name + "  " + this.status + "" + this.priority);
    }
}
let loginTC = new TestCase("Login Test", "Pass", "P0")
let SinnhUpTC = new TestCase("SingnUp Test", "fail", "P1")

loginTC.display();