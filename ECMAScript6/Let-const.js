// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let : Assignment
// code block: if else, loop, {}, ...
// code thuần : Var
// Babel: Const, let
// KHi định nghĩa biến và không gán lại biến đó thì dùng Const
//Khi cần gán lại giá trị cho biến : Let
if(true) {
    var course = 'Javascript basic'
}
// có thể viết như sau nữa
{
    let course ='Javascript basic'
}


console.log

// khác nhau về hosting
var a =1; //nhắc lên trên đâu và var hỗ trợ hosting
// let và const thì không

// khác nhau của const, let , Var

const a = 1
a = 100
console.log(a)//lỗi