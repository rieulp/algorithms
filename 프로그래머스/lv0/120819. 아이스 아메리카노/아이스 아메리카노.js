function solution(money) {
    const PRICE=5500;
    var answer = [Math.floor(money/PRICE),money%PRICE];
    return answer;
}