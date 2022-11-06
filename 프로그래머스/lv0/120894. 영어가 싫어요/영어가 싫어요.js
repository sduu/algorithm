function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return +arr.reduce((a, c, i) => a.replaceAll(c, i), numbers);
}