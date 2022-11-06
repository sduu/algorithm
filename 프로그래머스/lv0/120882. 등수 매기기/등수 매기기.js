function solution(score) {
    const arr = score.reduce((a, c) => (a.push((c[0] + c[1]) / 2), a), []);
    return arr.map(v => [...arr].sort((a, b) => b - a).indexOf(v) + 1);
}