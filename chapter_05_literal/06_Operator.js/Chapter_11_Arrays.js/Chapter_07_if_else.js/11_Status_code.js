let statusCode = 404;

if (statusCode >= 200 && statusCode <= 299) {
    console.log("Success Response");
}
else if (statusCode >= 300 && statusCode <= 399) {
    console.log("Redirection Response");
}
else if (statusCode >= 400 && statusCode <= 499) {
    console.log("Client Error");
}
else if (statusCode >= 500 && statusCode <= 599) {
    console.log("Server Error");
}
else {
    console.log("Invalid Status Code");
}