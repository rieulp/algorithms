function solution(citations) {
    var answer = 0;
    const n = citations.length;
    citations.sort((a,b)=>b-a);
    for(let num=citations.length; num>0; num--) {
        let sameOrUp = 0;
        for(let j=0; j<citations.length; j++) {
            if(citations[j]<num) break;
            sameOrUp++;
        }
        if(sameOrUp>=num) {
            answer = num;
            break;
        }
    }
    return answer;
}