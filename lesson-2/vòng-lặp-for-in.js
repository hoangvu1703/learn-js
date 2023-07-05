// For/in loop
var myInfo = {
    name: 'Hoàng Vũ',
    age: 27,
    address: 'Nam Vân,NĐ'
};
for(var key in myInfo) {
    console.log(myInfo[key]);
}

//array
var languages = [
    'Javascript',
    'PHP',
    'RUby',
];
for(var key in languages) {
    console.log(key);
}

// string
var myString = 'Javascript';
// console.log(myString[0]) //Lấy được chứ J đầu tiên
for(var key in myString) {
    console.log(myString[key]); //In ra từng chữ cái
}