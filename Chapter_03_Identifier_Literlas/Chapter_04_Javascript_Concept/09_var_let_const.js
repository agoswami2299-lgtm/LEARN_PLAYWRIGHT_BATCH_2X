//Idetifier is is v and variable is also v which holding the data container
var v = 10;
let l = 40;
const c = 3.14;

var browser = "chrome";
var browser = "chrome";//redeclartion is allowed
var browser = "edge";// reassignment is allowed

//for function

var testcase = ["Login", "Logout", "signup"];
for (var i = 0; i < testcase.length; i++) {
    console.log("Running testcase:", testcase[i]);
}
console.log("Loop counter leaked outside:", i);

console.log("Hi");
function say() {
    console.log("Hi from function");
}