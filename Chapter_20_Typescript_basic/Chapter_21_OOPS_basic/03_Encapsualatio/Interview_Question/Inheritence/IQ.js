class BaseTest {

    setup() {
        console.log("Base: open browser");
    }

    teardown() {
        console.log("Base: close browser");
    }
}

class UITest extends BaseTest {

    setup() {
        super.setup(); // Call parent setup()
        console.log("UI: maximize window");
    }

    teardown() {
        console.log("UI: take screenshot");
        super.teardown(); // Call parent teardown()
    }
}

// Create object
let test = new UITest();

// Execute methods
test.setup();
test.teardown();