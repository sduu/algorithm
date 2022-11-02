function solution(array, n) {
    const regexp = new RegExp(`\\b${n}\\b`, "g");
    return array.join(" ").match(regexp)?.length ?? 0;
}