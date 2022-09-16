function solution(w, h) {
    var answer = 1;
    var slope = h/w;
    var sum=0;
    
    for(let i=1;i<=w;i++) sum+=Math.ceil(slope*i);
    
    answer = (w*h-sum)*2;
    return answer;
}