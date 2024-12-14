function solution(jobs) {
    const heap = [];
    let curTime = 0, answer = 0;
    
    len = jobs.length;
    
    jobs.sort((a, b) => a[0] - b[0]); 
    
    while (jobs.length||heap.length) {
        while (jobs.length && jobs[0][0] <= curTime) {
            const [request, time] = jobs.shift();
            heap.push({ request, time });
        }
        
        heap.sort((a, b) => a.time - b.time);
        
        if (heap.length > 0) {
            const task = heap.shift();
            curTime += task.time;
            answer += curTime - task.request;
        } else {
            curTime = jobs[0][0];
        }
    }

    return Math.trunc(answer / len);
}