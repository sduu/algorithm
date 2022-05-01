/* https://www.acmicpc.net/problem/10818 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const array = input[1].split(' ').map(Number);

console.log(`${Math.min(...array)} ${Math.max(...array)}`);
