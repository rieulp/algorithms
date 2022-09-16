function solution(N, road, K) {
    var answer = 0;
    const graph = Array.from({length:N+1},()=>Array.from({length:N+1},()=>0))
    const dist = Array.from({length:N+1},()=>Infinity);
    
    road.forEach(([a,b,cost])=>{
        graph[a][b] = graph[a][b]?Math.min(graph[a][b],cost):cost;
        graph[b][a] = graph[b][a]?Math.min(graph[b][a],cost):cost;
    });
    
    const queue=[[1,0]];
    dist[1]=0;
    
    while(queue.length) {
        const [cur,cost] = queue.shift();
        for(let i=2;i<=N;i++){
            if(graph[cur][i]) {
                const nextCost = graph[cur][i];
                
                if(dist[i] > dist[cur] + nextCost) {
                    dist[i] = dist[cur] + nextCost;
                    queue.push([i,nextCost]);
                }
            }
        }
    }

    dist.forEach(v=>{
        if(v<=K) answer++;
    });
    
    return answer;
}