function getIntersection(route1,route2) {
    const s = Math.max(route1[0], route2[0]);
    const e = Math.min(route1[1], route2[1]);
    if(s<=e) return [s,e];
    return null;
}

function solution(routes) {
    var answer = Number.MAX_SAFE_INTEGER;
    const n = routes.length;
    
    routes.sort((a,b)=>{
        // if(a[0]===b[0]){
        //     return b[1]-a[1];
        // }
        return a[0]-b[0];
    })
    
    console.log(routes)
    const visit = Array(n).fill(0);
    const queue = [0];
    let cnt = 0;

    while(queue.length) {
        const cur = queue.shift();
        if(visit[cur]) continue;

        let inter=[...routes[cur]];
        cnt++;
        visit[cur]=cnt;

        for(let j=cur+1;j<n;j++) {
            if(visit[j]) continue;
            if(inter[0]>routes[j][0]) continue;
                
            const tmp = getIntersection(inter,routes[j]);
            if(tmp) {
                inter=tmp;
                visit[j]=cnt;
            }
        }
        
        for(let i=0;i<n;i++) {
            if(visit[i]===0){
                queue.push(i);
                break;
            }
        }
    }
    answer = Math.min(answer,cnt);

    return answer;
}