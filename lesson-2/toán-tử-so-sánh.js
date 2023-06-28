/**
 * Toán tử so sánh
 * ==           ===> bằng
 * !=           ===> Không bằng
 * >            ===> lớn hơn
 * <            ===> nhỏ hơn
 * >=           ===> Lớn hơn hoặc bằng
 * <=           ===> Nhỏ hơn hoặc bằng
 * 
 */
var a = 1;
var b = 2;

if (a != b) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai');

}


// toán tử so sánh phần 2
/**
 * === so sánh tuyệt đối hơn == (so sánh cả value và datatype)
 * !==
 * 
 */
var a = 1;
var b = '1';

console.log(a === b);