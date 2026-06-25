function apiCall(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name + " - 200 OK");
        }, 2000);
    });
}

async function parallelTest() {
    let [r1, r2, r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Account"),
        apiCall("Support Page")
    ]);

    console.log(r1);
    console.log(r2);
    console.log(r3);
}

parallelTest();