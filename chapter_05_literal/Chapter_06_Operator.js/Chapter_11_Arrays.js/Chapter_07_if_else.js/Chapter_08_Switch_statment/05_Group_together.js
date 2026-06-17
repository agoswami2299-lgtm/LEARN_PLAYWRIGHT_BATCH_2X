let browser = "firefox";

switch (browser.toLowerCase()) {

    case "chrome":
        console.log("Launching Google Chrome");
        break;

    case "firefox":
        console.log("Launching Mozilla Firefox");
        break;

    case "edge":
        console.log("Launching Microsoft Edge");
        break;

    case "safari":
        console.log("Launching Safari");
        break;

    case "opera":
        console.log("Launching Opera");
        break;

    default:
        console.log("Browser not supported");
}