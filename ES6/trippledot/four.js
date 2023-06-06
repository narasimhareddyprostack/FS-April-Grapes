let emp = {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com"
}
details = {
    email: "rahul@pm.com",
    sal: 1,
    loc: "wayanad"
}
let emp_Details = { ...emp, ...details }
console.log(emp_Details)