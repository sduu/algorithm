/* https://www.acmicpc.net/problem/10951 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(v => {
  const array = v.split(' ');
  console.log(+array[0] + +array[1]);
});
