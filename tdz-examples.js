// ============================================
// TEMPORAL DEAD ZONE (TDZ) IN JAVASCRIPT
// ============================================
// The TDZ is the period between entering a scope and 
// the actual declaration of a let/const/class variable.
// Accessing the variable during TDZ throws a ReferenceError.


// ============================================
// EXAMPLE 1: Basic TDZ with 'let'
// ============================================

console.log("=== EXAMPLE 1: Basic TDZ with 'let' ===");

function basicLetTDZ() {
    // TDZ starts here (entering scope)
    
    console.log("  Before declaration - variable is in TDZ");
    
    // console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
    
    let myVar = 42; // TDZ ends here
    
    console.log("  After declaration:", myVar); // 42
}

basicLetTDZ();


// ============================================
// EXAMPLE 2: Basic TDZ with 'const'
// ============================================

console.log("\n=== EXAMPLE 2: Basic TDZ with 'const' ===");

function basicConstTDZ() {
    // TDZ starts
    
    // console.log(PI); // ReferenceError: Cannot access 'PI' before initialization
    
    const PI = 3.14159; // TDZ ends
    
    console.log("  PI value:", PI);
}

basicConstTDZ();


// ============================================
// EXAMPLE 3: TDZ vs Hoisting with 'var'
// ============================================

console.log("\n=== EXAMPLE 3: TDZ vs Hoisting with 'var' ===");

function compareHoisting() {
    console.log("  var before declaration:", varVariable); // undefined (hoisted, no TDZ)
    // console.log("  let before declaration:", letVariable); // ReferenceError (TDZ)
    
    var varVariable = "I am var";
    let letVariable = "I am let";
    
    console.log("  var after declaration:", varVariable);
    console.log("  let after declaration:", letVariable);
}

compareHoisting();


// ============================================
// EXAMPLE 4: typeof behavior in TDZ
// ============================================

console.log("\n=== EXAMPLE 4: typeof behavior in TDZ ===");

function typeofInTDZ() {
    // Normally, typeof on undeclared variable returns "undefined"
    console.log("  typeof undeclaredVar:", typeof undeclaredVar); // "undefined" - no error!
    
    // But typeof on a variable in TDZ throws ReferenceError
    // console.log("  typeof tdzVar:", typeof tdzVar); // ReferenceError!
    
    let tdzVar = "I exist now";
    console.log("  typeof tdzVar after declaration:", typeof tdzVar); // "string"
}

typeofInTDZ();


// ============================================
// EXAMPLE 5: TDZ with temporal (time-based) nature
// ============================================

console.log("\n=== EXAMPLE 5: TDZ with temporal (time-based) nature ===");

function temporalNature() {
    // Accessing variable before its declaration line
    // is what matters, not the physical position in code
    
    function inner() {
        console.log("  Inside inner():", value); // This works because inner() is called after declaration
    }
    
    // inner(); // If called here -> ReferenceError (still in TDZ)
    
    let value = "I am declared";
    
    inner(); // Called after declaration - works fine!
}

temporalNature();


// ============================================
// EXAMPLE 6: TDZ with parameter default values
// ============================================

console.log("\n=== EXAMPLE 6: TDZ with parameter default values ===");

function defaultParamsTDZ(a = b, b) { // 'b' is in TDZ when evaluating 'a = b'
    console.log("  a:", a, "b:", b);
}

// defaultParamsTDZ(undefined, 2); // ReferenceError: Cannot access 'b' before initialization

defaultParamsTDZ(1, 2); // Works: a=1, b=2


// ============================================
// EXAMPLE 7: TDZ with parameter default values (self-reference)
// ============================================

console.log("\n=== EXAMPLE 7: TDZ self-reference in defaults ===");

function selfReferenceTDZ(a = a) { // 'a' is in TDZ when evaluating default
    console.log("  a:", a);
}

// selfReferenceTDZ(); // ReferenceError: Cannot access 'a' before initialization
selfReferenceTDZ(42); // Works: a=42


// ============================================
// EXAMPLE 8: TDZ inside loops
// ============================================

console.log("\n=== EXAMPLE 8: TDZ inside loops ===");

