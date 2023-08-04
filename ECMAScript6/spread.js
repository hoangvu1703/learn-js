//nhắc thêm về phần còn thiếu của rest
// function logger (a, ...params){
//     console.log(params);
// }

// logger(1,2,3,4)

// function logger({name, price, ...rest}){
//     console.log(name);
//     console.log(price)
// }
// logger({
//     name: 'JS',
//     price: 1000,
//     description: 'Description content'
// })

// function logger([a, b, ...rest]){
//     console.log(a);
//     console.log(b);
//     console.log(rest)
// }
// logger([2,6,12,3,4,4])

// ND chính của spred

// var array1 = ['JS', 'ruby', 'PHP'];

// var array2 = ['ReactJS', 'Dart'];

// var array3 = [...array2, ...array1];
// console.log(array3)

// var object1 = {
//     name: 'JS'
// };
// var object2 = {
//     price: 1000
// };
// var object3 = {
//     ...object1,
//     ...object2
// }
// console.log(object3)

var array = ['JS','PHP','Ruby'];
function logger(...rest){
    for(var i = 0; i< rest.length; i++){
        console.log(rest[i]);
    }
}
logger(...array)
