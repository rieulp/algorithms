function solution(N, number) {
    var answer = -1;
    const MAX = 9;
    
    const dp = Array.from({length:MAX},(_, i)=>new Set(i>0?[Number(N.toString().repeat(i))]:undefined))
    
    for(let size=1; size<MAX; size++) {
        for(let i=1; i<size; i++) {
            for(const num1 of dp[i]) {
                for(const num2 of dp[size-i]) {
                    dp[size].add(num1+num2)
                    dp[size].add(num1-num2)
                    dp[size].add(num1*num2)
                    if (num2 !== 0) dp[size].add(Math.floor(num1 / num2));
                }
            }
        }
        if(dp[size].has(number)) return size
    }
    
    return answer;
}