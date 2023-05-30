class Account {
    min_Bal = 500
    open_Account() {
        console.log("account opened successfully")
    }
    deposit_Amout() {
        console.log("Amount Deposited")
    }
    get_Bal() {
        console.log("Server Busy")
    }
    get_St() {
        console.log("Pay 50 Rs")
    }
    withdrawl_Amount() {
        console.log("Insuffient Bal")
    }
    close_Account() {
        console.log("Try next Time")
    }
}

let a1 = new Account()
let a2 = new Account()
a1.open_Account()
a1.deposit_Amout()
a1.get_Bal()
a1.get_St()
a1.withdrawl_Amount()
a1.close_Account()
