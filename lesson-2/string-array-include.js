// includes method (có sẵn ở trong Array và String) được sử dụng để kiểm tra xem một giá trị có tồn tại trong mảng hay không
// console.log(Array.prototype.includes)
// console.log(String.prototype.includes)

var title = 'Responsive web design';

console.log(title.includes('web design'))

var course = ['Javascript','PHP','Dart'];

//3 + -1
console.log (course.includes('Javascript', -1))