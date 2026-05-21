function categorizeStatusCode(code) {
    if (code >= 200 && code <= 299) {
        return "Success";
    } else if (code >= 300 && code <= 399) {
        return "Redirection";
    } else if (code >= 400 && code <= 499) {
        return "Client Error";
    } else if (code >= 500 && code <= 599) {
        return "Server Error";
    } else {
        return "Invalid";
    }
}

// Main execution
const args = process.argv.slice(2);
const code = Number(args[0]);

if (Number.isNaN(code)) {
    console.log("Output: Invalid");
} else {
    console.log(`Output: ${categorizeStatusCode(code)}`);
}
