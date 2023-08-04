// ĐỊnh nghĩa ra giá trị mặc định cho những tham số
// function logger(log){
//     if (typeof log === 'undefined'){{
//         log = 'Gia tri mac dinh';
//     }}
//     console.log(log);
// }
// logger(null);

// function logger (log = 'Gia tri mac dinh!'){
//     console.log(log)
// }

// logger(undefined)


// function logger(log, isAlert =false, type = 'log'){
//     if (isAlert) return alert(log);
//     console.log(log);
// }
// logger('Message...', true)

function logger(log, type = 'log'){
    console[type](log);
}
logger('Message...')
// logger('Message...', 'error');