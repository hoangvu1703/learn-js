/** Giới thiệu toán tử
 * 1 toán tử số học - Arithmetic
 * 2 toán tử gán - Assignment dùng dấu =
 * 3 toán tử so sánh - Comparison dùng 2 dấu =
 * 4 toán tử logic - Logical
 

*/ 


/**
 * Toán tử số học
 +      ----> cộng
 -      ----> trừ
 *      ----> nhân
 **     ----> Lũy thừa
 /      ----> chia
 %      ----> Chia lấy số dư
 ++     ----> tăng 1 giá trị số
 --     ----> Giảm 1 giá trị số
 */


// var a = 1;
// var b = 2;
// var c = a * b;

// console.log(c);

// var a = 2;
// a++;
// a++;
// console.log(a);

// toán tử ++ và --
// prefix & postfix (tiền tố và hậu tố)

var a = 6;


// việc 1: cộng 1 cho a, a=a+1 =>a = 7
// việc 2: trả về a sau khi được + 1

// var output = ++a;
// console.log('output', output);

// việc 1: a copy, a copy = 6
// việc 2: cộng 1 cho a, a = a + 1 => a = 7
// việc 3: trả về a copy

var output = a++;
console.log('output', output);
console.log('a' , a);


var number = 6;
var input = number++ + --number ;

// 6 + 6 = 12
console.log('input', input);


var number = 6;
var input = ++number * 2 - number-- * 2 ;

// 7 * 2 - 7 * 2
console.log('input', input);