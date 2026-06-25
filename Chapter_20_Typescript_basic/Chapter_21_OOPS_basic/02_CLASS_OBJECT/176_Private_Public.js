//private field (#) -Hidden field
//public field

class credentials {
    #apikey; //Private varibale are not use outside.
    user;

    constructor(user, key) {
        this.user = user //public
        this.#apikey = key;
    }
    //ustom made function by us
    AbhishekgetauthorHeader() {
        return "Bearer" + this.#apikey;
    }
}
let cred = new credentials("admin", "secret_keys_123");
console.log(cred.user);

const token = cred.AbhishekgetauthorHeader();
console.log(token);
