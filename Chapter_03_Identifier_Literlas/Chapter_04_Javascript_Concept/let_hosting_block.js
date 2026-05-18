if (true) {
    // TDZ IS FOR BLOCK SCOPED "X" START HERE
    // console.log(X) // ReferenceError (NOT GLOBAL)
    let X = "BLOCK"; // tdz end
    console.log(X); // BLOCK

}

// console.log(x); // ReferenceError: x is not defined (out of block scope)
