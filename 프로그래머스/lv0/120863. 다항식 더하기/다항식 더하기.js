function solution(polynomial) {
    var answer = [0,0];
    const splitArray = polynomial.replace(/\+ /g,'').split(' ');

    for(item of splitArray) {
        const [n,x] =item.split('x');
        if(x==='') answer[0]+=Number(n||1);
        else answer[1]+=Number(n);
    }
  
    if(!answer[1]) answer.pop();
    
    if(answer[0]) answer[0] = (answer[0]===1?'':answer[0])+'x'; 
    else answer.shift();
    
    return answer.join(' + ');
}