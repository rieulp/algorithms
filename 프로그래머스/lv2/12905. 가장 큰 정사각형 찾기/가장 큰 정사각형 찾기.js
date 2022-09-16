function solution(board)
{
    var answer = 0;
    const row = board.length;
    const col = board[0].length;
    
    for(let i=1;i<row;i++){
        for(let j=0; j<col; j++){
            if(board[i][j]){
                board[i][j]=1+Math.min(board[i-1][j-1]||0,board[i-1][j],board[i][j-1]||0);
                answer = Math.max(answer,board[i][j]);
            }
        }
    }
    
    if(!answer) answer = Math.max(...board[0]);
    
    return Math.pow(answer,2);
}