//HTML DOM

// 1. Element
// 2. Attribute
// 3. Text 

// Element: get qua :ID, class, tag, CSS selector, HTML collection

// qua ID trả về thằng luôn đối tượng

// var headingNode = document.getElementById('heading')
// // console.log(headingNode);
// console.log({
//     element: headingNode
// });
//1 trang web chỉ có 1 id có tên duy nhất


// qua className trả về 1 HTML collection giống những cái mảng có nhiều đối tượng ở bên trong
// var headingNode = document.getElementsByClassName('heading')
// console.log(headingNode)


// qua Tag Name tương tự classname chỉ khác là cái này select qua tên thẻ
// var headingNode = document.getElementsByTagName('h1')
// console.log(headingNode)

// qua CSS selector chỉ thành 2 : 1 là lấy thẳng luôn cái đối tượng math trên 1 class truyền vào qua cái css selector bị truyền vào
// 2 là querySelectorAll là select tất cả các đối tượng có cái class trên cái class mà truyền vào

var headingNode = document.querySelector('.heading')
console.log(headingNode)
