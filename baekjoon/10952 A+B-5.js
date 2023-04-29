const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
const n_arr = input.slice(0,-2);
for (let i = 0; i < (n_arr.length)/2 ; i++) {
    console.log(parseInt(n_arr[[0+2*i]])+parseInt(n_arr[1+2*i])); 
}
