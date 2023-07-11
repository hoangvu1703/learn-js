// array map được sử đụng khi muốn chỉnh sửa element của 1 array


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

function courseHandler(course, index) {
    // console.log(course)
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,

    }
}
// function courseHandler(course, index) {
//     return course.name
// }
var newCourses = courses.map(courseHandler);
console.log(newCourses)