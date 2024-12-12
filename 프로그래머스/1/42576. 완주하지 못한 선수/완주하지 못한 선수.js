function solution(participant, completion) {
    var answer;
    
    const parti = participant.reduce((acc, cur)=>{
        acc[cur] = (acc[cur] ?? 0) + 1;
        return acc;
    }, {})
    
    const comple = completion.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]??0)+1;
        return acc
    },{})
    
    answer = Object.keys(parti).find((p)=>{
        return !comple[p] || comple[p]!==parti[p]
    })
        
        
    return answer;
}