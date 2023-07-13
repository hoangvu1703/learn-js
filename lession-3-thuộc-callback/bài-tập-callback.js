// forrEach2 , reduce2, find2, filter2
Array.prototype.reduce2 = function(callback, result) {
    var i = 0
    if(arguments.length < 2){
        i = 1
        result = this[0]
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i , this)
    }
    return result
}

Array.prototype.map2 = function (callback) {
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index);
            output.push(result)
        }
    }
    return output
}

Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index))
            callback(this[index], index, this)
    }
}

Array.prototype.filter2 = function (callback) {
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this))
                output.push(this[index])
        }
    }
    return output
}

Array.prototype.find2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this))
                return this[index]
        }
    }
}

Array.prototype.every2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index], index, this))
                return false
        }
    }
    return true
}

Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this))
                return true
        }
    }
    return false
}

var fruitArray = ["Apple", "Banana", "Orange", "Mango", "Grapes" , "Banana"];
// fruitArray.length = 10

var fruits_map = fruitArray.map2(function (fruit) {
    return fruit + ' ok'
})
console.log('map2: ', fruits_map)