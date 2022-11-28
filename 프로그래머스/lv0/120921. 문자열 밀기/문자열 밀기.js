function solution(A, B) {
    const a = [...A];
    for (let i = 0; i < A.length; i++) {
        if (a.join('') === B) return i;
        a.unshift(a.pop());
    }
    return -1;
}