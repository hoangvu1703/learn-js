// Callback hell (xem video tại https://fullstack.edu.vn/learning/javascript-co-ban?id=6cae79cb-896e-4002-94c4-e9258a67e313)
// Pyramid of doom

setTimeout(function(){
    console.log(1); // viec 1
    setTimeout(function(){
        console.log(2);// viec 2
        setTimeout(function(){
            console.log(3);// viec 3
            setTimeout(function(){
                console.log(4);// viec 4
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);