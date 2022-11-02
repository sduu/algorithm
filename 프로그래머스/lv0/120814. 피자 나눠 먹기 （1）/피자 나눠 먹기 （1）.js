function solution(n) {
    let num = 1;
    while ((num * 7) / n < 1) num++;
    return num;
}