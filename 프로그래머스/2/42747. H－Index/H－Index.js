function solution(citations) {
    var answer = 0;
    
    const len = citations.length;
    citations.sort((a,b)=>b-a);
    
    for(let i=0; i<len; i++) {
        if(citations[i]>=i+1) answer=i+1;
        else break;
    }
    
    return answer;
}