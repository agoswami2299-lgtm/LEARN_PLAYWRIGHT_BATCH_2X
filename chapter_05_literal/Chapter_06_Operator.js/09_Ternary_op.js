// Tenay operator is followed by condition ? and true and false
let age = 18;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//
let temp = 35;
let feel = (temp >= 40) ? "very Hot" :
    (temp >= 30) ? "hot" :
        (temp >= 20) ? "hot" :
            (temp >= 10) ? "cool" : "Cold";
console.log("7. Temerature:", temp, "|Feel:", feel);