function solution(numlist, n) {
    var answer = [...numlist];
    answer.sort((a,b)=>{
        const diff1 = Math.abs(n - a);
        const diff2 = Math.abs(n - b);
        if(diff1===diff2) return b-a;
        return diff1-diff2;
    })
    return answer;
}