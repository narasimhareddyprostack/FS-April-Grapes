let emp = {
    id: 101,
    name: "Rahul",
    sal: 45000,
    email: "Rahul@gmail.com",
    loc: "Wayanad"
}

for (prop in emp) {
    //console.log(prop)
    //console.log(emp.prop)
    console.log(prop, ":", emp[prop])
}