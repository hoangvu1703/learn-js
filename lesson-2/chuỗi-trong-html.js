/**Chuỗi trong javascript
 * 
 * 1. Tạo chuỗi
 * -    Các cách tạo chuỗi
 * -    Nên dùng cách nào? Lý do?
 * -    Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 * 
 */

// 1:
// có 2 cách tạo chuỗi
// cách 1: sử dụng 1 cặp nháy đơn hoặc nháy kép chứa một chuỗi
var fullName = 'Hoang Vu';
// cách 2 sử dụng đối tượng tên là String được javascript tạo sẵn kết hợp từ khóa "new" để tạo ra 1 chuỗi
var fullName = new String ('Hoang Vu')
// nên dùng cách 1 vì cách số 1 sẽ đỡ dài dòng hơn

// 2: sử dụng dấu  \
var fullName = 'Hoang Vu \'17031996\''
console.log(fullName);
// nếu muốn in dấu \ heeijn lên thì dùng 2 dấu \ cạnh nhau

// 3 xem độ dài chuỗi đùng thêm .length
var fullName = 'Hoang Vu';
console.log(fullName.length);

// 4: Lời khuyên nên sử dụng tối đa 80 ký tự trên 1 dòng. Có thể viết chuỗi xuống dòng dưới hoặc tách chuỗi sử dụng dấu + để nối chuỗi
// 5: sử dụng dấu ` và dấu $
var firstName = 'hoang'
var lastName = 'vu'
console.log(`tôi là: ${firstName} ${lastName}`);

/* Làm việc với chuỗi

*/
var myString = 'Học JS tại nhà'

// 1. Length
console.log(myString.length);

// 2. Find index
console.log(myString.indexOf('JS'));
// nếu không tìm được nó sẽ trả về kết quả -1
// nếu có nhiều từ khóa giống nhau indexOf sẽ trả về vị trí đầu tiên trong chuỗi lớn còn chuỗi đằng sau sẽ không trả về. Nếu muốn tìm 
// chư cuối cùng trong chuỗi thì dùng "lastIndexOf"
console.log(myString.search('JS'));

// 3. Cut String

console.log(myString.slice(4, 6));
// cắt ở đâu thì phải điền tham số bắt đầu cắt nằm ở số mấy vào và cắt đến chỗ nào thì phải điền tham số end vào
// nếu muốn lấy hết sau vị trí 4 thì chỉ cần ghi từ vị trí cắt
// cắt từ phải sang trái thì đếm từ 0 đến -1,-2,..


// 4. Replace
console.log(myString.replace('JS', 'Javascript'));
//  nếu muốn thay hết từ JS nếu có nhiều từ JS trong chuỗi thì sử dụng biểu thức chính quy 
console.log(myString.replace(/JS/g, 'Javascript')); 

// 5. Convert to upper case chuyển đổi thành chữ hoa
console.log(myString.toLocaleUpperCase());


// 6. Convert to lower case
console.log(myString.toLocaleLowerCase);

// 7. Trim: hữu ích khi xử lý dữ liệu của ng dùng
console.log(myString.trim());
// để kiểm tra thì thêm .length


// 8. Split
var languages = 'Javascript, PHP, Ruby'
console.log(languages.split(', '));
// nếu ko có từ PHP, Ruby chỉ có javascript muốn tách hết từ ra ta chỉ cần để 1 chuỗi rỗng

// 9. Get a character by index
const myString2 = 'Hoang Vu'
console.log(myString2.charAt());