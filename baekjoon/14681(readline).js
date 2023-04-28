const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  
var a = parseInt(input[0]);
var b = parseInt(input[1]);
if (a * b > 0) {
    if (a > 0) {
        console.log("1");
    } else {
        console.log("3");
    }
} else {
    if(a>0){
        console.log("4");
    }else{
        console.log("2");
    }
}
process.exit();
});