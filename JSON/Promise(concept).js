// 1. Khởi tạo Promise
// 2. Executor

// 1.Pendding
// 2. Fulfilled
// 3.Rejected

var promise = new Promise (
    // Executor
    function(resolve, reject){
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        // Fake call API
        // resolve(123);
        // resolve([
        //     {
        //         id: 1,
        //         name: 'Javascript'
        //     }
        // ])
        reject('co loi')
    }
)

promise
    .then(function(){
        console.log('Successully')
    })
    .catch(function(){
        console.log('Failure')
    })
    .finally(function(){
        console.log('Done')
    })