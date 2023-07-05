// do/while loop

var i = 0;
do {
    //code
    i++
    console.log(i)
} while ( i <10 );
//vòng lặp này sẽ khác while or for là nó sẽ kiểm tra điều kiện từ lần lặp thứ 2 trở đi có nghĩa là lần lặp đầu tiên nó sẽ không kiểm tra điều kiện nó cứ in ra giá trị đã
// ví dụ
var i = 0
var isSuccess = false;
do {
    i++
    
    console.log('Nạp thẻ lần ' + i)
    // thành công
    if (true){
        isSuccess = true
    }
} while ( !isSuccess && i < 3 );