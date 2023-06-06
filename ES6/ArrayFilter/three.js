let cars = [{ model: "Swift", color: "White", brand: "Maruthi", price: 800000 },
{ model: "i20", color: "red", brand: "Hyundai", price: 1200000 },
{ model: "evoque", color: "White", brand: "RR", price: 5800000 },
{ model: "Thar", color: "gold", brand: "Mahidra", price: 1400000 },
{ model: "supra", color: "sky", brand: "Dontknow", price: 9800000 },
{ model: "innova", color: "black", brand: "Toyota", price: 1800000 },
{ model: "fortuner", color: "White", brand: "Toyota", price: 3800000 },
{ model: "x1", color: "blue", brand: "BMW", price: 4800000 },
{ model: "alto800", color: "yellow", brand: "Maruthi", price: 300000 }]

//print only whie color cars -without filter method
//print car price below 200000 - without filter
let new_Cars = cars.filter((car) => {
    return car.price < 2000000
})
/* for (car of cars) {
    if (car.color == "White") {
        new_Cars.push(car)
    }
}*/
console.log(new_Cars)

