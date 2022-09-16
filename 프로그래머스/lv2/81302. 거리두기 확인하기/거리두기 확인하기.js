function solution(places) {
    var answer = [];
    
    for(let pn = 0;pn<places.length;pn++){
        const place = places[pn];
        
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                if(place[i][j]!=='P') continue;
                
                let col=j+1, row = i+1;
                let parti = 0;
                
                while(col<5){
                    if(place[i][col]==='P')break;
                    if(place[i][col]==='X') parti=1;
                    col++;
                }
                
                if(col<5&&parti+col-j<3) {
                    answer.push(0);
                    break;
                }
                
                parti=0;
                
                while(row<5){
                    if(place[row][j]==='P')break;
                    if(place[row][j]==='X') parti=1;
                    row++;
                }
                
                if(row<5&&parti+row-i<3) {
                    answer.push(0);
                    break;
                }
                
                if(i+1<5&&j+1<5&&place[i+1][j+1]==='P'&&(place[i][j+1]!=='X'||place[i+1][j]!=='X')) {
                    answer.push(0);
                    break;
                }
                
                if(j-1>=0&&i+1<5&&place[i+1][j-1]==='P'&&(place[i][j-1]!=='X'||place[i+1][j]!=='X')) {
                    answer.push(0);
                    break;
                }
                
                j=col-1;
            }
            
            if(answer.length-1===pn) break;
        }
        
        if(answer.length-1<pn) answer.push(1);
    }
    
    return answer;
}