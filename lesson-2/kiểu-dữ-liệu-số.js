/**
Kiểu số Number trong Javascript
1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tạo sao?
    - Kiểm tra data type
2. làm việc với Number
    - To string
    - To Fixed
 */
// cách 1
var age = 18
var Pi = 3.14
// cách 2
var otherNumber = new Number(5)
// nên dùng cách 1
// đổi sang kiểu string
console.log(age.toString);
// để làm tròn số về kiểu string
console.log(Pi.toFixed());
// nếu muốn lấy số đằng sau thì thêm giá trị muốn lấy như kiểu muốn lấy 2 số thập phân đằng sau thì thêm số 2