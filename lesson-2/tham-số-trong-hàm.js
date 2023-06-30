/**Tham số hàm 
 * 
 * 
 * 1. Tham số
 *      - Định nghĩa
 *      - Kiểu dữ liệu
 *      - Tính private
 *      - 1 tham số
 *      - Nhiều tham số
 * 2. Truyền tham số
 *      - 1 Tham số
 *      - Nhiều tham số
 * 3. Argument? 
 *      - Đối tượng arguments
 *      - Giới thiệu vòng for of
 */

// function writeLog() {
//     console.log(arguments);
// }
// writeLog('đây là tin nhắn', 'log')
function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString +=`${param} -`
    }
    console.log(myString);
}
writeLog('đây là tin nhắn', 'log','log2')