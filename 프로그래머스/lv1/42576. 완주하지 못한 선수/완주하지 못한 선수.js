function solution(participant, completion) {
    var answer = '';

    var newArray1 = participant.sort();
    var newArray2 = completion.sort();

    for (var i = 0; i < participant.length; i++) {
        answer = newArray1[i];
        if (newArray1[i] !== newArray2[i]) {
            break;
        }
    }

    return answer;
}