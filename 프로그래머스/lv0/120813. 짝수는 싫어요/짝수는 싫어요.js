function solution(n) {
    return new Array(Math.ceil(n / 2)).fill().map((v, i) => i * 2 + 1);
}