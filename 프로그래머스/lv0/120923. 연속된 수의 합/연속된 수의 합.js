function solution(num, total) {
    var answer = [];
    const mid = Math.floor(total/num);
    const start = mid-Math.floor((num-1)/2);
    for(let i=start; i<start+num; i++) answer.push(i);
    return answer;
}