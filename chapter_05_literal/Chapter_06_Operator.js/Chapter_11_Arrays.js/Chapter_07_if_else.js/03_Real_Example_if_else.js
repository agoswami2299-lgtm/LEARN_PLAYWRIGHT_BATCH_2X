let isLoggedIn = false;
let userrole = "editor";

if (isLoggedIn) {

    if (userrole === "admin") {
        console.log("User can do all the things.");
    }
    else if (userrole === "editor") {
        console.log("User can edit content.");
    }
    else if (userrole === "viewer") {
        console.log("Welcome viewer. Controlled access.");
    }
    else {
        console.log("No idea, you may be a guest!");
    }

} else {
    console.log("Please log in first.");
}