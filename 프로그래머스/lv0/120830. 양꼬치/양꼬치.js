function solution(n, k) {
    var free = Math.floor(n/10);
    var answer = n*12000 + (k-free)*2000;
    return answer;
}