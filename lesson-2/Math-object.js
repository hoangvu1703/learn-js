/*

Math object

- Math.PI 
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()

*/
console.log(Math.PI); // trả về số pi

console.log(Math.round(1.3))// làm tròn số

console.log(Math.abs(-4)) // số tuyệt đối

console.log(Math.ceil(4.1)) // làm tròn trên

console.log(Math.floor(4.999)) // làm tròn dưới

console.log(Math.random()) // trả về số thập phân nhỏ hơn 1
//ví dụ
var random = Math.floor(Math.random()*5)

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];

console.log(bonus[random])

var random = Math.floor(Math.random()*100)
if (random < 50) {
    console.log ('cường hoá thành công!');
}

console.log(Math.min(-100,1,90,50,40))// trả về số nhỏ nhất với max thì trả về số lớn nhất