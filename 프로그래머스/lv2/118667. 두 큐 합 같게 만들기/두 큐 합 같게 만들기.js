function solution(queue1, queue2) {
    var answer = 0;
    let sum1 = queue1.reduce((a, b)=>a+b,0);
    let sum2 = queue2.reduce((a, b)=>a+b,0);
    const total = (sum1 + sum2)/2;
    
    let n = queue1.length*4;
    const q1 = [...queue1,...Array.from({length:queue1.length*3},()=>0)];
    const q2 = [...queue2,...Array.from({length:queue1.length*3},()=>0)];
    let f1 = 0, f2 = 0;
    let t1 = queue1.length-1, t2 = queue2.length -1;
    
    while(n--) {
        if(sum1<sum2) {
            sum1+=q2[f2];
            sum2-=q2[f2];
            q1[++t1]=q2[f2++];
            answer++;
        }else if(sum2<sum1) {
            sum1-=q1[f1];
            sum2+=q1[f1];
            q2[++t2]=q1[f1++];
            answer++;
        }else return answer;
    }
    
    return n<0?-1:answer;
}