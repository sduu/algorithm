/* https://www.acmicpc.net/problem/11720 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const array = [...input[1]].map(Number);
let answer = 0;

for (let i = 0; i < input[0]; i++) {
	answer += array[i];
}

console.log(answer);
