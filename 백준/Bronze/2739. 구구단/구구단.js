const input = require('fs').readFileSync('/dev/stdin').toString();
const num = Number(input);
let answer = '';

for (let i = 1; i <= 9; i++) {
  answer += `${num} * ${i} = ${num * i}\n`;
}

console.log(answer);
