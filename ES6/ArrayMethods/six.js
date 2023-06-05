let prices = [99, 199, 299, 399]

/* let new_Prices = []

for (let i = 0; i <= prices.length - 1; i++) {
    //console.log(prices[i])
    new_Prices.push(prices[i])
}
 */
let new_Prices = prices.map((price) => { return price + 1 })
console.log(new_Prices)