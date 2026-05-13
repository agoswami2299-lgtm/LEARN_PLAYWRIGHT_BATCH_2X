// ============================================================
// Null vs Undefined in JavaScript — Simple Explanation
// ============================================================

// Both `null` and `undefined` represent "no value" or "empty".
// But they are used in different situations.

// ------------------------------------------------------------
// 1. UNDEFINED
// ------------------------------------------------------------
// - "I don't know this value yet" (automatic / default)
// - JavaScript gives `undefined` when a variable is declared
//   but has not been assigned a value.
// - It is the DEFAULT state of "nothing".

let userName;
console.log(userName);        // undefined

// Also, a function with no return statement gives undefined.
function sayHello() {
    // no return
}
console.log(sayHello());      // undefined

// Accessing a missing object property also gives undefined.
let person = { age: 25 };
console.log(person.name);     // undefined

// ------------------------------------------------------------
// 2. NULL
// ------------------------------------------------------------
// - "I know there is no value" (intentional / programmer choice)
// - A developer explicitly sets a variable to `null` to say:
//   "This is empty on purpose."
// - It is an INTENTIONAL state of "nothing".

let phoneNumber = null;
console.log(phoneNumber);     // null

// ------------------------------------------------------------
// Quick Comparison
// ------------------------------------------------------------
// | Situation              | Result    |
// |------------------------|-----------|
// | Variable not assigned  | undefined |
// | Missing object key     | undefined |
// | Function no return     | undefined |
// | Developer sets empty   | null      |

// ------------------------------------------------------------
// Type Difference
// ------------------------------------------------------------
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object"  (this is a famous JS bug!)

// ------------------------------------------------------------
// Equality Check
// ------------------------------------------------------------
console.log(undefined == null);   // true  (loose equality)
console.log(undefined === null);  // false (strict equality — different types)

// ------------------------------------------------------------
// Simple Memory Trick
// ------------------------------------------------------------
// undefined = "I forgot to give it a value"
// null      = "I purposefully emptied it"
