function solution(array) {
    return [...array.join("").matchAll("7")].length;
}