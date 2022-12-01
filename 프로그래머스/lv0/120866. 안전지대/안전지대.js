function solution(board) {
    const N = board.length;
    var answer = 0;
    const dxy=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,1],[1,0],[1,-1]]
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            if(board[i][j]===1) {
                for([dx,dy] of dxy) {
                    if(j+dx>=0 && i+dy>=0 && j+dx<N && i+dy<N && board[i+dy][j+dx]!==1) {
                        board[i+dy][j+dx] = -1;
                    }
                }
            }
        }
    }
    answer = board.flat().filter(v=>v===0).length;
    return answer;
}