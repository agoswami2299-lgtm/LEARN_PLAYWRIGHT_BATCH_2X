class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

// Create objects
let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
let cartPage = new CartPage();

// Call verify methods
loginPage.verify();
console.log("----------------------");

dashboardPage.verify();
console.log("----------------------");

cartPage.verify();