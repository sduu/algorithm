function solution(i, j, k) {
    return new Array(j - i + 1).fill().map((v, idx) => idx + i).join("").match(new RegExp(k, "g"))?.length || 0;
}