const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function gcd(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function solve() {
    const rings = input[1].split(" ").map(Number);
    const firstRing = rings[0];
    let result = '';

    for (let i = 1; i < rings.length; i++) {
        let GCD = gcd(firstRing, rings[i]);
        result += `${firstRing / GCD}/${rings[i] / GCD}\n`;
    }

    return result.trim();
}

console.log(solve());