function solution(dots) {
    var leans = []
    var answer = 0;
    for(let i=0; i<dots.length-1; i++) {
        for(let j=i+1; j<dots.length; j++){
            const lean = (dots[i][1]-dots[j][1])/(dots[i][0]-dots[j][0]);
            if(leans.includes(lean)) return 1;
            leans.push(lean);
        }
    }
    return answer;
}