function solution(a, b) {
    var answer = 1;
    for(let i=2; i<=Math.min(a,b);) {
        if(a%i===0 && b%i===0){
            a/=i;
            b/=i;
        }else i++;
    }
    while(b%2===0) b/=2;
    while(b%5===0) b/=5;
    if(b!==1) answer = 2;
    return answer
}