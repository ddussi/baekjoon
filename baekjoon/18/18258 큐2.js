const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
    constructor() {
        this.data = [];
        this.front = 0;
        this.back = 0;
    }
    push(item) {
        this.data[this.back++] = item;
    }
    pop() {
        return this.size() ? this.data[this.front++] : -1;
    }
    size() {
        return this.back - this.front;
    }
    empty() {
        return this.size() ? 0 : 1;
    }
    frontf() {
        return this.size() ? this.data[this.front] : -1;
    }
    backf() {
        return this.size() ? this.data[this.back - 1] : -1;
    }
}

function solve() {
    let answer = '';
    const queue = new Queue();
    const N = parseInt(input.shift());

    for (let i = 0; i < N; i++) {
        const command = input[i].split(' ');
        if (command[0] === 'push') {
            queue.push(parseInt(command[1]));
        }
        else if (command[0] === 'pop') {
            answer += `${queue.pop()}\n`;
        }
        else if (command[0] === 'size') {
            answer += `${queue.size()}\n`;
        }
        else if (command[0] === 'empty') {
            answer += `${queue.empty()}\n`;
        }
        else if (command[0] === 'front') {
            answer += `${queue.frontf()}\n`;
        }
        else if (command[0] === 'back') {
            answer += `${queue.backf()}\n`;
        }
    }
    return answer.trim();
}

console.log(solve());