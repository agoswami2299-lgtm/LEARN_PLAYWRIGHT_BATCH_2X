// ============================================
// ALL NUMBER TYPES & LITERALS IN JAVASCRIPT
// File: Literal_Number_ALL.js
// ============================================

console.log("=== 1. DECIMAL (BASE 10) INTEGERS ===");
let dec1 = 42;
let dec2 = 0;
let dec3 = -17;
let dec4 = +100;
console.log("  42:", dec1, "| type:", typeof dec1);
console.log("  0:", dec2, "| type:", typeof dec2);
console.log("  -17:", dec3, "| type:", typeof dec3);
console.log("  +100:", dec4, "| type:", typeof dec4);


console.log("\n=== 2. DECIMAL FLOATING-POINT NUMBERS ===");
let float1 = 3.14;
let float2 = .5;       // leading zero is optional
let float3 = 2.;       // trailing decimal is valid (equals 2.0)
let float4 = -0.001;
let float5 = 123.456789;
console.log("  3.14:", float1, "| type:", typeof float1);
console.log("  .5:", float2, "| type:", typeof float2);
console.log("  2.:", float3, "| type:", typeof float3);
console.log("  -0.001:", float4, "| type:", typeof float4);
console.log("  123.456789:", float5, "| type:", typeof float5);


console.log("\n=== 3. EXPONENTIAL (SCIENTIFIC) NOTATION ===");
let exp1 = 1.5e3;      // 1.5 × 10³ = 1500
let exp2 = 1.5e-3;     // 1.5 × 10⁻³ = 0.0015
let exp3 = 3e10;       // 30000000000
let exp4 = 3.14E-2;    // 0.0314 (uppercase E also works)
let exp5 = 1e309;      // Infinity (exceeds max safe range)
console.log("  1.5e3:", exp1);
console.log("  1.5e-3:", exp2);
console.log("  3e10:", exp3);
console.log("  3.14E-2:", exp4);
console.log("  1e309 (overflow):", exp5);


console.log("\n=== 4. HEXADECIMAL (BASE 16) - prefix 0x or 0X ===");
let hex1 = 0xFF;       // 255
let hex2 = 0xA;        // 10
let hex3 = 0x2F;       // 47
let hex4 = 0Xabc;      // 2748 (lowercase digits also work)
let hex5 = 0x1A3F;     // 6719
console.log("  0xFF:", hex1);
console.log("  0xA:", hex2);
console.log("  0x2F:", hex3);
console.log("  0Xabc:", hex4);
console.log("  0x1A3F:", hex5);


console.log("\n=== 5. BINARY (BASE 2) - prefix 0b or 0B ===");
let bin1 = 0b1010;     // 10
let bin2 = 0b1111;     // 15
let bin3 = 0B0;        // 0
let bin4 = 0b11111111; // 255
console.log("  0b1010:", bin1);
console.log("  0b1111:", bin2);
console.log("  0B0:", bin3);
console.log("  0b11111111:", bin4);


console.log("\n=== 6. OCTAL (BASE 8) - prefix 0o or 0O ===");
let oct1 = 0o17;       // 15
let oct2 = 0o10;       // 8
let oct3 = 0O377;      // 255
let oct4 = 0o0;        // 0
console.log("  0o17:", oct1);
console.log("  0o10:", oct2);
console.log("  0O377:", oct3);
console.log("  0o0:", oct4);


console.log("\n=== 7. LEGACY OCTAL (AVOID - NON-STRICT MODE ONLY) ===");
// In non-strict mode, numbers starting with 0 may be interpreted as octal
// let legacyOctal = 017; // This is deprecated and throws error in strict mode
console.log("  Legacy octal (017 = 15) is deprecated.");
console.log("  Always use 0o prefix for octal literals.");


console.log("\n=== 8. UNDERSCORES AS NUMERIC SEPARATORS (ES2021+) ===");
let sep1 = 1_000_000;       // 1000000
let sep2 = 1_000.000_001;   // 1000.000001
let sep3 = 0xFF_FF;         // 65535
let sep4 = 0b1010_0001;     // 161
let sep5 = 0o1_234;         // 668
console.log("  1_000_000:", sep1);
console.log("  1_000.000_001:", sep2);
console.log("  0xFF_FF:", sep3);
console.log("  0b1010_0001:", sep4);
console.log("  0o1_234:", sep5);


