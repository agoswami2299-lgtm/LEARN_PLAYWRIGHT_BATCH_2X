// =====================================================
// Difference Between null and undefined in JavaScript
// =====================================================

/*
    NULL
    ----
    - It is an assignment value that represents "no value" or "empty value"
    - It is intentionally assigned by the programmer
    - It means "nothing" or "object does not exist"
    - typeof null returns "object" (this is a known bug in JavaScript)
    - It is a primitive value

    UNDEFINED
    ---------
    - It means a variable has been declared but not assigned a value
    - It is automatically assigned by JavaScript
    - It means "value does not exist" or "not initialized"
    - typeof undefined returns "undefined"
    - It is also a primitive value

    SIMPLE ANALOGY:
    ===============
    - undefined = "I asked for a box but forgot to put anything in it"
    - null      = "I asked for a box and intentionally left it empty"
*/

// Examples:

// 1. UNDEFINED - variable declared but not assigned
let box1;
console.log(box1);           // undefined
console.log(typeof box1);    // "undefined"

// 2. NULL - intentionally assigned empty value
let box2 = null;
console.log(box2);           // null
console.log(typeof box2);    // "object" (known JS bug!)

// 3. Function with no return gives undefined
function doNothing() {}
console.log(doNothing());    // undefined

// 4. Object property that doesn't exist
let person = { name: "John" };
console.log(person.age);     // undefined

// 5. Clearing a variable (setting to null)
let data = "some data";
data = null;                 // programmer explicitly says "no value"
console.log(data);           // null

// 6. Comparison
console.log(null == undefined);   // true  (loose equality)
console.log(null === undefined);  // false (strict equality - different types)

/*
    QUICK SUMMARY TABLE:
    ====================
    | Feature        | null          | undefined       |
    |----------------|---------------|-----------------|
    | Meaning        | No value      | Not assigned    |
    | Set by         | Programmer    | JavaScript      |
    | typeof         | "object"      | "undefined"     |
    | == comparison  | true          | true            |
    | === comparison | false         | false           |
*/
