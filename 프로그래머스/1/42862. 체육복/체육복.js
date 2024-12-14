function solution(n, lost, reserve) {
    var answer = 0;
    const students = Array(n+1).fill(1);
    students[0] = 0;
    for(s of reserve) students[s]++;
    for(s of lost) students[s]--;
    
    const reserveNum = reserve.length;
    
    function dfs(i) {
         if(i===reserveNum){
            answer = Math.max(answer, students.filter(val=>val>0).length)
            return
        }
        
        const reserveStudent = reserve[i];
        
        const left = reserveStudent - 1;
        const right = reserveStudent + 1;
        
        if(students[reserveStudent]>1) {
            if(left>0 && students[left]===0) {
                students[left] ++;
                students[reserveStudent]--;
                dfs(i+1);
                students[left]--;
                students[reserveStudent]++;
            }
        
            if(right<=n && students[right]===0) {
                students[right]++;
                students[reserveStudent]--;
                dfs(i+1);
                students[right]--;
                students[reserveStudent]++;
            }
        }
        
       
        
        dfs(i+1)
    }
    
    dfs(0)
    
    return answer;
}