console.log("\n=== 9. SPECIAL NUMBER VALUES ===");

// Infinity
console.log("  --- Infinity ---");
let inf1 = Infinity;
let inf2 = -Infinity;
let inf3 = 1 / 0;
let inf4 = Number.POSITIVE_INFINITY;
let inf5 = Number.NEGATIVE_INFINITY;
console.log("  Infinity:", inf1, "| type:", typeof inf1);
console.log("  -Infinity:", inf2);
console.log("  1 / 0:", inf3);
console.log("  Number.POSITIVE_INFINITY:", inf4);
console.log("  Number.NEGATIVE_INFINITY:", inf5);

// NaN (Not a Number)
console.log("  --- NaN ---");
let nan1 = NaN;
let nan2 = 0 / 0;
let nan3 = Number("hello");
let nan4 = Math.sqrt(-1);
console.log("  NaN:", nan1, "| type:", typeof nan1);
console.log("  0 / 0:", nan2);
console.log("  Number('hello'):", nan3);
console.log("  Math.sqrt(-1):", nan4);
console.log("  NaN === NaN:", NaN === NaN); // false! NaN is not equal to itself

// Zero (signed zero)
console.log("  --- Signed Zero ---");
let posZero = +0;
let negZero = -0;
console.log("  +0:", posZero);
console.log("  -0:", negZero);
console.log("  1/+0:", 1/posZero); // Infinity
console.log("  1/-0:", 1/negZero); // -Infinity
console.log("  +0 === -0:", posZero === negZero); // true


console.log("\n=== 10. BIGINT (ARBITRARY PRECISION INTEGERS) ===");
let big1 = 123456789012345678901234567890n; // suffix 'n'
let big2 = BigInt("123456789012345678901234567890");
let big3 = BigInt(0xFF); // 255n
let big4 = 2n ** 64n;    // BigInt supports ** operator
// let invalid = 1.5n;   // SyntaxError: BigInt can't have decimal point
console.log("  123456789012345678901234567890n:", big1);
console.log("  BigInt(string):", big2);
console.log("  BigInt(0xFF):", big3);
console.log("  2n ** 64n:", big4);
console.log("  typeof big1:", typeof big1); // "bigint"
console.log("  big1 === big2:", big1 === big2); // true


console.log("\n=== 11. NUMBER OBJECT (WRAPPER - AVOID IN PRACTICE) ===");
let numObj = new Number(42);
let numPrim = 42;
console.log("  new Number(42):", numObj);
console.log("  typeof new Number(42):", typeof numObj); // "object"
console.log("  typeof 42:", typeof numPrim);            // "number"
console.log("  numObj == numPrim:", numObj == numPrim);   // true (loose equality)
console.log("  numObj === numPrim:", numObj === numPrim); // false (strict equality)


