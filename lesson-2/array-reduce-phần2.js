var courses = [
    {
        id: 1,
        name:'Javascript',
        coin: 0
    },
    {
        id: 2,
        name:'HTML, CSS',
        coin: 1
    },
    {
        id: 3,
        name:'Ruby',
        coin: 1
    },
    {
        id: 4,
        name:'PHP',
        coin: 400
    },
    {
        id: 5,
        name:'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name:'Ruby',
        coin: 100
    }
];


// var totalCoin = courses.reduce(function(total,course){
//     return total + course.coin;
// },0);//initial value

//có sự khác nhau khi bỏ đi , 0
console.log(totalCoin)
var i = 0;

var totalCoin = courses.reduce(function(total,course){
    i++;

    console.log(i,total, course);

    return total + course.coin;
});//initial value 


console.log (totalCoin)

// cứ khi nào mà không cần dùng đến initial value mà vẫn làm được việc mong muốn thì ko cần truyền

var numbers = [0, 1, 1, 400, 500, 100]
var totalabc = numbers.reduce(function(total,number){
    return total + number;
})

console.log(totalabc)



var htmls = newCourses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
});

console.log(htmls.join(''))



// Bài tập
// FLat - "làm phẳng" mảng từ Depth array - "Màng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

// Lấy ra các khoá học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
];

var newCourses = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses);
}, []);
console.log(newCourses);


