const BASE_URL = "https://example.com";

function formatTestName(name) {
    return name.toUpperCase();
}

console.log(BASE_URL);

let result = formatTestName("login page");

console.log(result);


import { USERNAME, greetUser } from "./01_test_util.js";

console.log(USERNAME);

let message = greetUser(USERNAME);

console.log(message);