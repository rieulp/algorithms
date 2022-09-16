function solution(line) {
    var answer = [];
    var points=[];
    let rt=[Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,
               Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
    for(let i=0;i<line.length-1;i++){
        for(let j=i+1;j<line.length;j++){
            let [a,b,e] = line[i];
            let [c,d,f] = line[j];
            const under = a*d-b*c;
            if(under){
                const x=(b*f-e*d)/under, y=(e*c-a*f)/under;
                if(Number.isInteger(x)&&Number.isInteger(y)) {
                    points.push([x,y]);
                    [rt[0],rt[1],rt[2],rt[3]] = 
                        [Math.min(rt[0],x),Math.max(rt[1],y),Math.max(rt[2],x),Math.min(rt[3],y)];
                }
            }
        }
    }
    for(let i=rt[3];i<=rt[1];i++){
        answer.push('.'.repeat(rt[2]-rt[0]+1));
    }
    points.forEach(p=>{
        let x = p[0]-rt[0];
        let y = rt[1]-p[1];
        if(answer[y][x]==='.')
            answer[y] = answer[y].slice(0,x)+'*'+answer[y].slice(x+1);
    })
    return answer;
}