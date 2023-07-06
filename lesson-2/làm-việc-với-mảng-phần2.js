/* 
    Array methods:
        forEach()
        every() // giúp kiểm tra tất cả các phần tử thuộc 1 mảng phải thoả mãn 1 điều kiện gì đó, trả về kiểu Boolean
        some() // ngược lại với every chỉ cần 1 cái đúng là được
        find() // dùng để tìm kiếm, chỉ trả về 1 giá trị
        Filter()// giống find nhưng trả về tất cả phần tử thoả mãn
        map()
        reduce()
*/
var courses = [
    {
        id: 1,
        name:'Javascript',
        coin: 250
    },
    {
        id: 2,
        name:'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name:'Ruby',
        coin: 0
    },
    {
        id: 4,
        name:'PHP',
        coin: 400
    },
    {
        id: 5,
        name:'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name:'Ruby',
        coin: 100
    }
    

];

// // forEach
// courses.forEach(function(course,index){
//     console.log(index, course)
// });//tham số truyền vào là 1 function. Khái niệm này được gọi là call back

// //every
// var isFree = courses.every(function(course,index){
//     return course.coin === 0;
// })
// console.log(isFree);

// //some
// var isFree = courses.some(function(course,index){
//     return course.coin === 0;
// })
// console.log(isFree);

// //find
// var course = courses.find(function(course,index){
//     return course.name === 'Ruby';
// })
// console.log(isFree);

//filter
var course = courses.filter(function(course,index){
    return course.name === 'Ruby';
})
console.log(isFree);
