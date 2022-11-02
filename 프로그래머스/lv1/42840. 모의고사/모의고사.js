function solution(answers) {
    var answer = [];
    
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let score = [0, 0, 0];
    
    answers.forEach((e, i) => {
        if (p1[i % p1.length] === e) score[0]++;
        if (p2[i % p2.length] === e) score[1]++;
        if (p3[i % p3.length] === e) score[2]++;
    });
    
    const max = Math.max(...score);
    
    score.forEach((e, i) => {
        if (e === max) answer.push(i + 1);
    });
    
    return answer;
}