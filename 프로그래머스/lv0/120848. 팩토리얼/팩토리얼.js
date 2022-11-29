function solution(n) {
    let factorial = 1;
    for (let i = 1; ; i++) {
        factorial *= i;
        if (n < factorial) return i - 1;
    }
}