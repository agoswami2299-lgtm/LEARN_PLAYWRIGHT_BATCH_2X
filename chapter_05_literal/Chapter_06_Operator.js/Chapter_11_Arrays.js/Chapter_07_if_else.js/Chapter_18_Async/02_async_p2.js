function getToken() {
    return Promise.resolve("abc13");

}

async function run() {
    let Token = await getToken();
    console.log(Token);

}
run();
