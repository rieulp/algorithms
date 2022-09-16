function comb(size,start,targetN){
    let result=[];
    if(targetN===1){
        for(let i=start;i<size;i++) result.push([i]);
        return result;
    }
    for(let i=start;i<size;i++){
        comb(size,i+1,targetN-1).forEach(v=>result.push([i,...v]))
    }
    return result;
}

function solution(relation) {
    var answer = 0;
    let candidates=[];
    let tuples=Array.from({length:relation[0].length},()=>[]);
    
    for(x of relation) tuples.forEach((v,i)=>v.push(x[i]));
    
    for(let i=1;i<=tuples.length;i++){
        let candies = comb(tuples.length,0,i);
        
        for(cd of candies){
            var set = new Set();
            
            for(let j=0;j<relation.length;j++){
                let key='';
                cd.forEach(v=> key+=''+tuples[v][j]);
                if(set.has(key)) break;
                set.add(key);
            }
            
            if(set.size===relation.length){
                candidates.push(cd.join(''));
                answer++;
            }
        }
    }
    
    for(let i=0;i<candidates.length;){
        let len = candidates.length;
        
        candidates.forEach((v,idx)=>{
            if(i!==idx) {
                let cnt=0;
                
                if(i>idx){
                    [...candidates[idx]].forEach(v=>{
                        if(candidates[i].includes(v))cnt++;
                    });
                    
                    if(cnt===candidates[idx].length){
                        answer++;
                        candidates.splice(i,1);
                    }
                }else{
                    [...candidates[i]].forEach(v=>{
                        if(candidates[idx].includes(v))cnt++;
                    });
                    
                    if(cnt===candidates[i].length){
                        answer++;
                        candidates.splice(idx,1);
                    }
                }
            }
        });
        
        if(len===candidates.length)i++;
    }
    
    answer = candidates.length;
    
    return answer;
}