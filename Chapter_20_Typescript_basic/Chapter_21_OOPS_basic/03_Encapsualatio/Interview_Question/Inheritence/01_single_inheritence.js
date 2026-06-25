class BasePage {

    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log("Opening the page " + this.pageName);
    }

    close() {
        console.log("Closing the page " + this.pageName);
    }
}

class LoginPage extends BasePage {

    constructor(pageName) {
        super(pageName);
    }

    login(username, password) {
        console.log("Logging in with " + username);
    }
}

// Create object
let loginPage = new LoginPage("Login Page");

loginPage.open();
loginPage.login("Abhishek", "Password123");
loginPage.close();