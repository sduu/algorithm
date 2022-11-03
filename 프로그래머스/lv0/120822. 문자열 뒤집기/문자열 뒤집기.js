function solution(my_string) {
    return [...my_string].reduce((a, c) => (a.unshift(c), a), []).join("");
}