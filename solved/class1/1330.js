/* https://www.acmicpc.net/problem/1330 */
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
let answer;

if (a > b) {
  answer = '>';
} else if (a < b) {
  answer = '<';
} else {
  answer = '==';
}

console.log(answer);
