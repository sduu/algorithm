function solution(i, j, k) {
    return new Array(j - i + 1).fill().map((v, idx) => idx + i).join("").split(k).length - 1;
}