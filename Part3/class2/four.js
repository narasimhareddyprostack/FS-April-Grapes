class Account {
    acc_Id;
    acc_Name = "";
    acc_Amout = 0
    constructor(id, name, amount) {
        this.acc_Id = id
        this.acc_Name = name
        this.acc_Amout = amount
    }
    open_Account() {
        console.log("Account opened Successfully")
    }
    deposit_Amount(amount) {
        this.acc_Amout = this.acc_Amout + amount
    }
}

let a1 = new Account(101, "Rahul", 5000)
let a2 = new Account(102, "Priyanka", 6000)
console.log(a1)
console.log(a2)

a1.open_Account()
a1.deposit_Amount(4500)
a2.deposit_Amount(10000000)
console.log(a1)
console.log(a2)