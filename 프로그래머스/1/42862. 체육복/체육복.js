function solution(n, lost, reserve) {
    var answer = 0;
    
    lost.sort();
    reserve.sort();
    
    const students = Array(n).fill(1);
    for(s of reserve) students[s-1]++;
    for(s of lost) students[s-1]--;
    
    for(let i=0; i<reserve.length; i++) {
        const reserveStudent = reserve[i] - 1;
        const left = reserveStudent - 1;
        const right = reserveStudent + 1;
        
        if(students[reserveStudent]<2) continue;
        
        if(left>=0 && students[left]===0) {
            students[left]++;
            students[reserveStudent]--;
        }
        else if(right<n && students[right]===0) {
            students[right]++;
            students[reserveStudent]--;
        }
    }
    console.log(students)
    answer = students.filter(val=>val>0).length;
    
    return answer;
}