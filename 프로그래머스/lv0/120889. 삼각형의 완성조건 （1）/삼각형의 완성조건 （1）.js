function solution(sides) {
    var max = Math.max(...sides);
    var answer = max<sides.reduce((a,b)=>a+b,-1*max)?1:2;
    return answer;
}