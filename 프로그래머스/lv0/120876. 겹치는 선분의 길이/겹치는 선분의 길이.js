function solution(lines) {
    var answer = 0;
    const all = Array(201*2).fill(0);
    let min=lines[0][0]+100;
    let max=lines[0][1]+100;
    for(line of lines) {
        min = Math.min(min,line[0]+100);
        max = Math.max(max,line[1]+100);
        for(let i=line[0]+100;i<line[1]+100;i++) all[i]++;
    }
    for(let i=min; i<=max; i++){
        if(all[i]>1) answer++;
    }
    return answer;
}