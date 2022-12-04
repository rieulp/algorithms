function solution(dots) {
    var answer = 0;
    dots.sort((a,b)=>{
        if(a[0]===b[0]) return b[1]-a[1];
        return a[0]-b[0];
    })
    answer = (dots[0][1] - dots[3][1]) * (dots[3][0] - dots[0][0])
    return answer;
}