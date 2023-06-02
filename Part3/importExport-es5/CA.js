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