let ids = [101, 102, 103, 104, 105]
let new_Ids = ids //array aliasing 

new_Ids[0] = 101.5

console.log(ids)
console.log(new_Ids)
