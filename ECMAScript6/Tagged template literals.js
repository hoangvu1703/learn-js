// function highlight(...rest){
//     console.log(rest);
// }

// var brand = 'F88';
// var course = 'JS';
// highlight`Học lập trình ${course} tại ${brand}!`

// console.log(html);// đây mới chỉ ra undefined


function highlight([first,...strings], ...values){
    // console.log('first:', first)
    // console.log('strings:', strings)
    // console.log('value:', values)
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
    .join('');

}
// HỌc lập trình <span>JS</span> tại <span>F88</span>
var brand = 'F88';
var course = 'JS';
 const html = highlight`Học lập trình ${course} tại ${brand}!`
console.log(html)
