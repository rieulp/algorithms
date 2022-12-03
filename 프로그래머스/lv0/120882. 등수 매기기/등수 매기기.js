function solution(score) {
    const array = score.map((s,i)=>[i,(s[0]+s[1])/2]);
    array.sort((a, b)=>b[1]-a[1]);
    var answer = [];
    let i=1;
    let len=1;
    for([index,sc] of array) {
        if(!answer.length) answer.push([i, index, sc]);
        else {
            if(answer[answer.length-1][2]===sc) {
                len++;
                answer.push([i,index, sc]);
            }
            else{
                i+=len;
                answer.push([i, index, sc]);
                len=1;
            }
        }
    }
    answer.sort((a,b)=>a[1]-b[1])
    answer = answer.map(([rank])=>rank);
    return answer;
}