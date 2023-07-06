// vòng lặp lồng nhau - Nested loop

var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
//lấy được các mảng con bên trong

//ví dụ thêm về vòng lặp

//vòng lặp chạy lùi
for (var i = 100;i > 0;i--) {
    console.log(i);
}
//cộng 5 giá trị

for (var i = 0;i <= 100;i +=5) {
    console.log(i);
}