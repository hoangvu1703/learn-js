// DOM events

// 1. Input / select
// 2. Key up / down

// var inputValue;

var inputElement = 
    document.querySelector('input[type="text"]')

// // inputElement.onchange = function(e) {
// //     console.log(e.target.value)
// // }

// // inputElement.oninput = function(e) {
// //     // console.log(e.target.value)
// //     // inputValue = e.target.value
// //     console.log(e.target.checked)
// // }

// // inputElement.onkeydown = function(e) {
// //     console.log(e.target.value);
// // }

// // inputElement.onkeyup = function(e) {
// //     console.log(e.target.value);
// // }

inputElement.onkeyup = function(e) {
    console.log(e.which);
    switch(e.which){
        case 27:
            console.log('Exit');
            break;
    }
}

// document.onkeypress = function(e){
//     console.log(e.which);
//     switch(e.which){
//         case 27:
//             console.log('Exit');
//             break;
//         case 13:
//             console.log('SEND CHAT');
//             break;
//     }
// }