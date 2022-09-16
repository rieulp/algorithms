function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = Number.MAX_SAFE_INTEGER;
    const MAX_SIZE = 102;
    
    const paths = Array.from({length:MAX_SIZE},()=>Array.from({length:MAX_SIZE},()=>0))
    const visit = Array.from({length:MAX_SIZE},()=>Array.from({length:MAX_SIZE},()=>0))
    const dxy = [[-1,0], [1,0], [0,1], [0,-1]];
    
    const eraseOverlap = ([left,bottom,right,top])=>{
        for(let x=left*2+1; x<right*2; x++){
            for(let y=bottom*2+1; y<top*2; y++) paths[y][x]=0;
        }
    }
    
    const drawOutline = ([left,bottom,right,top])=>{
        for(let x=left*2; x<=2*right; x++) paths[top*2][x] = paths[bottom*2][x] = 1;
        for(let y=bottom*2; y<=top*2; y++) paths[y][left*2] = paths[y][right*2] = 1;
    }
    
    for(rect of rectangle) drawOutline(rect);
    for(rect of rectangle) eraseOverlap(rect);
    
    const next = [[characterX*2,characterY*2,0]];
    while(next.length) {
        const [x,y,len] = next.pop();
        if(x===itemX*2 && y===itemY*2){
            answer = Math.min(answer,len);
            continue;
        }
        visit[y][x] = 1;
        for([dx,dy] of dxy){
            const nextX = x+dx;
            const nextY = y+dy;
            if(nextX>=0 && nextX<MAX_SIZE && nextY>=0 && nextY<MAX_SIZE 
               && paths[nextY][nextX] && !visit[nextY][nextX]) next.push([nextX,nextY,len+1]);
        }
    }

    return answer/2;
}