// 1. Event listener --> OK
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local Storage
// 6. Session Storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance

// JSON là gì? 
// 1 Là một định dạng dữ liệu (chuỗi)
// 2 viết tắt của JavaScript Object Notation
// 3. JSOn: Number, Boolean, Null, Array, Object
// Phải sử dụng dấu nháy kép ""

// Mã Hoá / Giải mã
// Encode / decode
// Stringify / Parse

// var json = 'null'
// var json = '["Javascript","PHP"]';
// var json = '{"name":"Hoang Vu","age":18}'

// var a = 'true';

// console.log(JSON.parse(a))

// console.log(JSON.stringify(null))
// console.log(JSON.stringify([
//     'Javascript',
//     'PHP'
// ]))

console.log(JSON.stringify({
    name:'Hoang Vu',
    age: 27,
    test: function(){}
}))