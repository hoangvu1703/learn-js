// Toán tử 3 ngôi - Ternary Operator

var course = {
    name: 'Javascript',
    coin: 250 //coin: 0
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Miễn phí')
// }
var result = course.coin > 0 ? `${course.coin} Coin` : 'Miễn phí';
console.log(result);

//ví du
var a = 1;
var b = 2;
var c = a > 0 ? a : b;
//trong những trường hợp gán biến đơn giản thì mới sử dụng toán tử 3 ngôi, những trường hợp phức tập ko nên sử dụng