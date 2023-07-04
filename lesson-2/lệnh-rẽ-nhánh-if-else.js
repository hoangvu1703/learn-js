// câu lệnh rẽ nhanh - If esle
var date = 3;
if (date === 3){
    console.log('hôm nay là thứ 3');
}

if (date === 4){
    console.log('hôm nay là thứ 4');
}

if (date === 5){
    console.log('hôm nay là thứ 5');
}
// cách viết trên chưa đc tối ưu

var date = 3;
if (date === 3){
    console.log('hôm nay là thứ 3');
} else if (date === 4){
    console.log('hôm nay là thứ 4');
} else if (date === 5){
    console.log('hôm nay là thứ 5');
}