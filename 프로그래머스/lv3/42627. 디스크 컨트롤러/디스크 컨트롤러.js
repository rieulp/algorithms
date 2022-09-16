function solution(jobs) {
    var answer = 0;
    let n=jobs.length;
    let cur = 0;
    jobs.sort((a,b)=>a[0]-b[0]);
    
    while(jobs.length) {
        let i = 0;
        let min_v=Number.MAX_SAFE_INTEGER;
        let min_i=0;
        
        if(jobs[0][0] > cur){
            while(i < jobs.length && jobs[i][0] === jobs[0][0]) {
                if(jobs[i][0]+jobs[i][1]<min_v){
                    min_v = jobs[i][0]+jobs[i][1];
                    min_i = i;
                }
                
                i++;
            }
            
            answer+=jobs[min_i][1];
            cur = jobs[min_i][0]+jobs[min_i][1];
        }else{
            while(i<jobs.length) {
                if(jobs[i][0]<=cur && cur+jobs[i][1]<min_v) {
                    min_v = cur+jobs[i][1];
                    min_i=i;
                }
                i++;
            }
            answer+= jobs[min_i][1]+(cur-jobs[min_i][0]);
            cur = min_v;
        }
        jobs.splice(min_i,1);
    }

    answer/=n;
    
    return parseInt(answer);
}