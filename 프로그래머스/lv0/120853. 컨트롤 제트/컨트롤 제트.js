function solution(s) {
    s = s.split(" ");
    while (s.includes("Z")) {
        const zIndex = s.indexOf("Z");
        zIndex >= 1 ? s.splice(zIndex - 1, 2) : s.splice(zIndex, 1);
    }
    return eval(s.join("+")) || 0;
}