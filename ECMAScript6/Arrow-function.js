// function logger(log){
//     console.log(log)
// }
// logger('Message...')

// const logger =  (log) => {
//     console.log(log)
// }
// logger('Message...')

// const sum = (a, b) => a + b;
// console.log(sum(2 , 2))


// const sum = (a, b) => {
//     return {
//         a: a,
//         b: b
//     };
// };
// console.log(sum(2, 2))

// const sum = (a, b) => ({ a: a, b: b });
// console.log(sum(2, 2))

const course = {
    name: 'Javascript',
    // getName: function(){
    //     return this; //context
    // }
    getName: () => {
        return this // ra undefined
    }
}

console.log(course.getName())

