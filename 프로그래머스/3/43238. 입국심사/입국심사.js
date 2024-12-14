function solution(n, times) {
    
    let minTime = 1;
    let maxTime = Math.max(...times) * n;
    var answer = maxTime
    
    while(minTime<=maxTime) {
        const midTime = Math.floor((minTime+maxTime)/2);
        const people = times.reduce((sum, time)=>sum + Math.floor(midTime/time),0);
        
        if(people<n) minTime = midTime + 1;
        else  {
            answer = midTime
            maxTime = midTime-1;
        }
    }
    return answer;
}