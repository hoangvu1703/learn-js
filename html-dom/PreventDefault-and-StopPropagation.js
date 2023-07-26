// DOM events

// 1. preventDefault
// 2. stopPropagation

var aElements = document.links;
for(var i = 0; i < aElements.length; ++i){
    aElements[i].onclick = function(e){
        // console.log(e.target.href)
        if (!e.target.href.startsWith('google.com')){
            e.preventDefault();
        }
    }
}

document.querySelector('div').onclick = 
    function(){
        console.log('DIV')
    }

document.querySelector('button').onclick =
    function (e){
        e.stopPropagation();
        console.log('Click me!')
    }