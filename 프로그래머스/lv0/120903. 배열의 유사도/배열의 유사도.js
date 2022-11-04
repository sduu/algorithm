function solution(s1, s2) {
    return s1.reduce((a, c) => a + s2.includes(c), 0);
}