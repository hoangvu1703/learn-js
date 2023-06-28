// khai báo biến
var fullName = 'Vũ Huy Hoàng';
var age = 26;
// gọi hàm thông báo
// alert(fullName);
// alert(age);

/**
 * kiểu dữ liệu trong javascript
 * 1. Dữ liệu nguyên thủy - Primitive Data
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 
 * 2. Dữ liệu phức tạp - Complex Data
 * - Function
 * - Object
 * 
 * 
 * 
 */

// Number type
var a = 1;
var b = 2;
var c = 3;



// // string type
var fullName = 'vuhoang';
// console.log(typeof fullName);

// Boolean type
var isSuccess = true;

// console.log(typeof isSuccess);



// Undefined Type
var age;

// console.log(typeof age);


// Null type
var isNull = null; // nothing

// console.log(typeof isNull);


// Symbol
var id = Symbol('id'); //unique
var id2 = Symbol('id'); //unique


// console.log(typeof id);

// Function type
var myFunction = function(){
    alert('chào')
}
myFunction();

// Object Types(oject/array)
var myObject = {
    name: 'vuhoang',
    age: 27, 
    adress: 'Nam Định'
    // myFunction: function (){

    // }
};
// console.log(typeof myObject);

var myArray = [
    'html',
    'css'
]
console.log(myArray);
console.log(typeof myArray);
