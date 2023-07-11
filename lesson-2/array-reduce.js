// array reduce cần sử dụng phương thức này khi muốn nhận 1 giá trị duy nhất
var courses = [
    {
        id: 1,
        name:'Javascript',
        coin: 0
    },
    {
        id: 2,
        name:'HTML, CSS',
        coin: 1
    },
    {
        id: 3,
        name:'Ruby',
        coin: 1
    },
    {
        id: 4,
        name:'PHP',
        coin: 400
    },
    {
        id: 5,
        name:'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name:'Ruby',
        coin: 100
    }
    

];
//biến lưu trữ
// var totalCoin = 0;
// //Lặp qua các phần tử
// for (var course of courses){

//     // Thực hiện việc lưu trữ
//     totalCoin += course.coin;
// }

// console.log(totalCoin)

// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//     // i++;

//     // // console.log(i, accumulator);
//     // console.table({
//     //     'Lượt chạy: ': i,
//     //     'Biến tích trữ: ': accumulator,
//     //     'Giá khoá học: ':currentValue.coin,
//     //     'Tích trữ được: ': total
//     // });
//     // console.log(currentValue)

//     return accumulator + currentValue.coin;
// }

var totalCoin = courses.reduce(function coinHandler(accumulator, currentValue, currentIndex, originArray){
    return accumulator + currentValue.coin;
}, 0)
console.log(totalCoin)