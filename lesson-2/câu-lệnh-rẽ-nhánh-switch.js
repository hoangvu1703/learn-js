// Câu lệnh rẽ nhánh
var date = 3;

switch(date) {
    case 3: //nó sẽ sử dụng toán tử 3 dấu = để so sánh
        console.log('hôm nay là thứ 3');
        break;
    case 4:
        console.log('hôm nay là thứ 4');
        break;
    case 5:
        console.log('hôm nay là thứ 5');
        break;//break là thoát
    case 6:
        console.log('hôm nay là thứ 6');
        break;
   
}

var date = 9;

switch (date) {
    case 3:
    case 4:
    case 5:
        console.log('hôm nay là thứ 3,4,5')
    case 6:
        console.log('Hôm nay là thứ 6')
        break;
    default:
        console.log('không biết')
}
// khi nào sử dụng if-esle, khi nào sử dung switch
// khi so sánh, đúng sai thì sử dụng if-else
// if (a > b) {

// }
// khi được cho trước giá trị thì dùng switch-case
// khi mà thấy sử dụng được switch-case nhưng lại thấy số lượng case ít hơn 3 case thì quay lại sử dụng if-else để nhìn code cho dễ nhìn hơn