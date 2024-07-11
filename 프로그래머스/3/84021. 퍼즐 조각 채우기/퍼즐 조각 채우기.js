 // 보드에서 모든 조각을 찾는 함수
 function findPieces(board, value) {
    const N = board.length;
    const pieces = [];
    const visited = Array.from({ length: N }, () => Array(N).fill(false)); // 방문한 셀을 추적
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 상하좌우 방향
    
    // BFS를 사용하여 조각을 찾는 내부 함수
    function bfs(x, y, value) {
        const queue = [[x, y]];
        const piece = [];
        visited[x][y] = true;
        
        // 큐가 빌 때까지 반복
        while (queue.length > 0) {
            const [cx, cy] = queue.shift(); // 현재 위치
            piece.push([cx, cy]); // 조각에 현재 위치 추가
            
            // 상하좌우 네 방향으로 탐색
            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;
                
                // 유효한 범위 내에 있고, 방문하지 않았으며, 같은 값인 경우
                if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny] && board[nx][ny] === value) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]); // 큐에 추가
                }
            }
        }
        
        return piece; // 발견된 조각 반환
    }
    
    // 보드의 모든 셀에 대해 BFS 실행
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j] && board[i][j] === value) {
                pieces.push(bfs(i, j, value)); // 조각을 찾아 pieces에 추가
            }
        }
    }
    
    return pieces; // 모든 조각 반환
}

function solution(game_board, table) {
    const N = game_board.length;
   
    // 조각을 좌상단 기준으로 정규화하는 함수
    function normalizePiece(piece) {
        const minX = Math.min(...piece.map(([x,_]) => x)); // 최소 x 좌표
        const minY = Math.min(...piece.map(([_, y]) => y)); // 최소 y 좌표
        return piece.map(([x, y]) => [x - minX, y - minY]).sort(); // 좌상단 기준으로 이동하고 정렬
    }
    
    // 조각을 90도 회전하는 함수
    function rotate(piece) {
        const maxX = Math.max(...piece.map(([x, y]) => x)); // 최대 x 좌표
        return piece.map(([x, y]) => [y, maxX - x]).sort(); // 90도 회전 후 정렬
    }
    
    // 게임 보드의 빈 칸을 조각으로 찾음
    const gameBoardPieces = findPieces(game_board, 0);
    // 테이블의 조각을 찾음
    const tablePieces = findPieces(table, 1);
    
    // 찾은 조각들을 정규화
    const normalizedGameBoardPieces = gameBoardPieces.map(normalizePiece);
    const normalizedTablePieces = tablePieces.map(normalizePiece);
    
    // 사용된 테이블 조각을 추적할 배열
    const used = Array(normalizedTablePieces.length).fill(false);
    let result = 0; // 채워진 칸 수
    
    // 게임 보드의 각 조각에 대해
    for (const gamePiece of normalizedGameBoardPieces) {
        for (let i = 0; i < normalizedTablePieces.length; i++) {
            if (used[i]) continue; // 이미 사용된 조각 건너뜀
            
            let tablePiece = normalizedTablePieces[i];
            let found = false; // 조각을 찾았는지 여부
            
            // 각 테이블 조각을 최대 4번 회전하여 비교
            for (let r = 0; r < 4; r++) {
                if (JSON.stringify(gamePiece) === JSON.stringify(tablePiece)) {
                    used[i] = true; // 조각을 사용으로 표시
                    result += gamePiece.length; // 결과에 조각 크기 추가
                    found = true;
                    break;
                }
                tablePiece = normalizePiece(rotate(tablePiece)); // 조각을 회전하여 다시 정규화
            }
            
            if (found) break; // 조각을 찾았으면 다음 게임 보드 조각으로 이동
        }
    }
    
    return result; // 채워진 칸 수 반환
}