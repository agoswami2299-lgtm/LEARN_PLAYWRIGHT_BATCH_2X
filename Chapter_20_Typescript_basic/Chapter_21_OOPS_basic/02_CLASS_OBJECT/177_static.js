class Student {
    static name = "Playwright2X";
    static mentor_name = "Abhishek Goswami";

    constructor(name_student, age, phoneNo) {
        this.name_student = this.name_student
        this.age = age;
        this.phoneNo = this.phoneNo;
    }
}
const s1 = new Student("Sudhir", 24, "9844752745");
const s2 = new Student("Anup", 28, "9844752745");

console.log(s1.Student_name);
console.log(s2.name_student);

console.log(Student.name);

