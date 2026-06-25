class Browser {
    // parameter constructor (arguments)
    constructor(name) {
        this.name = name
        this.open = true;
        console.log(name + " launched");
    }
    startBrowser() {
        console.log("starting the Browser")
    }
    closeBrowser() {
        console.log("starting the Browser")

    }
}
let chrome = new Browser("chrome");
let firefox = new Browser("firefox");

console.log(chrome.isOpen);

