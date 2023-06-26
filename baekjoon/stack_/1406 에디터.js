// 그냥 처음 푼 내용 => 시간 초과로 실패
/*
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    const str = input[0];
    const ch = input.slice(2);
    const list = [];
    const answer = [];
    for (i of str) {
        list.push(i);
    }
    let n = list.length;
    for(let i = 0; i<ch.length ; i++){
        if(ch[i] === 'L'){
            if(n>0){
                n--;
            }else{

            }
        }else if(ch[i] === 'D'){
            if(n<list.length){
                n++;
            }else{
                
            }
        }else if(ch[i] === 'B'){
            if(n!==0){
                list.splice(n-1,1);
                n--;
            }
        }else if(ch[i] === 'P'){
            i++;
            list.splice(n,0,ch[i]);
            n++;
        }
    }

    return list.join("")
} 
console.log(solve());
*/

// 링크드 리스트 사용
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

function solve() {
  const str = input[0];
  const ch = input.slice(2);
  let head = new Node('');
  let tail = head;
  let cursor = tail;

  for (const char of str) {
    const newNode = new Node(char);
    tail.next = newNode;
    newNode.prev = tail;
    tail = newNode;
  }

  cursor = tail; // 커서를 문장의 맨 뒤로 이동

  for (let i = 0; i < ch.length; i++) {
    const command = ch[i];

    if (command === 'L') {
      if (cursor.prev !== null) {
        cursor = cursor.prev;
      }
    } else if (command === 'D') {
      if (cursor.next !== null) {
        cursor = cursor.next;
      }
    } else if (command === 'B') {
      if (cursor.prev !== null) {
        const prevNode = cursor.prev;
        const nextNode = cursor.next;

        prevNode.next = nextNode;

        if (nextNode !== null) {
          nextNode.prev = prevNode;
        }

        cursor = prevNode;
      }
    } else if (command === 'P') {
      i++;
      const charToInsert = ch[i];
      const newNode = new Node(charToInsert);
      const nextNode = cursor.next;

      cursor.next = newNode;
      newNode.prev = cursor;
      newNode.next = nextNode;

      if (nextNode !== null) {
        nextNode.prev = newNode;
      }

      if (cursor === tail) {
        tail = newNode;
      }

      cursor = newNode;
    }
  }

  let result = '';
  let currentNode = head.next;
  while (currentNode !== null) {
    result += currentNode.value;
    currentNode = currentNode.next;
  }

  return result;
}

console.log(solve());