function solution(n) {
    let answer = 0;
    function countBrackets(left, right) {
        if (left === 0 && right === 0) answer++;
        if (left > 0) countBrackets(left - 1, right);
        if (right > 0 && left <= right - 1) countBrackets(left, right - 1);
    }
    countBrackets(n, n);
    return answer;
}
