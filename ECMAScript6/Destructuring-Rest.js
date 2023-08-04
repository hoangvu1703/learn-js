// var array = ['JS','PHP', 'Ruby'];

// var a = array[0];
// var b = array[1];
// var c = array[2];

// console.log(a, b, c)

// var array = ['JS','PHP', 'Ruby'];
// // var [a, b, c] = array;

// // console.log(a, b, c)
// var [a, b, ...rest] = array;
// console.log(a)
// console.log(rest)

// var course = {
//     name : 'JS',
//     price: 1000,
//     image: 'image-address',
//     // children: {
//     //     name: 'ReactJS'
//     // }
//     // description: 'description value'
// }
// // var {name, price, image} = course;
// // console.log(name, price, image)
// // var {name, ...rest} =course
// // console.log(name);
// // console(rest);
// // var {name: parentName, children: {name: childrenName}} = course
// // console.log(parentName);
// // console.log(childrenName);
// var {name, description = 'default description'} = course;
// console.log(name);
// console.log(description);


function logger (...params){
    console.log(params);
}

console.log(logger(1,2,3,4,5,6,7,8))