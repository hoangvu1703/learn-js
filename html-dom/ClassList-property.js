// ClassList Property

// add
// contains
// remove
// toggle

var boxElement =
    document.querySelector('.box');

// console.log(boxElement.classList)
// console.log(boxElement.classList.value)
// boxElement.classList.add('red');
// console.log(boxElement.classList.contains('red'))
// boxElement.classList.remove('red')

// setTimeout(() => {
//     boxElement.classList.remove('red');
// }, 3000);

// setTimeout(() => {
//     boxElement.classList.toggle('red');
// }, 3000);


setInterval(() => {
    boxElement.classList.toggle('red');
}, 3000);