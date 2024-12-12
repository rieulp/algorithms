function solution(triangle) {
    var answer = 0;
    
    for(let i=1; i<triangle.length; i++) {
        for(let j=0; j<triangle[i].length; j++) {
            const left = triangle[i-1][j-1] ?? 0;
            const right = triangle[i-1][j] ?? 0;
            triangle[i][j]+= Math.max(left, right)
            if(i===triangle.length-1) {
                answer = Math.max(triangle[i][j], answer)
            }
        }
    }
    
    return answer;
}