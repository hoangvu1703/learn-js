// Callback?

// Là hàm (function) được truyền qua đối số khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
function myFunction(param){
    // console.log(typeof param);
    if (typeof param === 'function'){
        param('Học lập trình')
    }
}
function myCallback(){
    console.log('Value:',value)
}

// myFunction(123)
myFunction(myCallback)