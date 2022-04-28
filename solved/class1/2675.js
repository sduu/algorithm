/* https://www.acmicpc.net/problem/2675 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = '';

for (let i = 0; i < input.length; i++) {
  const [num, [...txt] = ''] = input[i].trim().split(' ');

  if (txt.length > 0) {
    for (let j = 0; j < txt.length; j++) {
      answer += txt[j].repeat(num);
    }
    answer += '\n';
  }
}

console.log(answer);
