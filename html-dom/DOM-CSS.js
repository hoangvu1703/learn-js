// DOM style

var boxElement =
    document.querySelector('.box');

// console.log(boxElement.style);

//background-position
// camlCase

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
});

console.log(boxElement.style.width)
// chỉ sử dụng cho Css inline