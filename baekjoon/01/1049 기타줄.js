const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const [N, M] = input[0].split(' ').map(Number);
    let packageMin = 1000, singleMin = 1000;

    for (let i = 1; i <= M; i++) {
        const [packagePrice, singlePrice] = input[i].split(' ').map(Number);
        packageMin = Math.min(packageMin, packagePrice, singlePrice * 6);
        singleMin = Math.min(singleMin, singlePrice);
    }

    const totalPackage = Math.floor(N / 6) * packageMin;
    const remain = (N % 6) * singleMin;
    const remainPackage = (N % 6 > 0) ? packageMin : 0;

    return Math.min(totalPackage + remain, totalPackage + remainPackage);
}

console.log(solve());