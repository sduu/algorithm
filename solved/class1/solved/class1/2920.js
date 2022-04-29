/* https://www.acmicpc.net/problem/2920 */
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const array = input.slice();

if (array.sort((a, b) => a - b).join(' ') === input.join(' ')) {
	console.log('ascending');
} else if (array.sort((a, b) => b - a).join(' ') === input.join(' ')) {
	console.log('descending');
} else {
	console.log('mixed');
}
