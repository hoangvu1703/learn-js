// var promise = new Promise (
//     function(resolve, reject){
//         resolve()
//     }
// )

// Chain

// promise
//     .then(function(){
//         return new Promise (function(resolve){
//             // setTimeout(resolve, 3000);
//             setTimeout(function(){
//                 resolve([1,2,3])
//             }, 3000)
//         })
//     })
//     // .then(function(){
//     //     // console.log(1);
//     //     return 1
//     // })
//     // .then(function(data){
//     //     // console.log(2);
//     //     console.log(data);
//     //     return 2;
//     // }).then(function(data){
//     //     // console.log(3);
//     //     return 3;
//     // })
//     .then(function(data){
//         console.log(data)
//     })
//     // .then(function(courses){
//     //     console.log(courses)
//     // });
//     .catch(function(error){
//         console.log(error)
//     });
//     .finally(function() {
//         console.log('Done!');
//     });

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    });
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000)
    })
    sleep(1000)
    .then(function(){
        console.log(2);
        return sleep(1000)
    })
    sleep(1000)
    .then(function(){
        console.log(3);
        return sleep(1000)
    })
    sleep(1000)
    .then(function(){
        console.log(4);
        return sleep(1000)
    })