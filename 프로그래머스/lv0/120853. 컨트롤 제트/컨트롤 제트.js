function solution(s) {
    var answer = s.replace(/\s?-?\d+ Z/g,'').split(' ').reduce((a,b)=>a+Number(b),0)
    return answer;
}