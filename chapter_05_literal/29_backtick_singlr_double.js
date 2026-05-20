// 29_backtick_singlr_double.js
// Demonstrates the differences between single quotes, double quotes, and backticks in JavaScript.

// 1. Single quotes and double quotes behave the same for plain strings.
const singleQuoteString = 'Hello from single quotes';
const doubleQuoteString = "Hello from double quotes";
console.log(singleQuoteString);
console.log(doubleQuoteString);

// 2. Escape sequences work the same way with single or double quotes.
const escapedSingle = 'It\'s easy to use single quotes with escaping.';
const escapedDouble = "She said, \"Hello from double quotes\".";
console.log(escapedSingle);
console.log(escapedDouble);

// 3. Backticks (template literals) support interpolation and multiline text.
const name = 'Abhishek';
const greeting = `Hello ${name}, welcome to backticks!`;
console.log(greeting);

const multiline = `This is a template literal.
It can span multiple lines without escaping newlines.`;
console.log(multiline);

// 4. Template literals also allow expressions inside ${ }.
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

// 5. Summary of differences:
// - Single quotes and double quotes are interchangeable for normal strings.
// - Backticks allow embedded expressions and multiline strings.
// - Backticks preserve whitespace and newline characters as written.
