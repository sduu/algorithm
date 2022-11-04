function solution(n) {
    return new Array(n).fill().map((v, i) => i + 1).filter(v => n % v === 0);
}