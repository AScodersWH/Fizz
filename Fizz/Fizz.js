'use strict'
var studentLine = [];

function count() {
    for (var item = 1; item <= 120; item++) {
        studentLine.push(item);
    }
    console.log(studentLine);
}

count();