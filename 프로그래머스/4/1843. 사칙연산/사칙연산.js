function solution(arr) {
    const n = (arr.length+1)/2;
    
    const dpMax = Array.from({length:n},()=>Array(n).fill(Number.MIN_SAFE_INTEGER))
    const dpMin = Array.from({length:n},()=>Array(n).fill(Number.MAX_SAFE_INTEGER));
    
    for(let i=0; i<n; i++) {
        dpMax[i][i] = +arr[i*2];
        dpMin[i][i] = +arr[i*2];
    }
    
    for(let size=1; size<n; size++){
        for(let i=0; i<n-size; i++) {
            const j = i+size;
            for(let k=i; k<j; k++){
                const operator = arr[k*2+1];
                if(operator==='+'){
                    dpMax[i][j] = Math.max(dpMax[i][j], dpMax[i][k]+dpMax[k+1][j])
                    dpMin[i][j] = Math.min(dpMin[i][j], dpMin[i][k]+dpMin[k+1][j])
                    
                }else if(operator==='-') {
                    dpMax[i][j] = Math.max(dpMax[i][j], dpMax[i][k]-dpMin[k+1][j])
                    dpMin[i][j] = Math.min(dpMin[i][j], dpMin[i][k]-dpMin[k+1][j])
                }
            }
        }
    }
    
    return dpMax[0][n - 1];
}