function solution(money) {
    var answer = 0;
    const n = money.length;
    
    const dp1 = Array(n).fill(0)
    const dp2 = Array(n).fill(0)
    
    // 첫번째 집을 턴 경우
    dp1[0] = money[0];
    dp1[1] = Math.max(money[0], money[1]);
    for(let i=2; i<n-1; i++){
        dp1[i] = Math.max(dp1[i-1], dp1[i-2]+money[i])
    }
    
    // 마지막 집을 턴 경우
    dp2[1] = money[1];
    dp2[2] = Math.max(money[1], money[2]);
    for(let i=3; i<n; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2]+money[i])
    }
    
    answer = Math.max(dp1[n-2], dp2[n-1])
    return answer;
}