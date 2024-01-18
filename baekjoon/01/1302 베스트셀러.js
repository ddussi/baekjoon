const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
const input = fs.readFileSync(filePath).toString().trim().split('\n');
function solve() {
    const bookCount = Number(input[0]); 
    const bookList = input.slice(1); 
    let bookMap = new Map(); 

    for(let i = 0; i < bookCount; i++){
        if(bookMap.has(bookList[i])) {
            bookMap.set(bookList[i], bookMap.get(bookList[i]) + 1); 
        } else {
            bookMap.set(bookList[i], 1); 
        }
    }

    let bestSellerList = [...bookMap.entries()];
    bestSellerList.sort((a, b) => {
        if(a[1] === b[1]) {
            return a[0] > b[0] ? 1 : -1; 
        }
        return b[1] - a[1]; 
    });

    return bestSellerList[0][0];
}

console.log(solve()); 