function loopTDZ() {
    for (let i = 0; i < 3; i++) {
        // Each iteration has its own scope and TDZ
        let insideLoop = `Iteration ${i}`;
        console.log("  ", insideLoop);
    }
    
    // console.log(insideLoop); // ReferenceError: insideLoop is not defined (out of scope)
}

loopTDZ();


// ============================================
// EXAMPLE 9: TDZ with block scopes
// ============================================

console.log("\n=== EXAMPLE 9: TDZ with block scopes ===");

function blockScopeTDZ() {
    let outer = "outer";
    
    {
        // TDZ for 'inner' starts here
        // console.log(inner); // ReferenceError (TDZ)
        // console.log(outer); // Works fine - outer is accessible
        
        let inner = "inner"; // TDZ ends
        console.log("  Inside block:", inner);
    }
    
    // console.log(inner); // ReferenceError: inner is not defined (out of block scope)
}

blockScopeTDZ();


// ============================================
// EXAMPLE 10: TDZ with 'class' declarations
// ============================================

console.log("\n=== EXAMPLE 10: TDZ with 'class' declarations ===");

function classTDZ() {
    // console.log(MyClass); // ReferenceError: Cannot access 'MyClass' before initialization
    
    class MyClass {
        constructor() {
            this.name = "MyClass";
        }
    }
    
    console.log("  Class instantiated:", new MyClass().name);
}

classTDZ();


// ============================================
// EXAMPLE 11: TDZ in switch statements
// ============================================

console.log("\n=== EXAMPLE 11: TDZ in switch statements ===");

function switchTDZ(value) {
    switch (value) {
        case 1:
            let result = "one";
            console.log("  Case 1:", result);
            break;
        case 2:
            // This entire switch block shares the same scope!
            // let result = "two"; // SyntaxError: Identifier 'result' has already been declared
            console.log("  Case 2: would cause TDZ/scope issues if we declare again");
            break;
        default:
            console.log("  Default case");
    }
}

switchTDZ(1);
switchTDZ(2);


// ============================================
// EXAMPLE 12: Practical TDZ - preventing bugs
// ============================================

console.log("\n=== EXAMPLE 12: TDZ prevents common hoisting bugs ===");

function safeCounter() {
    // With var, this pattern was problematic:
    // var count = count || 0; // undefined || 0 -> 0 (confusing)
    
    // With let, TDZ catches logical errors:
    // let count = count || 0; // ReferenceError: Cannot access 'count' before initialization
    
    let count = 0; // Proper initialization
    count++;
    
    console.log("  Counter:", count);
}

safeCounter();


// ============================================
// EXAMPLE 13: TDZ with destructuring
// ============================================

console.log("\n=== EXAMPLE 13: TDZ with destructuring ===");

function destructuringTDZ() {
    let settings = { a: 1, b: 2 };
    
    // Destructuring creates bindings that can have TDZ issues
    let { a, b } = settings;
    console.log("  Destructured:", a, b);
    
    // Complex destructuring with defaults
    let config = { timeout: undefined };
    let { timeout = 5000, retries = 3 } = config;
    console.log("  With defaults - timeout:", timeout, "retries:", retries);
}

destructuringTDZ();


// ============================================
// EXAMPLE 14: TDZ in try-catch blocks
// ============================================

console.log("\n=== EXAMPLE 14: TDZ in try-catch blocks ===");

function tryCatchTDZ() {
    try {
        // TDZ starts
        throw new Error("Something went wrong");
    } catch (error) {
        // 'error' is scoped to the catch block
        console.log("  Caught error:", error.message);
        
        let recovery = "recovered";
        console.log("  Status:", recovery);
    }
    
    // console.log(error); // ReferenceError: error is not defined
    // console.log(recovery); // ReferenceError: recovery is not defined
}

tryCatchTDZ();


// ============================================
// SUMMARY
// ============================================

console.log("\n=== SUMMARY ===");
console.log("Key TDZ Rules:");
console.log("1. let/const/class declarations are hoisted but NOT initialized");
console.log("2. Accessing the variable before its declaration line throws ReferenceError");
console.log("3. typeof on a TDZ variable throws ReferenceError (unlike undeclared vars)");
console.log("4. Each scope (block, function, loop iteration) has its own TDZ");
console.log("5. TDZ ends at the exact line where the variable is declared and initialized");
