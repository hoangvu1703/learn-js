//some: trả về true or false
// khi đưa array rỗng vào nó sẽ ko chạy qua và trả lại kết quả là false

Array.prototype.some2 = function(callback){
    var output = false
    for (var index in this){
        if (this.hasOwnProperty(index)){
            if (callback(this[index], index, this)){
                output=true;
                break;
            };
        }
    }
    return output;
}
var courses = [
    {
        
        name:'Javascript',
        coin: 680,
        isFinish: true,
    },
    {
        
        name:'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        
        name:'Ruby',
        coin: 980,
        isFinish: false,
    }
];

var result =courses.some2(function(course,index, array){
    return course.isFinish;
});
console.log(result)