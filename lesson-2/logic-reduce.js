// const number = [1, 2, 3, 4, 5]

// const result = numbers.reduce((total, number) => {
//     return total + number
// }, 10)
// const result = numbers.reduce(callback, initialValue)

// console.log(result)
// khi không truyền initialValue thì biến tích trữ sẽ là phần tử đầu tiên của mảng
// khi truyền initialValue thì biến tích trữ sẽ là initialValue


Array.prototype.reduce2 = function (callback, result){
    let i = 0
    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for (let i = 0; i < this.length; i++){
        result = callback(result, this[i], i, this)
    }
    return result
}
const number = [1, 2, 3, 4, 5]

const result = numbers.reduce2((total, number, index, array) => {
    return total + number
},0)
console.log(result)
