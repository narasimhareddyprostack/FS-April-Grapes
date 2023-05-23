let product = {
    pId: 101,
    name: "Iphone 13"
}

let keys = Object.keys(product)
console.log(keys)
console.log(keys.length)
console.log(keys.length > 0)
if (Object.keys(product).length > 0) {
    console.log("Not Empty object")
}
else {
    console.log("Empty Object")
}
//console.log(product.length)