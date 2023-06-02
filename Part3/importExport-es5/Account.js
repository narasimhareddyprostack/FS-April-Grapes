class Account {
    acc_Id;
    acc_Name;
    acc_Loc;
    constructor(id, name, loc) {
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Loc = loc
        console.log("Account class - const")
    }
}
//export default Account  // ES6

module.exports = Account