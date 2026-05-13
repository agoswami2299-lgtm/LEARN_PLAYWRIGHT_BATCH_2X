var a = 10;

//variable is function scoped

console.log(a);

function printhellow() {
    console.log("Hellow testacedmy!");
    var a = 20; //local scope
    console.log(a);

}
printhellow();