function solution(s) {
    return s.split("").sort().reduce((a, c) => (s.match(new RegExp(c, "g")).length === 1 ? a + c : a), "");
}