function solution(balls, share) {
    var answer = 1;
    
    if(balls===share) return answer;
        
    let i=balls;

    while(i >(balls-share)) answer = BigInt(answer)*BigInt(i--);
    while(share > 0) answer = BigInt(answer)/BigInt(share--);
    
    
    
    return answer;
}