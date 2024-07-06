function solution(l, r) {
    var answer = [];
    const min = Math.ceil(l/5)*5;
    console.log(min)
    for(let i = min ; i<=r; i+=5){
        if(/^[50]*$/.test(i.toString())) answer.push(i)
    }
    if(!answer.length) answer.push(-1)
    return answer;
}