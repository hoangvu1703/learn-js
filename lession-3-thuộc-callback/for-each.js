// forEach
// cần ôn lại 
// 1. Object prototype
// 2. For in
// 3. hasOwnProperty

Array.prototype.forEach2 = function(callback){
    for (var index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index], index, this); 
        }
    }
}
var courses =new Array(100);
// [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// courses.length = 1000;
// console.log(courses)// nó chỉ chạy 3 lần ko care đến length vì chỉ có 3 phần tử thực sự thôi

// console.log(course);
courses.push('Javascript', 'Ruby')
courses.forEach2(function(course,index,array) {
    console.log(course,index, array)

})

