function solution(dirs) {
    var answer = 0;
    const visit = Array.from({length:11}, ()=> Array.from({length:11}, ()=>Array.from({length:4},()=>0)));
    const cur = [5,5];
    
    for(let i=0;i<=10;i++) {
        visit[0][i][0] = 1; // 왼
        visit[10][i][2] = 1; // 오
        visit[i][0][3] = 1; // 아래
        visit[i][10][1] = 1; // 위
    }
    
    for(dir of dirs) {
        switch(dir) {
            case 'L':
                if(!visit[cur[0]][cur[1]][0]) {
                    visit[cur[0]][cur[1]][0] = 1;
                    answer++;
                }
                if(cur[0]) {
                    cur[0] -= 1;
                    visit[cur[0]][cur[1]][2] = 1;
                }
                break;
            case 'U':
                if(!visit[cur[0]][cur[1]][1]) {
                    visit[cur[0]][cur[1]][1] = 1;
                    answer++;
                }
                if(cur[1]<10) {
                    cur[1] += 1;
                    visit[cur[0]][cur[1]][3] = 1;
                }
                break;
            case 'R':
                if(!visit[cur[0]][cur[1]][2]) {
                    visit[cur[0]][cur[1]][2] = 1;
                    answer++;
                }
                if(cur[0]<10) {
                    cur[0] += 1;
                    visit[cur[0]][cur[1]][0] = 1;
                }
                break;
            case 'D':
                if(!visit[cur[0]][cur[1]][3]) {
                    visit[cur[0]][cur[1]][3] = 1;
                    answer++;
                }
                if(cur[1]) {
                    cur[1] -=1;
                    visit[cur[0]][cur[1]][1] = 1;
                }
                break;
            default:
        }
    }
    
    return answer;
}