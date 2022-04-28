/* https://www.acmicpc.net/problem/2438 */
const input = require('fs').readFileSync('/dev/stdin');
const a = Number(input);
let answer = '';

for (let i = 1; i <= a; i++) {
  for (let j = 0; j < i; j++) {
    answer += '*';
  }
  answer += '\n';
}

console.log(answer);
