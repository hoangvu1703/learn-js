// every trả lại kết quả đúng hoặc sai (chỉ cần có 1 đk sai là nó sẽ trả về là sai)

Array.prototype.every2 = function(callback){
    var output =true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(!result){
                output =false;
                break;
            }
        }
    }
    return output
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

var result =courses.every2(function(course,index, array){
    return course.isFinish;
});

console.log(result)