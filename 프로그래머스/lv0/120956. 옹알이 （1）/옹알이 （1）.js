function solution(babbling) {
    const arr = ["aya", "ye", "woo", "ma"];

    arr.forEach(v => {
        for (let i = 0; i < babbling.length; i++) {
            if (babbling[i].includes(v)) {
                babbling[i] = babbling[i].replace(v, " ");
            }
        }
    });

    return babbling.filter(v => !v.trim()).length;
}