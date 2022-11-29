function solution(dots) {
    const set = new Set();
    while (dots.length > 0) {
        for (let i = 0; i < dots.length - 1; i++) {
            set.add((dots[0][1] - dots[i + 1][1]) / (dots[0][0] - dots[i + 1][0]));
        }
        dots.shift();
    }

    return 6 - set.size > 0 ? 1 : 0;
}