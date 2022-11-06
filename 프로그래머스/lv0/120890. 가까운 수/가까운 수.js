function solution(array, n) {
    array.push(n);
    array.sort((a, b) => a - b);
    const [before, after] = [array[array.indexOf(n) - 1] || 0, array[array.indexOf(n) + 1] || 0];
    return Math.abs(n - before) > Math.abs(n - after) ? after : before;
}