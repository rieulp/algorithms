function cntLinkedNode(node,cutNode,nodes,linkedNodeN){
    let key = `${node},${cutNode}`;
    if(linkedNodeN.has(key)) return linkedNodeN.get(key);
    let cnt=0;
    
    for(let i=0;i<nodes.get(node).length;i++){
        if(cutNode!==nodes.get(node)[i]){
            cnt+=cntLinkedNode(nodes.get(node)[i],node,nodes,linkedNodeN);
        }
    }
    linkedNodeN.set(key,cnt+1);
    
    return cnt+1;
}

function solution(n, wires) {
    var answer = Number.MAX_SAFE_INTEGER;
    var nodes=new Map();
    let linkedNodeN =new Map();
    
    wires.forEach(v=> {
        nodes.has(v[0])?nodes.get(v[0]).push(v[1]):nodes.set(v[0],[v[1]]);
        nodes.has(v[1])?nodes.get(v[1]).push(v[0]):nodes.set(v[1],[v[0]]);
    });
    
    for([key, value] of nodes) {
        for(let j=0;j<value.length;j++){
            let a = cntLinkedNode(key,value[j],nodes,linkedNodeN);
            let b = cntLinkedNode(value[j],key,nodes,linkedNodeN);
            
            answer = Math.min(answer,Math.abs(a-b));
        }
    }
    
    return answer;
}