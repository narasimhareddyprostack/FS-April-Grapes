class Account {
    min_Bal = 500;
    acc_Bal = 0
    open_Account() {
        console.log("Account Opened successfully")
    }
    get_Min_Bal() {
        return this.min_Bal
    }
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
        console.log("Deposited Successfully")
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}
let a1 = new Account()
let a2 = new Account()
console.log(a1)
a1.open_Account()
a2.open_Account()

a1.deposit_Amount(6000)
a2.deposit_Amount(11000)

console.log(a1)
console.log(a1.get_Bal())
console.log(a2.get_Bal())