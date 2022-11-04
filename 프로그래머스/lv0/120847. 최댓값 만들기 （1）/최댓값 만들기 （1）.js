function solution(numbers) {
    return numbers.reduce((d, c, i, a) => (c * a[i + 1] > d ? c * a[i + 1] : d), 0);
}