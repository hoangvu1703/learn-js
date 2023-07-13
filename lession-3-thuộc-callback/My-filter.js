// filter
// không lặp qua array trống
Array.prototype.filter2 = function(callback){
    var ourput = [];
    for (var index in this){
        if (this.hasOwnProperty(index)){
            var result = callback(this[index], index, this)
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}
var courses = [
    {
        
        name:'Javascript',
        coin: 680
    },
    {
        
        name:'PHP',
        coin: 400
    },
    {
        
        name:'Ruby',
        coin: 980
    }
];
var filterCourses = courses.filter2(function(course, index, array){
    // console.log(course,index, array);
    return course.coin > 700;
})

console.log(filterCourses) // mảng nhận được sẽ là mảng mới ko phải là mảng cũ