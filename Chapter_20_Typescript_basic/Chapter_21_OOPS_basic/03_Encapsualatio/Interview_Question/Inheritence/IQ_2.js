class TestCase {
    execute() {
        console.log("Executing generic test...");
    }
}

class UnitTest extends TestCase {
    execute() {
        console.log("Running Unit Test - checking one functions");
    }
}

class APITest extends TestCase {
    execute() {
        console.log("Running API Test - sending HTTP request");
    }
}

class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E Test - opening browser");
    }
}

// Create objects of different test types
let tests = [
    new UnitTest(),
    new APITest(),
    new E2ETest()
];

// Execute all tests
tests.forEach(function (test) {
    test.execute();
});