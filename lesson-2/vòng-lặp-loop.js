/* Vòng Lặp - Loop
1. for - Lặp lại với điều kiện đúng
2. for/in - Lặp qua key cửa đối tượng
3. for/of - Lặp qua Value của đối tượng
4. while - lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng


*/


//  Vòng lặp For - For Loop phần 1
for (var i = 1; i <= 1000; i++){
    //code chạy tương ứng số lần vòng for chạy
    console.log(i);
} 

//  Vòng lặp For - For Loop phần 2
// //var i = 1;
// for(;i > 0;i++) {
//     console.log(i)
// } viết như này sẽ bị treo trình duyệt

// var i = 1;

// for(;i <= 1000;) {
//     console.log(i);
// } i mãi mãi là 1, điều kiện luôn luôn thoả mãn vì vậy vòng for luôn chạy và lại gây treo trình duyệt

//  Vòng lặp For - For Loop phần 3

var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python'
];

var arrayLength = myArray.length;

for (var i = 1; i <= arrayLength; i++) {
    console.log(myArray[i])
}
// không nên viết i <= myArray.length vì viết thế này nó sẽ không tối ưu nó sẽ phải chọc vào thuộc tính length để kiểm tra nó sẽ gây chậm hơn. 
// Tách ra như trên nó sẽ chỉ mất 1 lần để lấy ra độ dài