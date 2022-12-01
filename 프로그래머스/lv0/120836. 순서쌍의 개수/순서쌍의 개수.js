function solution(n) {
    var nsqrt = Math.sqrt(n);
    var answer = Number.isInteger(nsqrt) ? -1 : 0;
    for(let i=1;i<=nsqrt;i++) {
        if(n%i===0) answer+=2;
    }
    return answer;
}