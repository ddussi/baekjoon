const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
   const num = input[0];
   const tree = {};
   const list = input.slice(1);
   let answer = '';
   for(let i = 0 ; i<num; i++){
      const [node, left ,right] = list[i].split(" ");
      tree[node] = [left, right];
   }
   function preorder(node) {
      if(node==='.'){
         return;
      }
      const [left, right] = tree[node];
      answer += node;
      preorder(left);
      preorder(right);
   }
   function inorder(node) {
      if(node==='.'){
         return;
      }
      const [left, right] = tree[node];
      inorder(left);
      answer += node;
      inorder(right);
   }
   function postorder(node) {
      if(node==='.'){
         return;
      }
      const [left, right] = tree[node];
      postorder(left);
      postorder(right);
      answer += node;
   }
   preorder("A")
   answer += '\n';
   inorder("A")
   answer += '\n';
   postorder("A")
   return answer
}

console.log(solve());