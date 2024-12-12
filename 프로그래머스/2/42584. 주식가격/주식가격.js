function solution(prices) {
    var answer = Array.from({length:prices.length}, ()=>0);
    const stack = []
    
    for(let i=0; i<prices.length; i++) {
        while(stack.length>0 && prices[stack[stack.length-1]]>prices[i]) {
            const top = stack.pop();
            answer[top] = i-top;
        }
        stack.push(i);
    }
    
    while(stack.length) {
       const top = stack.pop()
       answer[top] = prices.length-top-1;
    }
    return answer;
}