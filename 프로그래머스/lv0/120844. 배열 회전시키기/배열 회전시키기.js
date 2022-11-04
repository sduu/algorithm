function solution(numbers, direction) {
    return direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift()), numbers;
}