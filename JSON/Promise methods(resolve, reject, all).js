// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// Thư viện: output luôn luôn là một promise

// function sleep(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve,ms);
//     });
// }

// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000)
//     })
//     sleep(1000)
//     .then(function(){
//         console.log(2);
//         return new Promise(function(resolve,reject){
//             reject('Co loi');
//         })
//     })
//     sleep(1000)
//     .then(function(){
//         console.log(3);
//         return sleep(1000)
//     })
//     sleep(1000)
//     .then(function(){
//         console.log(4);
//         return sleep(1000)
//     })
//     .catch(function(err){
//         console.log(err);
//     })

// var promise =new Promise(
//     function (resolve, reject){
//         // Logic
//         // resolve('Success');
//         reject('Error')
//     }
// );

// var promise = Promise.resolve('Success!');// luôn luôn resolve
// promise
//     .then(function (result) {
//         console.log('result: ',result)
//     });

//     .catch(function(err){
//         console.log('err: ', err)
//     })

var promise1 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1])
        }, 2000)
    }
)

var promise2 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2, 3])
        }, 5000)
    }
)

Promise.all([promise1, promise2])
    .then(function(result){
        // console.log(result)
        // var result1 = result [0];
        // var result2 = result [1];
        console.log(result1.concat(result2))
    });