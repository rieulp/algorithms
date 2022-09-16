function solution(tickets) {
    var answer = [];
    const stack=[];
    const ch = Array.from({length:tickets.length},()=>0);
    let flag = 1;
    
    tickets.sort((a,b)=>a[1]<b[1]?-1:1);
    
    function DFS(v,stack){
        if(stack.length===tickets.length){
            answer = stack.slice();
            answer.push(v);
            flag = 0;
            return;
        }
        
        for(let i=0;i<tickets.length&&flag;i++){
            if(v===tickets[i][0]&&!ch[i]){
                stack.push(v);
                ch[i]=1;
                DFS(tickets[i][1],stack.slice());
                ch[i]=0;
                stack.pop();
            }
        }
    }
    
    for(let i=0;i<tickets.length;i++){
        if(tickets[i][0]==="ICN"){
            ch[i]=1;
            stack.push(tickets[i][0])
            DFS(tickets[i][1],stack);
            
            if(!flag) break;
            
            ch[i]=0;
            stack.pop();
        }
    }
    
    return answer;
}