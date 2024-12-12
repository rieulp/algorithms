function solution(str){
    var answer = true;
    const stack=[];
    
    for(const s of str) {
        if(s==='(') stack.push(s);
        else if(stack[stack.length-1]==='(') stack.pop();
        else return false
    }
    
    if(stack.length > 0) return false;

    return answer;
}