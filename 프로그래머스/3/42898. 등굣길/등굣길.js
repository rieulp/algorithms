function solution(m, n, puddles) {
    const MOD = 1000000007;
    const roads = Array.from({length:n},()=>Array(m).fill(0));
    
    for(const[j,i] of puddles) roads[i-1][j-1] = null;
    
    roads[0][0] = 1;
    
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++) {
            if(roads[i][j]===null) {
                roads[i][j] = 0;
                continue;
            }
            if(i>0) {
                roads[i][j]+=roads[i-1][j];
                roads[i][j]%=MOD
            }
            
            if(j>0) {
                roads[i][j]+=roads[i][j-1];
                roads[i][j]%=MOD
            }
        }
    }
    
    return roads[n-1][m-1];
  
    
    return answer;
}