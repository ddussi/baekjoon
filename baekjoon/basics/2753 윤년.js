var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
if (a % 400 === 0) {
    console.log("1");
} else if (a % 100 === 0) {
    console.log("0");
} else if (a % 4 === 0) {
    console.log("1");
} else {
    console.log("0");
}