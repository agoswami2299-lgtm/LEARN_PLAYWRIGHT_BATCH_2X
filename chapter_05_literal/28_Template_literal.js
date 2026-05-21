//Tempalte literal
let firstname = "Abhishek";
let fullname = 'Hi ${firstname} goswami';
console.log(fullname);

const env = "staging";
const userid = 12385;
const apiurl = 'https://api-${env}.tekion.com/users/${userId}';
console.log(apiurl);

/*let env = "staging";
env = "prod";
const userid = 123585;
const apiurl = 'https://api-${env}.tekion.com/users/${userId}';
console.log(apiurl);*/