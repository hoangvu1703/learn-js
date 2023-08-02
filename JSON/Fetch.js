// 1. Front-end: Xây dựng giao diện người dùng
// 2. Back-end: Xây dựng logic xử lý + Cơ sở dữ liệu

// API (URL) -> Application programing interface

// Cổng giao tiếp giữa các PM

// Backend -> API -> Fetch -> JSON/XML
// -> JSON.parse -> Javascript types
// Render ra giao diện với HTML

var postApi = 
    'https://jsonplaceholder.typicode.com/posts'

// stream
fetch(postApi)
    .then(function(response){
        return response.json();
        //JSON.parse: JSON -> Javascript type
    })
    .then(function(posts){
        console.log(posts);
    });
    // .catch(function(err){
    //     console.log(err)
    // })