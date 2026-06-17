let leapYear = 2004;

if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0)) {
    console.log(leapYear + " is a Leap Year");
} else {
    console.log(leapYear + " is not a Leap Year");
}