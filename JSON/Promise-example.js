var users = [
    {
        id: 1,
        name: 'Hoang',

    },
    {
        id: 2,
        name: 'Tran'
    },
    {
        id: 3,
        name: 'Manh'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Hello'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Xin chao'
    }
]

// 1.Lấy comments
// 2. Từ comments lấy ra user_id, 
// từ user_id lấy ra user tương ứng

// Fake API

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        }, 1000)
    })
}

function getUsersByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        });
        setTimeout(function(){
            resolve(result);
        }, 1000)
    }, 1000)
        
    
}

// getComments()
//     .then(function(comments){
//         // console.log(comments)
//         var userIds = comments.map(function(){
//             return comments.user_id;
//         });
//         console.log(userIds)
//     })

getUsersByIds([1])
    .then(function(users){
        console.log(users);
    })
