function solution(age) {
    const alphabet = "abcdefghij";
    return [...age.toString()].map(v => alphabet[v]).join("");
}