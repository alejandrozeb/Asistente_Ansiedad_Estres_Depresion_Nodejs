const bcrypt = require("bcryptjs");
class PasswordBcrypt{
    constructor(password, hashPassword = null){
        this.password = password;
        this.hashPassword = hashPassword;
    }

    encriptar(){
        let salt = bcrypt.genSaltSync(10);
        this.hashPassword = bcrypt.hashSync(this.password, salt);
        return this.hashPassword;
    }

    comparar(){
        let verificaPassword = bcrypt.compareSync(this.password, this.hashPassword);
        return verificaPassword;
    }


}

module.exports = PasswordBcrypt;