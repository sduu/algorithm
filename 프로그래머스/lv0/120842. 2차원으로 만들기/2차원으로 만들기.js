function solution(num_list, n) {
    var answer = [[]];
    for (let i = 0; i < Math.ceil(num_list.length / n); i++) {
        answer[i] = num_list.slice(i * n, i * n + n);
    }
    return answer;
}