console.log("\n=== 12. NUMBER PROPERTIES ===");
console.log("  Number.MAX_VALUE:", Number.MAX_VALUE);           // ~1.79e308
console.log("  Number.MIN_VALUE:", Number.MIN_VALUE);           // ~5e-324
console.log("  Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("  Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("  Number.EPSILON:", Number.EPSILON);               // ~2.22e-16
console.log("  Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("  Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("  Number.NaN:", Number.NaN);


console.log("\n=== 13. PARSING STRINGS TO NUMBERS ===");
console.log("  Number('42'):", Number('42'));
console.log("  Number('3.14'):", Number('3.14'));
console.log("  Number('0xFF'):", Number('0xFF'));     // 255 (recognizes hex)
console.log("  Number('0b1010'):", Number('0b1010')); // NaN (does NOT recognize binary)
console.log("  Number('  42  '):", Number('  42  ')); // 42 (ignores whitespace)
console.log("  Number('42abc'):", Number('42abc'));   // NaN
console.log("  Number(''):", Number(''));             // 0
console.log("  Number(true):", Number(true));         // 1
console.log("  Number(false):", Number(false));       // 0
console.log("  Number(null):", Number(null));         // 0
console.log("  Number(undefined):", Number(undefined)); // NaN

console.log("\n  parseInt():");
console.log("  parseInt('42'):", parseInt('42'));
console.log("  parseInt('3.14'):", parseInt('3.14'));        // 3 (stops at decimal)
console.log("  parseInt('FF', 16):", parseInt('FF', 16));    // 255
console.log("  parseInt('1010', 2):", parseInt('1010', 2));  // 10
console.log("  parseInt('17', 8):", parseInt('17', 8));      // 15
console.log("  parseInt('42abc'):", parseInt('42abc'));      // 42 (parses until invalid char)
console.log("  parseInt('abc42'):", parseInt('abc42'));      // NaN

console.log("\n  parseFloat():");
console.log("  parseFloat('3.14'):", parseFloat('3.14'));
console.log("  parseFloat('3.14.15'):", parseFloat('3.14.15')); // 3.14 (stops at 2nd dot)
console.log("  parseFloat('42abc'):", parseFloat('42abc'));     // 42
console.log("  parseFloat('1.5e3'):", parseFloat('1.5e3'));     // 1500
console.log("  parseFloat(''):", parseFloat(''));               // NaN


console.log("\n=== 14. NUMBER METHODS ===");
let n = 12345.6789;
console.log("  Original:", n);
console.log("  .toFixed(2):", n.toFixed(2));           // "12345.68"
console.log("  .toFixed(0):", n.toFixed(0));           // "12346"
console.log("  .toPrecision(4):", n.toPrecision(4));   // "1.235e+4"
console.log("  .toPrecision(6):", n.toPrecision(6));   // "12345.7"
console.log("  .toExponential(2):", n.toExponential(2)); // "1.23e+4"

let num2 = 255;
console.log("\n  255 .toString(2):", num2.toString(2));   // "11111111" (binary)
console.log("  255 .toString(8):", num2.toString(8));   // "377" (octal)
console.log("  255 .toString(16):", num2.toString(16)); // "ff" (hex)
console.log("  255 .toString():", num2.toString());     // "255" (decimal)

console.log("\n  Number.isInteger(42):", Number.isInteger(42));
console.log("  Number.isInteger(3.14):", Number.isInteger(3.14));
console.log("  Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("  Number.isNaN('hello'):", Number.isNaN('hello')); // false (global isNaN would be true)
console.log("  Number.isFinite(42):", Number.isFinite(42));
console.log("  Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("  Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));
console.log("  Number.isSafeInteger(9007199254740992):", Number.isSafeInteger(9007199254740992));


console.log("\n=== 15. ARITHMETIC OPERATORS ===");
console.log("  10 + 3 =", 10 + 3);
console.log("  10 - 3 =", 10 - 3);
console.log("  10 * 3 =", 10 * 3);
console.log("  10 / 3 =", 10 / 3);       // 3.333... (always floating point)
console.log("  10 % 3 =", 10 % 3);       // 1 (remainder)
console.log("  10 ** 3 =", 10 ** 3);     // 1000 (exponentiation)
console.log("  Math.floor(10/3) =", Math.floor(10/3)); // 3 (integer division workaround)


console.log("\n=== 16. PRECISION ISSUES (IEEE 754) ===");
console.log("  0.1 + 0.2:", 0.1 + 0.2);
console.log("  0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false!
console.log("  Fixed with toFixed:", (0.1 + 0.2).toFixed(1)); // "0.3"
console.log("  0.3 - 0.1:", 0.3 - 0.1);


console.log("\n=== 17. GLOBAL isNaN vs Number.isNaN ===");
console.log("  isNaN('hello'):", isNaN('hello'));           // true (coerces to number first)
console.log("  Number.isNaN('hello'):", Number.isNaN('hello')); // false (does NOT coerce)
console.log("  isNaN(NaN):", isNaN(NaN));                   // true
console.log("  Number.isNaN(NaN):", Number.isNaN(NaN));     // true


console.log("\n========================================");
console.log("SUMMARY: All JavaScript Number Types/Literals");
console.log("========================================");
console.log("1. Decimal integers: 42, 0, -17");
console.log("2. Floating-point: 3.14, .5, 2.");
console.log("3. Exponential: 1.5e3, 3.14E-2");
console.log("4. Hexadecimal: 0xFF, 0x2F");
console.log("5. Binary: 0b1010, 0B1111");
console.log("6. Octal: 0o17, 0O377");
console.log("7. Numeric separators: 1_000_000");
console.log("8. Special: Infinity, -Infinity, NaN, +0, -0");
console.log("9. BigInt: 123456789012345678901n (arbitrary precision)");
console.log("10. Number object: new Number(42) [avoid in practice]");
