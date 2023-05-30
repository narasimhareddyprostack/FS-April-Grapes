let marks = [35, 36, 37, 38, 39, 40]

//print total marks
let total = 0
for (let i = 0; i <= marks.length - 1; i++) {
    total = total + marks[i]
}

/* let total = 0
for (mark of marks) {
    total = total + mark
} */

console.log(total)