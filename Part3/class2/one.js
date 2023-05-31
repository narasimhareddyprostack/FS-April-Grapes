class Account {
    min_Ball = 500
    open_Account() {
        console.log("Account Opened Successfully!")
    }
}


let a1 = new Account()
let a2 = new Account()

console.log(a1)  //Account {min_Bal:500}
console.log(a2)  //Account {min_Bal:500}
console.log(a1.min_Ball)
console.log(a2.min_Ball)

a1.open_Account()
a2.open_Account()