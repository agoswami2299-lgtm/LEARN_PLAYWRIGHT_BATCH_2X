async function runtheE2E() {

    let = await OpenBrowser();
    let = await gotologin();
    let = await entercredentil();
    let = await clicklogin();




    let msg1 = await OpenBrowser();
    console.log("step 1:" + msg1);

    let msg2 = await gotologin();
    console.log("step 2:" + msg2);

    let msg3 = await entercredentil();
    console.log("step 3:" + msg3);

    let msg4 = await clicklogin();
    console.log("step 4:" + msg4);

}
runtheE2E();


