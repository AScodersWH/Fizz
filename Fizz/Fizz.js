'use strict'

function count() {
    for (var item = 1; item <= 120; item++) {
        var result = "";
        if(item % 3 == 0) result += "Fizz";
        if(item % 5 == 0) result += "Buzz";
        if(item % 7 == 0) result += "Whizz"
        if(item % 3 == 0 || item % 5 == 0 || item % 7 == 0) console.log(result);
        else console.log(item);
    }
}

count();