// 1.Định nghĩa key: value cho object
// 2.Định nghĩa method cho object
// 3.Định nghĩa key cho object dưới dạng biến

// var name = 'JS';
// var price = 1000;

// var course = {
//     // name: name,
//     // price: price
//     name,
//     price,
//     getName: function(){
//         return name;
//     }
// };
// console.log(course.getName)

var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    name: 'JS',
    [fieldName]: 'JS',
    [fieldPrice]: 1000
};

console.log(course)
