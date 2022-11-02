const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';

for (let i = 0; i < input.length - 1; i++) {
  const array = input[i].split(' ');
  answer += `${+array[0] + +array[1]} \n`;
}

console.log(answer);
