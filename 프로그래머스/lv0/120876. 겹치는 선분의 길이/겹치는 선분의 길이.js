function solution(lines) {
    const obj = lines
        .reduce((a, c, i) => {
            return [...a, ...new Array(Math.abs(c[0] - c[1])).fill().map((v, i) => `${c[0] + i} ${c[0] + i + 1}`)];
        }, [])
        .reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {});
    return Object.values(obj).reduce((a, c) => (c > 1 ? (a += 1) : a), 0);
}