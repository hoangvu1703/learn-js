var listItemNodes = document.querySelectorAll('.box-1 li');

console.log(listItemNodes)

// cách khác

var boxNode = document.querySelector('.box-1');

//công việc 1: sử dụng với `boxNode`
//...
console.log(boxNode)

//công việc 2: sử dụng tới các li elements là con của `.box-1`
console.log(boxNode.querySelectorAll('li'))// cũng co thể sử dụng getElementbyTagName
console.log(boxNode.querySelector('p'))