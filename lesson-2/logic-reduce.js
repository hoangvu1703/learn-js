const number = [1, 2, 3, 4, 5]

// const result = numbers.reduce((total, number) => {
//     return total + number
// }, 10)
const result = numbers.reduce(callback, initialValue)

console.log(result)