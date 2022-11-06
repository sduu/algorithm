function solution(my_str, n) {
    return new Array(Math.ceil(my_str.length / n)).fill().map((v, i) => my_str.slice(i * n, i * n + n));
}