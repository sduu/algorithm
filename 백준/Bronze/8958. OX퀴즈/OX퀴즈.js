const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = input[0];
let answer = '';

for (let i = 1; i <= num; i++) {
  let total = (score = 0);
  [...input[i]].forEach(v => {
    if (v === 'O') {
      score++;
      total = total + score;
    } else {
      score = 0;
    }
  });
  answer += `${total}\n`;
}

console.log(answer);
