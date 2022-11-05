function solution(order) {
    return (order + "").length - (order + "").replaceAll(/3|6|9/g, "").length;
}