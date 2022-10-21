function solution(number) {
    var answer = 0;
    
    const dfs = (L, idx, sum) => {
        if(L===3) {
            if(sum===0) answer++;
            return;
        }
        for(let i=idx+1; i<number.length; i++) dfs(L+1, i, sum+number[i]);
    }
    
    dfs(0, -1, 0);
    
    return answer;
}