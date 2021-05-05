const bcrypt = require("bcryptjs");
class PasswordBcrypt{
    constructor(password){
        this.password = password;
        this.hashPassword = null;
    }

    encriptar(){
        let salt = bcrypt.genSaltSync(10);
        this.hashPassword = bcrypt.hashSync(this.password, salt);
    }


}

module.exports = PasswordBcrypt;