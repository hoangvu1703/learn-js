// For/of loop
// với mảng
var languages = [
    'Javascript',
    'PHP',
    'RUby',
];
for(var value of languages) {
    console.log(value);
}// đây là cách đơn giản nhất để lấy được ra từng phần tử của mảng

// với chuỗi
var myString = 'Javascript';
for(var value in myString) {
    console.log(value);
}

// với object
// var myInfo = {
//     name: 'Hoàng Vũ',
//     age: 27,
//     address: 'Nam Vân,NĐ'
// };// trong trường hợp này nó sẽ baos lỗi là myInfo không phải là đối tượng có thể lặp
var myInfo = {
    name: 'Hoàng Vũ',
    age: 27,
    address: 'Nam Vân,NĐ'
}
// console.log(Object.keys(myInfo))// làm cách này thì nó sẽ trả về 1 mảng các key
for (var value of Object.keys(myInfo)){
    console.log(value)
}

