const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = input[0];

for (let i = 1; i <= num; i++) {
  const num = input[i].split(' ').map(Number);
  console.log(num[0] + num[1]);
}
