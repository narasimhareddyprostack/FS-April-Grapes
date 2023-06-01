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

class SA extends Account {
    min_Bal = 500
    acc_Bal = 0
    constructor(id, name, loc, amount) {
        super(id, name, loc);
        this.acc_Bal = amount
    }
    cal_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}
let sa1 = new SA(101, "Rahul", "Wayanad", 25000)
//console.log(sa1)
let bal = sa1.cal_Bal()
console.log(bal)
class CA extends Account {
    min_Bal = 20000
    acc_Amount = 0
    constructor(id, name, loc, amount) {
        super(id, name, loc)
        this.acc_Amount = amount
    }
    cal_Bal() {
        return this.acc_Amount - this.min_Bal
    }
}
let ca1 = new CA(201, "Priyanka", "New Delhi", 500000);
//console.log(ca1)
console.log(ca1.cal_Bal())