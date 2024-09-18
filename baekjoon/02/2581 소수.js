const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const [M, N] = input;
  const primes = getPrimes(N);
  let primeList = [];

  for (let i = M; i <= N; i++) {
    if (primes[i]) {
      primeList.push(i);
    }
  }
  if (primeList.length === 0) {
    return -1;
  }

  const sum = primeList.reduce((acc, cur) => acc + cur, 0);
  const minPrime = primeList[0];
  return `${sum}\n${minPrime}`;
}

function getPrimes(limit) {
  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime;
}

console.log(solve());