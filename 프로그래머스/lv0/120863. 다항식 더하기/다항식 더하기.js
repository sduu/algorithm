function solution(polynomial) {
    const arr = polynomial.split(' + ');
    const answer = arr.reduce((a, c) => {
        if (c.indexOf('x') === -1) {
            a[1] = (a[1] || 0) + +c;
        } else {
            a[0] = (parseInt(a[0]) || 0) + (parseInt(c) || 1) + 'x';
        }
        return a;
    }, []);
    parseInt(answer[0]) === 1 && (answer[0] = 'x');
    return answer.flat(2).join(' + ');
}