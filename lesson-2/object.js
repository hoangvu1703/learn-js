// Object trong Javascript
var myInfo = {
    name: 'hoang vu',
    age: 27,

}
// object contructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return ` ${this.firstName} ${this.lastName}`;
    }
}
var author = new User()
var user = new User()

/* object prototype - basic
1. prototype là gì
2. sử dụng khi nào
*/
User.prototype.className = ' '
User.prototype.getClassName = function (){
    return this.className;
}
var user = new User()
var user2 = new User()

console.log(user2.getClassName());