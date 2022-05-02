/* https://www.acmicpc.net/problem/10869 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(`${input[0] + input[1]}\n${input[0] - input[1]}\n${input[0] * input[1]}\n${parseInt(input[0] / input[1])}\n${input[0] % input[1]}`);
