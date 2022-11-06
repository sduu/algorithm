function solution(emergency) {
    const sort = [...emergency].sort((a, b) => b - a);
    return emergency.map(v => sort.indexOf(v) + 1);
}