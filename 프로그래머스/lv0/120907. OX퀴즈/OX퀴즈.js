function solution(quiz) {
    return quiz.map(v => {
        const arr = v.split(' = ');
        return eval(arr[0]) == arr[1] ? 'O' : 'X';
    });
}