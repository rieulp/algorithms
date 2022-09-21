function solution(word) {
    var answer = 0;
    const chars = new Map([['A',1],['E',2],['I',3],['O',4],['U',5]]);
    const max = Array(5).fill(0).reduce((a,b,i)=>a+Math.pow(5,i+1),0);
    const n = word.length;
    
    for(let i=0;i<n;i++) {
        if(chars.get(word[i])===1 || i===4) answer+=chars.get(word[i]);
        else {
            answer+=Math.floor(max/Math.pow(5,i+1))*(chars.get(word[i])-1) + 1
        }
    }
    
    return answer;
}