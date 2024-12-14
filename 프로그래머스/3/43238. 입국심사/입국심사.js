function solution(n, times) {
    var answer = 0;
    if(times.length>n) {
        times.sort((a,b)=>a-b);
        return times[n-1];
    }
    
    let minTime = 1;
    let maxTime = Math.max(...times) * n
    answer = maxTime;
    
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