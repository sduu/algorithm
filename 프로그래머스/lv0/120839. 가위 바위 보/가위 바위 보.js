function solution(rsp) {
    const game = {0: 5, 2: 0, 5: 2};
    return [...rsp].map(v => game[v]).join("");
}